(ns ui.ethereum
  (:require [clojure.walk :as wk]
            [shared.debug :refer [mdbg]]))

(defn replace-contract-references [form contract]
  (wk/postwalk (fn [form]
                 (if (and (seq? form) (seq form) (instance? clojure.lang.Named (first form)) (= (namespace (first form)) (name contract)))
                   `(~'chan-call ~contract ~(keyword (name (first form))) ~@(rest form))
                   form))
           form))

(defmacro with-contract [[contract-name contract-value] & body]
  `(let [~contract-name ~contract-value]
     ~@(replace-contract-references body contract-name)))
