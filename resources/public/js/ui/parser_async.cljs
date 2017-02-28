(ns ui.parser-async
  (:require-macros [shared.debug :refer [mdbg]]
                   [cljs.core.async.macros :refer [go]])
  (:require [clojure.set :as set]
            [om.util :as util]
            [om.next.impl.parser :as op]
            [cljs.core.async :as as :refer [<! >!]]))

(defn async-query-result [result]
  (let [val-chan (as/chan)]
    (go (doseq [[k v] result]
          (>! val-chan [k (if (map? v)
                            (<! (:result v))
                            (<! v))]))
        (as/close! val-chan))
    (go (<! (as/reduce (fn [acc [k v]]
                         (assoc acc k v))
                       {}
                       val-chan)))))

(defn parser
  "Given a :read and/or :mutate function return a parser. Refer to om.next/parser
   for top level documentation."
  [{:keys [read mutate] :as config}]
  (fn self
    ([env query] (self env query nil))
    ([env query target]
     (let [elide-paths? (or (:elide-paths config) (:query-root env))
              {:keys [path] :as env}
              (cond-> (assoc env :parser self :target target :query-root :om.next/root)
                (not (contains? env :path)) (assoc :path []))]
          (letfn [(step [ret expr]
                    (go (let [{query' :query :keys [key dispatch-key params] :as ast} (op/expr->ast expr)
                            env   (cond-> (merge env {:ast ast :query query'})
                                    (nil? query')   (dissoc :query)
                                    (= '... query') (assoc :query query)
                                    (vector? key)   (assoc :query-root key))
                            type  (:type ast)
                            call? (= :call type)
                            res   (case type
                                    :call
                                    (do
                                      (assert mutate "Parse mutation attempted but no :mutate function supplied")
                                      (mutate env dispatch-key params))
                                    (:prop :join :union)
                                    (do
                                      (assert read "Parse read attempted but no :read function supplied")
                                      (read env dispatch-key params)))]
                        (if-not (nil? target)
                          (let [ast' (get res target)]
                            (cond-> ret
                              (true? ast') (conj expr)
                              (map? ast') (conj (op/ast->expr ast'))))
                          (if-not (or call? (nil? (:target ast)) (contains? res :value))
                            ret
                            (let [error   (atom nil)
                                  mut-ret (atom nil)]
                              (when (and call? (not (nil? (:action res))))
                                (try
                                  (reset! mut-ret ((:action res)))
                                  (catch :default e
                                    (if (op/rethrow? e)
                                      (throw e)
                                      (reset! error e)))))
                              (let [value (:value res)]
                                (when call?
                                  (assert (or (nil? value) (map? value))
                                          (str dispatch-key " mutation :value must be nil or a map with structure {:keys [...]}")))
                                (cond-> ret
                                  (not (nil? value)) (assoc (cond-> key
                                                              (util/unique-ident? key)
                                                              first)
                                                            value)
                                  @mut-ret (assoc-in [key :result] (<! @mut-ret))
                                  @error (assoc key {:om.next/error @error})))))))))]
            (cond-> (go (let [k (loop [acc (if (nil? target) {} [])
                                       lst query]
                                  (if (seq lst)
                                    (recur (<! (step acc (first lst)))
                                           (rest lst))
                                    acc))]
                          (loop [acc {}
                                 lst k]
                            (if (seq lst)
                              (recur (let [v (second (first lst))]
                                       (if (= (type v) cljs.core.async.impl.channels/ManyToManyChannel)
                                         (assoc acc (first (first lst)) (<! v))
                                         (assoc acc (first (first lst)) (:result v))))
                                     (rest lst))
                              acc))))
              (and (nil? target) (not elide-paths?)) (op/path-meta path query)))))))


