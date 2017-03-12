(ns ui.ethereum
  (:require-macros [shared.debug :refer [mdbg mdbg-sample]]
                   [cljs.core.async.macros :refer [go]])
  (:require [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom]
            [om.dom :as domom]
            [goog.dom :as gdom]
            [shared.debug]
            [ui.motion :as mo]
            [ui.contract :as co]
            [ui.util :as ut]
            [clojure.set :as set]
            [clojure.string :as str]
            [cljs.core.async :as as :refer [<! >!]]
            [ui.brain :as br]
            [ui.parser-async :as pa]
            [ui.faq-text :as ft]))

(enable-console-print!)

(def max-items 10)

(def starting-items ["Proof of Stake transition"
                     "Mainstream DAPP use"
                     "Smart contract security"
                     "Government regulation"
                     "Prediction Markets"
                     "Scalability"
                     "Progress on Mobile Clients"
                     "Vitalik's latest t-shirt"
                     "Bitcoin Maximalists"
                     "Moon"])

(def offline false)
j
(defonce loaded
  (let [c (as/chan)]
    (js/window.addEventListener "load"
                                (fn []
                                  (mdbg "loaded")
                                  (as/close! c)))
    c))

(defn memfun-call [obj keyword & args]
  (.apply (aget obj (name keyword)) obj (apply array args)))

(defn contract [abi address]
  (let [k (.contract (.-eth js/web3) (js/JSON.parse abi))]
    (memfun-call k :at address)))

(defn etherean []
  (contract co/etherean-abi co/etherean-address))

(defn chan-call [contract fname & body]
  (let [c          (as/chan)
        start-time (ut/get-tick-count)]
    (.apply (.-call (aget contract (name fname)))
            contract
            (apply array
                   (conj (vec body)
                         (fn [error result]
                           (when error
                             (println "error when triggering" fname)
                             (throw error))
                           #_(println fname (- (get-tick-count) start-time))
                           (go (>! c result)
                               (as/close! c))))))
    c))

(defn staking []
  (go (contract co/staking-abi (<! (chan-call (etherean) :stakingContract)))))

(defn get-network []
  (let [c (as/chan)]
    (js/web3.version.getNetwork (fn [error result]
                                  (go (>! c (int result)))))
    c))

(defn chan-transact [contract fname & body]
  (let [c          (as/chan)
        [obj body] (if (and (seq body) (map? (first body)))
                     [(first body) (rest body)]
                     [{} body])]
    (go (when (= (<! (get-network)) 3)
          (.apply (.-sendTransaction (aget contract (name fname)))
                  contract
                  (apply array
                         (conj (vec body)
                               (clj->js (merge {:gas 4000000} obj))
                               (fn [error result]
                                 (if error
                                   (do (as/close! c)
                                       (if (re-find #"User denied transaction signature" (.-message error))
                                         (ut/show-toast :warning "Transaction Cancelled.")
                                         (throw (.-message error))))
                                   (let [timer (atom nil)]
                                     (reset! timer (js/setInterval (fn []
                                                                     (js/web3.eth.getTransactionReceipt result
                                                                                                        (fn [error receipt]
                                                                                                          (when receipt

                                                                                                            (go (>! c receipt)
                                                                                                                (as/close! c))
                                                                                                            (js/clearInterval @timer)))))
                                                                   5000))))))))
          (<! c)))))

(defn chan-event [contract ename hash & body]
  (let [c (as/chan)
        event (atom nil)]
    (reset! event
            (.apply (aget contract (name ename))
                    contract
                    (apply array
                           (conj (vec body)
                                 (fn [error result]
                                   (when (= (.-transactionHash result) hash)
                                     (go (>! c result)
                                         (as/close! c)
                                         (memfun-call @event :stopWatching))))))))
    c))

(defn query-events [contract starting-block stopping-block ename params]
  (let [c (as/chan)
        event (atom nil)
        start-time (ut/get-tick-count)]
    (reset! event
            (.apply (aget contract (name ename))
                    contract
                    (apply array
                           [params
                            #js {:fromBlock starting-block
                                 :toBlock stopping-block}
                            (fn [error result]
                              #_(println ename (- (get-tick-count) start-time))
                              (go (>! c result)
                                  (as/close! c)
                                  (memfun-call @event :stopWatching)))])))
    c))

(defn get-historical-events [contract starting-block ename params]
  (let [c (as/chan)]
    (.get (.apply (aget contract (name ename))
                  contract
                  (apply array
                         [params
                          #js {:fromBlock starting-block
                               :toBlock "latest"}]))
          (fn [error result]
            (go (>! c (vec result)))))
    c))

(defn get-historical-events-hash [contract starting-block ename params hash]
  (let [c (as/chan)]
    (.get (.apply (aget contract (name ename))
                  contract
                  (apply array
                         [params
                          #js {:fromBlock starting-block
                               :toBlock "latest"}]))
          (fn [error result]
            (go (>! c
                    (vec (filter (fn [event]
                                   (= (.-transactionHash event) hash))
                                 result))))))
    c))

(defn wei->eth [wei]
  (/ (int (js/web3.fromWei wei "finney")) 1000))

(defn get-balance [address]
  (let [c (as/chan)]
    (if address
      (js/web3.eth.getBalance  address
                              (fn [error result]
                                (go (>! c (wei->eth result)))))
      (go (>! c 0)))
    c))

(defn get-block [block]
  (let [c (as/chan)]
    (js/web3.eth.getBlock block
                            (fn [error result]
                              (go (>! c (js->clj result :keywordize-keys true)))))
    c))

(defn block-number []
  (let [c (as/chan)]
    (js/web3.eth.getBlockNumber (fn [error result]
                               (go (>! c result))))
    c))


(defn get-proposal-description [proposal-block proposal-index]
  (go (first (map (fn [x]
                    (js/web3.toAscii x))
                  (.-message (aget (<! (query-events (etherean) proposal-block proposal-block :ProposalMessage #js {:proposalIndex proposal-index})) "args"))))))

(defn recursive-channel-read
  [{:keys [parser query ast] :as env} _ _]
  {:value (let [res (parser env query)]
            res)})

(defmulti read-server om/dispatch)

(defmethod read-server :user/balance [env dispatch-key params]
  {:value (get-balance (aget js/web3.eth.accounts 0))})

(defmethod read-server :etherean/network-id [env dispatch-key params]
  {:value (get-network)})

(defmethod read-server :user/can-vote-proposal [env dispatch-key params]
  {:value (go (<! (chan-call (etherean) :useUpProposalVote)))})

(defmethod read-server :proposal/description [env dispatch-key params]
  (let [{:keys [proposal proposal-id]} env]
    {:value (get-proposal-description (int (aget proposal 3)) (:proposal-id env))}))

(defmethod read-server :proposal/upvotes [env dispatch-key params]
  {:value (go (wei->eth (nth (:proposal env) 0)))})

(defmethod read-server :proposal/downvotes [env dispatch-key params]
  {:value (go (wei->eth (nth (:proposal env) 1)))})

(defmethod read-server :db/id [env dispatch-key params]
  {:value (go (or (:proposal-id env) (:item-id env)))})

(defmethod read-server :etherean/proposals [env dispatch-key params]
  {:value (if offline
            (go [{:db/id 0 :proposal/description "bar" :proposal/upvotes 10 :proposal/downvotes 5}])
            (go (let [{:keys [parser query]} env
                      len                    (int (<! (chan-call (etherean) :proposalsLength)))
                      time                   (int (<! (chan-call (etherean) :startOfDay)))
                      proposals                  (as/chan)]
                  (go (loop [proposal-id (dec len)]
                        (when (>= proposal-id 0)
                          (let [proposal (<! (chan-call (etherean) :proposals proposal-id))]
                            (when (= time (int (aget proposal 2)))
                              (>! proposals (<! (parser (assoc env :proposal proposal :proposal-id proposal-id) query)))
                              (recur (dec proposal-id))))))
                      (as/close! proposals))
                  (vec (map second
                            (sort-by first
                                     (<! (as/reduce (fn [acc {:keys [:db/id] :as item}]
                                                      (assoc acc id item))
                                                    {}
                                                    proposals))))))))})

(defmethod read-server :etherean/main-proposals [& args]
  (apply recursive-channel-read args))

(defmethod read-server :etherean/user [& args]
  (apply recursive-channel-read args))

(defmethod read-server :etherean/stakes [env dispatch-key params]
  {:value (if offline
            (go [{:db/id 0 :stake/value 1000 :stake/address "12345"}])
            (go (let [stakes          (atom [])
                      network-id      (<! (get-network))
                      staking         (<! (staking))]
                  (doseq [sender-index (range (<! (chan-call staking :depositLength)))]
                    (let [sender (<! (chan-call staking :depositList sender-index))
                          k {:db/id sender
                             :stake/value (wei->eth (aget (<! (chan-call staking :deposits sender)) 0))}]
                      (swap! stakes conj k)))
                  @stakes)))})

(defmethod read-server :item/votes [env dispatch-key params]
  (let [{:keys [item-id item]} env
        update-time            (int (aget item 1))
        fun                    (fn [index]
                                 (if (zero? update-time)
                                   (go {:item-votes/total (if (zero? index)
                                                            0
                                                            0.0001)
                                        :item-votes/today (if (zero? index)
                                                            0
                                                            0.0001)})
                                   (go (let [v (<! (chan-call (etherean) :itemVoteInfo item-id index))]
                                         {:item-votes/total (wei->eth (aget v 0)) :item-votes/today (wei->eth (aget v 1))}))))]
    {:value (go [(<! (fun 0)) (<! (fun 1))])}))

(defmethod read-server :item/description [env dispatch-key params]
  (let [proposal-index (int (aget (:item env) 0))
        update-time (int (aget (:item env) 1))]
    {:value (go (if (zero? proposal-index)
                  (starting-items (:item-id env))
                  (let [proposal (<! (chan-call (etherean) :proposals proposal-index))]
                    (<! (get-proposal-description (int (aget proposal 3)) proposal-index)))))}))

(defmethod read-server :etherean/items [env dispatch-key params]
  {:value (if offline
            (ex-info "not implemented" {})
            (go (let [{:keys [parser query]} env
                      items                  (atom [])]
                  (doseq [item-index (range max-items)]
                    (let [item (<! (chan-call (etherean) :items item-index))]
                      (swap! items assoc item-index (<! (parser (assoc env :item item :item-id item-index) query)))))
                  @items)))})

(defmethod read-server :etherean/main-stakes [& args]
  (apply recursive-channel-read args))

(defmethod read-server :etherean/main-brain [& args]
  (apply recursive-channel-read args))

(defmethod read-server :etherean/main-items [& args]
  (apply recursive-channel-read args))

(defmulti mutate-server om/dispatch)

(defn format-message [message]
  (apply array
         (take 4
               (concat (map (fn [x]
                              (apply str x))
                            (partition-all 32 message))
                       (repeat "")))))

(defmethod mutate-server 'proposal/save [env dispatch-key params]
  {:action (fn []
             (let [{:keys [id description]} params]
               (go (let [numb (<! (block-number))
                         hash  (<! (chan-transact (etherean) :addProposal (format-message description)))
                         result (first (<! (get-historical-events (etherean) numb :ProposalMessage #js {})))]
                     {:tempids {[:proposal/by-id id] [:proposal/by-id (int (.-proposalIndex (.-args result)))]}}))))})

(defmethod mutate-server 'proposal/vote [env dispatch-key params]
  {:action (fn []
             (let [{:keys [id direction]} params]
               (go (let [hash (<! (chan-transact (etherean) :voteOnProposal id (= direction :up)))]
                     hash))))})

(defmethod mutate-server 'item/vote [env dispatch-key params]
  {:action (fn []
             (let [{:keys [id direction]} params]
               (go (let [hash (<! (chan-transact (etherean) :voteOnItem id direction))]
                     hash))))})

(defmethod mutate-server 'user/deposit [env dispatch-key params]
  {:action (fn []
             (let [{:keys [value]} params]
               (go (let [staking (<! (staking))]
                     (<! (chan-transact staking :deposit {:value (js/web3.toWei value "ether")}))))))})

(defmethod mutate-server 'user/withdraw [env dispatch-key params]
  {:action (fn []
             (let [{:keys [value]} params]
               (go (let [staking (<! (staking))]
                     (<! (chan-transact staking :withdraw))))))})

(defmethod mutate-server 'etherean/advance-debug-day [env dispatch-key params]
  {:action (fn []
             (go (let [debug-time (int (<! (chan-call (etherean) :debugTime)))]
                   (<! (chan-transact (etherean) :setDebugTime (+ debug-time 86400))))))})

(def server-parser
  (pa/parser {:read   read-server
              :mutate mutate-server}))

(defn process-remote-node [ast]
  (let [chi (map process-remote-node (:children ast))]
    (cond (= (:type ast) :root) (assoc ast :children (concat (keep :ast chi) (apply concat (map :roots chi))))
          (:query-root ast) (let [k (map process-remote-node (:children ast))]
                                  {:ast nil
                                   :roots (cons (assoc ast :children (vec (keep :ast k))) (mapcat :roots k))})
          :else                 {:ast (let [chi (keep :ast chi)]
                                        (when (or (#{:prop :call} (:type ast)) (seq chi))
                                          (assoc ast :children chi)))
                                 :roots (apply concat (keep :roots chi))})))

(defn process-remote-query [query]
  (om/merge-joins (om/ast->query (process-remote-node (om/query->ast query)))))

(defn blockchain-send [{:keys [remote]} cb]
  (go (<! loaded)
      (cb (<! (server-parser {} (process-remote-query remote))))))

