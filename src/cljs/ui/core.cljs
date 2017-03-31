(ns ui.core
  (:require-macros [shared.debug :refer [mdbg mdbg-sample]])
  (:require [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom]
            [om.dom :as domom]
            [blueprint-cljs.core :as bp]
            [goog.dom :as gdom]
            [shared.debug]
            [ui.util :as ut]
            [ui.motion :as mo]
            [clojure.set :as set]
            [clojure.string :as str]
            [ui.brain :as br]
            [ui.faq-text :as ft]
            [ui.ethereum :as et]))

(enable-console-print!)

(def brain-vertices (vec (map (fn [[x y z]]
                                (vector x (- y 0.01) z)) (concat (partition 3 (get-in br/brain-data [:geometries 0 :data :vertices]))
                                             (partition 3 (get-in br/brain-data [:geometries 1 :data :vertices]))))))

(def brain-faces (map (fn [[a b]]
                        [a b])
                      (filter identity
                              (map (fn [a b]
                                     (let [baddies #{34 35 0 284 (+ 284 34) (+ 284 35)}]
                                       (when (and (not (baddies a)) (not (baddies b)))
                                         [a b])))
                             (concat (get-in br/brain-data [:geometries 0 :data :faces])
                                     (map (partial + 284) (get-in br/brain-data [:geometries 1 :data :faces])))
                             (rest (concat (get-in br/brain-data [:geometries 0 :data :faces])
                                           (map (partial + 284) (get-in br/brain-data [:geometries 1 :data :faces]))))))))

(defonce app-state (atom (let [id (om/tempid)]
                       {:proposal/by-id {id {:db/id            id
                                             :proposal/unsaved true}}
                        :proposal/order [[:proposal/by-id id]]
                        :etherean/user  {}
                        :item/by-id     []})))

(defn css-percent [part whole]
  (str (/ (* part 100) whole) "%"))

(defn mining-spinner []
  (dom/div {:style {:height "50px" :width "50px"}} (dom/div {:style {:position "absolute"}} (bp/spinner {:class "pt-intent-primary"}))
           (dom/span {:class "pt-icon-build pt-icon-large" :style {:padding "14px"}})))

(def max-digits 5)

(defn format-vote-number [num]
  (let [whole-digits (count (str (int num)))
        total-digits   (count (str num))]
    (cond (zero? num)                       "0"
          (> whole-digits (- max-digits 2)) (str (int num))
          :else                             (loop [s (subs (str num) 0 max-digits)]
                                              (if (seq s)
                                                (if (= (last s) "0")
                                                  (recur (subs s 0 (dec (count s))))
                                                  (if (= (last s) ".")
                                                    (subs s 0 (dec (count s)))
                                                    s)))))))

(defui Item
  static om/IQuery
  (query [this]
         [:db/id :item/description {:item/votes [:item-votes/today :item-votes/total]} {:etherean/user [:user/stake]}])
  Object
  (initLocalState [this]
                  {:dialog false})
  (render [this]
          (let [{:keys [:db/id :item/description :item/votes :etherean/user]} (om/props this)
                {:keys [:user/stake]} user
                has-stake (pos? stake)
                {:keys [dialog]}            (om/get-state this)
                {:keys [direction]}         dialog
                hide-dialog                 (fn []
                                              (om/update-state! this dissoc :dialog))]
            (dom/div {:class "pt-card pt-interactive pt-elevation-1"
                      :style {:padding-top "5px"
                              :padding-bottom "5px"
                              :padding-left   "0.3em"
                              :overflow       "hidden"
                              :margin-bottom  "1em"
                              :display        "flex"}}
                     (bp/alert {:cancel-button-text  "Cancel"
                                :confirm-button-text (if (zero? direction)
                                                       "Vote down"
                                                       "Vote Up")
                                :intent              (:primary bp/intents)
                                :is-open             dialog
                                :on-cancel           (fn [e]
                                                       (hide-dialog))
                                :on-confirm          (fn [e]
                                                       (hide-dialog)
                                                       (om/transact! this
                                                                     `[(item/vote ~dialog)
                                                                       :etherean/items]))}
                               ;;todo: customize downvote verbiage
                               (dom/p
                                "You can vote up "
                                (dom/i "one item")
                                " in this list per day, as well as vote down "
                                (dom/i "one item")
                                " in this list per day. These votes will be remembered and automatically applied on subsequent days, until you change your choices (or until your up/down choices fall from the front page) ")
                               (dom/p "So... is this an item currently on the mind of ethereans?"))
                     (let [vote-button (fn [direction activated]
                                         (bp/button {:class    (str "pt-minimal pt-icon-symbol-triangle-"
                                                                    (name direction)
                                                                    (when activated
                                                                      " pt-intent-primary"))
                                                     :style    {:line-height 0
                                                                :min-height  0
                                                                :outline     "none"}
                                                     :on-click (fn [e]
                                                                 (if has-stake
                                                                   (om/update-state! this assoc :dialog {:id id :direction ({:down 0 :up 1} direction)})
                                                                   (.show ut/my-toaster #js {:intent (:danger bp/intents)
                                                                                          :message "You need to deposit some stake first before voting on items. Please go to the \"Voting Stake\" tab first."})))}))]
                       (dom/div {:class "pt-button-group pt-vertical"}
                                (vote-button :up false)
                                (dom/div {:style {:text-align  "center"
                                                  :padding-top "0.15em"
                                                  :margin      0
                                                  :font-size   "0.6em"}}
                                         (if votes
                                           (format-vote-number (- (+ (* 0.7 (:item-votes/total (second votes))) (:item-votes/today (second votes))) (+ (* 0.7 (:item-votes/total (first votes))) (:item-votes/today (first votes)))))
                                           "---"))
                                (vote-button :down false)))
                     (let [item-body (fn [desc detail]
                                       (dom/div {:style {:display         "flex"
                                                         :flex-wrap       "wrap"
                                                         :align-items     "center"
                                                         :justify-content "space-between"
                                                         :padding-left "0.3em"
                                                         :flex-grow 1}}
                                                desc
                                                detail))]
                       (item-body description
                                  (when-not votes
                                    (mining-spinner))))))))

(def item-component (om/factory Item))

(defui Items
  static om/IQuery
  (query [this]
         [{:etherean/items (om/get-query Item)}])
  Object
  (render [this]
          (dom/div {:style {:opacity 0.9}} (for [item (:etherean/items (om/props this))]
                        (item-component item)))))

(def items-component (om/factory Items))

(defui Proposal
  static om/IQuery
  (query [this]
         [:proposal/description :db/id :proposal/unsaved :proposal/upvotes :proposal/downvotes {:etherean/user [:user/can-vote-proposal :user/stake]}])
  Object
  (initLocalState [this]
                  {:temp-description ""
                   :height 1
                   :dialog false})
  (render [this]
          (let [{:keys [:proposal/description
                        :db/id
                        :proposal/unsaved
                        :proposal/upvotes
                        :proposal/downvotes
                        :etherean/user]}                      (om/props this)
                {:keys [:user/can-vote-proposal :user/stake]} user
                temporary                                     (om/tempid? id)
                has-stake                                     (pos? stake)
                {:keys [height dialog]}                       (om/get-state this)
                {:keys [direction]}                           dialog
                hide-dialog                                   (fn []
                                                                (om/update-state! this dissoc :dialog))]
            (dom/div (bp/alert {:cancel-button-text  "Cancel"
                                :confirm-button-text (if (= direction :up)
                                                       "Vote Up"
                                                       "Vote Down")
                                :intent              (:primary bp/intents)
                                :is-open             dialog
                                :on-cancel           (fn [e]
                                                       (hide-dialog))
                                :on-confirm          (fn [e]
                                                       (hide-dialog)
                                                       (om/transact! this
                                                                     `[(proposal/vote ~dialog)
                                                                       :etherean/proposals]))}
                               "You can vote on one proposal per day. Is this an item currently on the mind of ethereans, that deserves to be listed on the front page?")
                     (mo/motion {:key          id
                                 :defaultStyle {:height (if unsaved
                                                          0
                                                          1)}
                                 :style        {:height (mo/spring height)}}
                                (fn [value]
                                  (dom/div {:class "pt-card pt-interactive pt-elevation-1"
                                            :style {:padding-top    (str (* 5 (:height value)) "px")
                                                    :padding-bottom (str (* 5 (:height value)) "px")
                                                    :padding-left   "0.3em"
                                                    :overflow       "hidden"
                                                    :margin-bottom  "1em"
                                                    :display        "flex"}}
                                           (let [vote-button (fn [direction activated disabled]
                                                               (bp/button {:class    (str "pt-minimal pt-icon-symbol-triangle-"
                                                                                          (name direction)
                                                                                          (when activated
                                                                                            " pt-intent-primary"))
                                                                           :disabled disabled
                                                                           :style    {:line-height 0
                                                                                      :min-height  0
                                                                                      :outline     "none"}
                                                                           :on-click (fn [e]
                                                                                       (if (and has-stake can-vote-proposal)
                                                                                         (om/update-state! this assoc :dialog {:id id :direction direction})
                                                                                         (.show ut/my-toaster #js {:intent (:danger bp/intents)
                                                                                                                :message (if has-stake
                                                                                                                           "You already voted on a proposal today. You will need to wait until tomorrow to vote again."
                                                                                                                           "Please deposit stake first in the stake tab to vote on proposals.") } )))}))]
                                             (dom/div {:class "pt-button-group pt-vertical"}
                                                      (vote-button :up false unsaved)
                                                      (dom/div {:style {:text-align  "center"
                                                                        :padding-top "0.15em"
                                                                        :margin      0
                                                                        :font-size   "0.6em"}}
                                                               (cond unsaved nil
                                                                     upvotes (format-vote-number (- upvotes downvotes))
                                                                     :else   "---"))
                                                      (vote-button :down false unsaved)))
                                           (let [proposal-body (fn [desc detail disabled]
                                                                 (dom/div {:style    {:display         "flex"
                                                                                      :flex-wrap       "wrap"
                                                                                      :align-items     "center"
                                                                                      :justify-content "space-between"
                                                                                      :padding-left    "0.3em"
                                                                                      :flex-grow       1}
                                                                           :on-click (fn []
                                                                                       (when disabled
                                                                                         (.show ut/my-toaster #js {:intent  (:danger bp/intents)
                                                                                                                :message "You have not staked any funds yet. Please got to the \"Voting Stakes\" tab first." })))
}
                                                                          desc
                                                                          detail))]
                                             (if unsaved
                                               (let [temp-description (:temp-description (om/get-state this))
                                                     has-description  (seq temp-description)
                                                     save-fn          (fn []
                                                                        (when has-description
                                                                          (om/transact! this `[(proposal/save {:id ~id :description ~temp-description})
                                                                                               :etherean/proposals])))]
                                                 (proposal-body (bp/editable-text {:placeholder (cond (not has-stake)         "... (Please deposit stake first to propose an item)"
                                                                                                      (not can-vote-proposal) "... (Today's proposal action already used up)"
                                                                                                      :else                   "... propose a new item!")
                                                                                   :value       temp-description
                                                                                   :disabled    (or (not has-stake) (not can-vote-proposal))
                                                                                   :on-change   (fn [s]
                                                                                                  (om/update-state! this assoc :temp-description s))
                                                                                   #_#_:on-confirm save-fn})
                                                                (when has-description
                                                                  (bp/button {:class    "pt-intent-primary pt-icon-plus pt-minimal"
                                                                              :on-click save-fn}
                                                                             "Save"))
                                                                (not has-stake)))
                                               (proposal-body description
                                                              (when (or temporary (not upvotes))
                                                                (mining-spinner))
                                                              false))))))))))

(def proposal-component (om/factory Proposal {:keyfn :db/id}))

(defui Proposals
  static om/IQuery
  (query [this]
         [{:etherean/proposals (om/get-query Proposal)}])
  Object
  (render [this]
          (dom/div (for [proposal (:etherean/proposals (om/props this))]
                     (proposal-component proposal))
                   #_(bp/button {:on-click (fn []
                                           (om/transact! this `[(etherean/advance-debug-day)]))}))))

(def proposals-component (om/factory Proposals))

(defui Stake
  static om/IQuery
  (query [this]
         [:db/id :stake/value])
  Object
  (render [this]
          (let [{:keys [:db/id :stake/value]} (om/props this)]
            (dom/tr (dom/td id) (dom/td value)))))

(def stake-component (om/factory Stake {:keyfn :db/id}))

(defn format-address [address]
  (when address
    (dom/i {:style {:font-weight 200}} (subs address 0 8) "...")))

(defui Stakes
  static om/IQuery
  (query [this]
         [{:etherean/user [:user/stake :user/address :user/balance]} {:etherean/stakes (om/get-query Stake)}])
  Object
  (initLocalState [this]
                  {})
  (render [this]
          (let [{:keys [:etherean/stakes :etherean/user]} (om/props this)
                {:keys [:user/stake :user/address :user/balance]} user]
            (dom/div {:style {:opacity 0.8}}
             (dom/div {:class "pt-card pt-interactive pt-elevation-1"
                       :style {:display "flex"
                               :flex-direction "column"
                               :align-items "center"}}
                      (dom/h3 "Current Stake")
                      (if (= stake :mining)
                        (mining-spinner)
                        (dom/h3 {:style {:color "#2b95d6"
                                         #_#_ :font-size "2em"}} stake
                                " ETH"))
                      (dom/span "(associated with account " (format-address address) ")")
                      (when (zero? stake)
                        (dom/div {:class "pt-callout pt-icon-info-sign"
                                  :style {:margin-top "0.5rem"}}
                         "You do not currently have any voting stake for EthereanMind. To be able to vote on proposals and top 10 items, you need to deposit some fully-refundable coins into the EthereanMind staking contract."))
                      (dom/div {:class "pt-button-group"
                                :style {:margin-top "0.5rem"}}
                               (bp/button {:class "pt-intent-primary"
                                           :on-click (fn [e]
                                                       (om/update-state! this assoc :dialog {:type  :deposit
                                                                                             :value ""}))}
                                          "Deposit Stake")
                               (bp/button {:on-click (fn [e]
                                                       (om/update-state! this assoc :dialog{:type  :withdraw}))}
                                          "Withdraw Stake")))
              (let [{:keys [:dialog]}      (om/get-state this)
                   {:keys [:type :value]} dialog]
               (let [value-status (cond (= value "")       :missing
                                        (<= value balance) :good
                                        :else              :bad)
                     close-dialog (fn []
                                    (om/update-state! this dissoc :dialog))]
                 (bp/dialog {:is-open dialog
                             :on-close close-dialog
                                   :title   (if (= type :deposit)
                                              "Deposit Stake"
                                              "Withdraw Stake")}
                            (dom/div {:class "pt-dialog-body"}
                                     (if (= type :deposit)
                                       [(dom/p "In order to vote on ethereanmind you need to place a refundable deposit of ether. You will be able to start voting immediately after depositing ether, but you need to wait a month before you can withdraw your deposit again.")
                                        (dom/p  (dom/b "The rules of the smart contract assure that no one else can withdraw your money and that you will receive back 100% of your deposit."))
                                        (dom/p "Balance available: " balance " Ether")
                                        (bp/input-group {#_#_:class       "pt-input pt-fill"
                                                         :placeholder "Deposit Amount (Ether)"
                                                         :value       value
                                                         :right-element (when (not= value-status :missing)
                                                                          (bp/button {:class (if (= value-status :good)
                                                                                               "pt-icon-tick pt-intent-success"
                                                                                               "pt-icon-cross pt-intent-danger")}))
                                                         :on-change    (fn [e]
                                                                         (let [value-new (.-value (.-target e))]
                                                                           (if (re-matches #"[0-9]*\.?[0-9]*" value-new)
                                                                             (om/update-state! this assoc-in [:dialog :value] value-new)
                                                                             (om/update-state! this assoc-in [:dialog :value] value))
                                                                           (om/update-state! this assoc-in [:noise] (rand-int 1000000))))})]
                                       [(dom/p "You can now withdraw all of your stake (Currently " stake " Ether) back into your regular ethereum account at [" (format-address address) "]. At that point, you will no longer be able to participate in voting- You'll need to deposit new funds to vote again.")]))
                                  (dom/div {:class "pt-dialog-footer"}
                                           (dom/div {:class "pt-dialog-footer-actions"}
                                                    (bp/button {:disabled (not= value-status :good)
                                                                :class    "pt-intent-primary"
                                                                :on-click (fn [e]
                                                                            (if (= type :deposit)
                                                                              (om/transact! this `[(user/deposit {:value ~value})
                                                                                                   :etherean/main-stakes])
                                                                              (om/transact! this `[(user/withdraw)
                                                                                                   :etherean/main-stakes]))
                                                                            (om/update-state! this dissoc :dialog))}
                                                               (if (= type :deposit)
                                                                 "Deposit"
                                                                 "Withdraw"))
                                                    (bp/button {:on-click close-dialog}
                                                               "Cancel"))))))
              (dom/div {:class "pt-card pt-interactive pt-elevation-1"
                        :style {:margin-top  "1rem"
                                :display "flex"
                               :flex-direction "column"
                               :align-items "center"}}
                       (dom/h3 "Staking Statistics")
                       (dom/div "If you're curious about who else is using this dapp, and are using an ethereum data source that can handle large queres, click this button:")
                       (dom/p {:style {:margin "1em"}} (dom/i "(Coming Soon...)"))
                       #_(bp/button {:style {:margin-top "1em"}} "Load Statistics")
                       #_(dom/table {:class "pt-table pt-striped pt-bordered"}
                                  (dom/thead (dom/tr (dom/th "address")
                                                     (dom/th "stake (ETH)")))
                                  (dom/tbody (for [stake stakes]
                                               (stake-component stake)))))))))

(def stakes-component (om/factory Stakes))

(def canvas-resolution 800)

(defn brain-prerender [sections]
  (:vertex-colors (reduce (fn [{:keys [vertices vertex-colors index total] :as acc} item]
                            (let [{:keys [cur-vertices rest-vertices]}
                                  (first (sort-by :length
                                                  (for [coord (range 3)]
                                                    (let [region-size  (int (* (count vertices) (/ (:size item) total) ))
                                                          vertices     (sort-by #(nth % coord) vertices)
                                                          cur-vertices (take region-size vertices)]
                                                      {:cur-vertices  cur-vertices 
                                                       :rest-vertices (drop region-size vertices)
                                                       :length        (- (Math/abs (- (nth (first cur-vertices) coord) (nth (last cur-vertices) coord))))}))))]
                              {:vertices      rest-vertices
                               :vertex-colors (into vertex-colors
                                                    (for [vertex cur-vertices]
                                                      [vertex index]))
                               :index         (inc index)
                               :total         (- total (:size item))}))
                          {:vertices      brain-vertices
                           :vertex-colors {}
                           :index         0
                           :total         (apply + (map :size sections))}
                          sections)))

(defn render-graph [brain-faces vertexes vertex-colors]
  (for [[region faces] (group-by (fn [k]
                                          (vertex-colors (vertexes (first k))))
                                        brain-faces)]
    (let [centroid (vec (for [n (range 3)]
                      (/ (apply +
                                (map (fn [face]
                                       ((vertexes (first face)) n))
                                     faces))
                         (count faces))))]
      {:region   region
       :faces    faces
       :centroid centroid
       :label    (let [dist     (Math/sqrt (apply + (map * centroid centroid)))
                       max-dist 0.065
                       mult     (if (< dist max-dist)
                                  1
                                  (/ max-dist dist))]
                   (update (vec (map (partial * 1.7 mult) centroid))
                           2
                           (fn [y]
                             (max (min 0.11 (* y 0.9)) -0.05))))})))

(defn region-color [index]
  ([[0 0 1] [0 1 0] [0 1 1] [1 0 0] [1 0 1] [1 1 0] [1 1 1] [0 0.2 1] [0 1 0.2] [1 0 0.2]] index))

(defn point->screen [canvas-resolution rotation [xx yy zz :as vertex]]
  (let [sin (js/Math.sin rotation)
        cos (js/Math.cos rotation)
        x   (- (* sin xx) (* cos yy))
        y   (- zz)
        z   (* 8 (+ (* cos xx) (* sin yy)))]
    [(+ (/ canvas-resolution 2) (* 4 x canvas-resolution)) (+ (/ canvas-resolution 2.2) (* 4 y canvas-resolution)) z]))

(def brain-state (atom {:rotation 0
                        :sections nil
                        :colored 1}))

(defn render-brain [ctx rotation render-graph]
  (let [starting-time (ut/get-tick-count)
        vertices      (vec (map (partial point->screen canvas-resolution rotation) brain-vertices))
        line          (fn [a b]
                        (doto ctx
                          (.beginPath)
                          (.moveTo ((vertices a) 0) ((vertices a) 1))
                          (.lineTo ((vertices b) 0) ((vertices b) 1))
                          (.stroke)))
        rgb           (fn [color brightness opaque]
                        (str "rgba("
                             (apply str
                                    (interpose ","
                                               (conj (vec (for [c color]
                                                            (let [colored (:colored @brain-state)]
                                                              (int (+ (* colored (min (* (+ 50 (* 160 c)) (+ 0.7 brightness)) 255))
                                                                      (* (- 1 colored) 255))))))
                                                     (if opaque
                                                       (+ 0 (* 1 (:colored @brain-state)))
                                                       (+ 0.05 (* 0.45 (:colored @brain-state)))))))))
        set-color     (fn [color brightness]
                        (set! (.-strokeStyle ctx) (rgb color brightness false)))
        render-text   (fn [{:keys [text color location]}]
                        (when (pos? (:colored @brain-state))
                          (set! (.-lineWidth ctx) 4)
                          (let [[x y z] location]
                            (set! (.-strokeStyle ctx) "#111A22")
                            (set! (.-fillStyle ctx) (rgb color (+ (* z 2) 1) true))
                            (doall (map-indexed (fn [index s]
                                                  (doto ctx
                                                    (.strokeText s x (+ y (* index 15)))
                                                    (.fillText s x (+ y (* index 15)))))
                                                (str/split text #" "))))
                          (set! (.-lineWidth ctx) 1)))
        sections      (:sections @brain-state)]
    (.clearRect ctx 0 0 canvas-resolution canvas-resolution)
    (set! (.-font ctx) "15px sans-serif")
    (set! (.-textAlign ctx) "center")
    (let [labels (when (seq sections)
                   (sort-by (fn [label]
                              (get-in label [:location 2]))
                            (for [{:keys [region centroid label]} (filter :region render-graph)]
                              {:text (:description (sections region))
                               :color (region-color (:index (sections region)))
                               :location (point->screen canvas-resolution rotation label)})))
          render-labels (fn [from to]
                          (doseq [label labels]
                            (when (< from (get-in label [:location 2]) to)
                              (render-text label))))]
      (doseq [[begin end brightness] [[-1000 -0.3 0] [-0.3 0.3 1] [0.3 1000 2]]]
        (when (= begin -1000)
          (render-labels begin end))
        (doseq [{:keys [region faces centroid label]} render-graph]
          (let [color (if (seq sections)
                        (region-color (:index (sections region)))
                        [1 1 1])]
            (set-color color brightness)
            (doseq [[a b c :as face] faces]
              (when (< begin ((vertices a) 2) end)
                (line a b)))))
        (when-not (= begin -1000)
          (render-labels begin end)))
)
    #_(mdbg (- (get-tick-count) starting-time))))

(defui Brain
  static om/IQuery
  (query [this]
         [{:etherean/items [:item/description {:item/votes [:item-votes/today :item-votes/total]}]}])
  Object
  (initLocalState [this]
                  {:interval nil})
  (componentDidMount [this]
                     (om/update-state! this
                                       assoc
                                       :interval
                                       (js/setInterval (fn []
                                                         (swap! brain-state
                                                                update
                                                                :rotation
                                                                (fn [rotation]
                                                                  (render-brain (.getContext (:canvas @brain-state) "2d") rotation (:render-graph @brain-state))
                                                                  (+ rotation (:speed @brain-state)))))
                                                       50)))
  (componentWillUnmount [this]
                        (js/clearInterval (:interval (om/get-state this))))
  (render [this]
          (let [{:keys [:etherean/items] :as props} (om/props this)
                loading                             (not (seq items))
                scores                              (vec (for [item items]
                                                           (let [{:keys [:item/votes]} item]
                                                             (max 0 (- (+ (* 0.7 (:item-votes/total (second votes))) (:item-votes/today (second votes))) (+ (* 0.7 (:item-votes/total (first votes))) (:item-votes/today (first votes))))))))
                sections                            (vec (map (fn [index item score]
                                                                (let [{:keys [:item/description]} item]
                                                                  {:description (:item/description item)
                                                                   :size (max score (/ (apply + scores) 50))
                                                                   :index index}))
                                                              (range)
                                                              items
                                                              scores))
                sections (vec (sort-by (comp - :size) sections))
                {:keys [mode]}                      (om/get-computed props)]
            (swap! brain-state
                   (fn [brain-state]
                     (if (not= sections (:sections brain-state))
                       (let [br (brain-prerender sections)]
                         (assoc brain-state :sections sections
                                :regions  br
                                :render-graph (render-graph brain-faces brain-vertices br)))
                       brain-state)))
            (mo/motion {:defaultStyle {:top     0
                                       :colored 0
                                       :width   100
                                       :speed 0.01}
                        :style        {:colored (mo/spring (if (and (= mode :brain) (not loading))
                                                             1
                                                             0)
                                                           mo/gentle)
                                       :top     (mo/spring (if (= mode :zoom)
                                                             50
                                                             0))
                                       :width   (mo/spring (if (= mode :zoom)
                                                             150
                                                             60)
                                                           mo/wobbly)
                                       :speed (if (#{:brain :white} mode)
                                                   0.01
                                                   0)}}
                       (fn [value]
                         (swap! brain-state
                                assoc
                                :colored (:colored value)
                                :speed (:speed value))
                         (dom/div {:style {:width    (str (:width value) "vmin")
                                           :height   (str (:width value) "vmin")
                                           :position "absolute"
                                           :z-index  (if (> (:colored value) 0.5)
                                                       1
                                                       -1)
                                           :top      (str (:top value) "%")}}
                                  (dom/canvas {:ref    (fn [canvas]
                                                         (swap! brain-state assoc :canvas canvas)) 
                                               :width  canvas-resolution
                                               :height canvas-resolution
                                               :style  {:height "100%"
                                                        :width  "100%"}})
                                  (when loading
                                    (dom/div {:style {:position "absolute"
                                                      :top "40%"
                                                      :left "25%"
                                                      :right "25%"
                                                      :height "20%"}}
                                             (dom/p {:style {:text-align "center"}}
                                                      "Brain Initializing from Ethereum Blockchain")
                                             (bp/progress-bar)))))))))

(def brain-component (om/factory Brain))

(defui Root
  static om/IQuery
  (query [this]
         [:etherean/network-id :user/stake :user/can-vote-proposal {:etherean/main-proposals (om/get-query Proposals)} {:etherean/main-stakes (om/get-query Stakes)} {:etherean/main-brain (om/get-query Brain)} {:etherean/main-items (om/get-query Items)}])
  Object
  (initLocalState [this]
                  {:intervals {:address nil}
                   :address nil
                   :canvas-mode :brain})
  (componentDidMount [this]
                     (om/update-state! this
                                       assoc
                                       :intervals
                                       {:address   (let [update-address (fn []
                                                                          (let [address (when (exists? js/web3)
                                                                                          (aget js/web3.eth.accounts 0))]
                                                                               (when (not= address (:address (om/get-state this)))
                                                                                 (om/update-state! this assoc :address address)
                                                                                 (om/transact! this `[(user/change-address {:address ~address}) #_{:etherean/user [:user/balance]}]))))]
                                                     (update-address)
                                                     (js/setInterval update-address 1000))}))
  (componentWillUnmount [this]
                        (js/clearInterval (get-in (om/get-state this) [:intervals :address])))
  (render [this] 
          (let [{:keys [:etherean/network-id :user/can-vote-proposal :user/stake] proposals-props :etherean/main-proposals stakes-props :etherean/main-stakes items-props :etherean/main-items brain-props :etherean/main-brain} (om/props this)]

            (dom/div {:class "pt-dark" :style {:display "flex" :justify-content "center" :zoom 1.3}}
                     (dom/div { :style {:flex-grow "1" :max-width "600px"}}
                              (bp/tabs {#_#_:initial-selected-tab-index 4
                                        :on-change (fn [index]
                                                     (om/update-state! this assoc :canvas-mode ([:brain :stopped :zoom :white :white] index)))} (bp/tab-list (bp/tab "Brain") (bp/tab "Top 10 Items") (bp/tab "Today's Proposed Items") (bp/tab "Voting Stakes") (bp/tab "FAQ"))
                                       (bp/tab-panel (dom/div {:style {:position       "absolute"
                                                                       :bottom         0
                                                                       :left           0
                                                                       :right          0
                                                                       :display        "flex"
                                                                       :flex-direction "column"
                                                                       :align-items    "center"}}
                                                              (dom/div {:class "pt-card pt-elevation-4"
                                                                        :style {:opacity       (if (exists? js/web3)
                                                                                                 0.7
                                                                                                 1)
                                                                                :max-width "500px"
                                                                                :margin-bottom "2rem"}}
                                                                       (when-not (exists? js/web3)
                                                                         
                                                                         (dom/div {:style {:display "flex"
                                                                                           :align-items "center"
                                                                                           :font-size "1.1rem"
                                                                                           :margin-bottom "2rem"}}
                                                                                  (dom/div {:style {:margin "0.5em"}}
                                                                                           "EthereanMind requires access to the "
                                                                                           (dom/a {:target "_blank"
                                                                                                   :href   "http://ethereum.org"}
                                                                                                  "ethereum network ")
                                                                                           "to initialize. Please install the "
                                                                                           (dom/a {:target "_blank"
                                                                                                   :href   "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"}
                                                                                                  "metamask chrome extension")
                                                                                           ", or a similar ethereum data source.")
                                                                                  (dom/img {:src "metamask.png"})))
                                                                       (dom/h3 {:style {:text-align "center"}} "Ethereans, what's on your mind?")
                                                                       (dom/p "EthereanMind lets ethereum users maintain a decentralized \"Top 10 list\" of the most important items to the community. Voting attacks are prevented via time-locked, fully refundable deposits in a staking contract."))
                                                              (when (and (exists? js/web3) network-id (not= network-id 3))
                                                                (dom/div {:class "pt-callout pt-intent-danger pt-icon-warning-sign"
                                                                          :style {:max-width "500px"
                                                                                  :margin-bottom "2rem"}}
                                                                         (dom/h5 "Wrong Network!")
                                                                         (if (= network-id 1)
                                                                           "You are currently connected to the Ethereum main network which uses real currency. This beta dapp is still running on the Ropsten testnet, which uses free currency. Do not yet use real money with this dapp!"
                                                                           "You are connected to the wrong network! This beta dapp is currently runing on the Ropsten Testnet. In Metamask, change the network option in the upper left corner of the popup window.")))
                                                              (when (= network-id 3)
                                                                (dom/div {:class "pt-callout pt-intent-warning pt-icon-warning-sign"
                                                                          :style {:max-width "500px"
                                                                                  :margin-bottom "2rem"
                                                                                  :opacity 0.5
                                                                                  :font-size "0.7em"}}
                                                                         (dom/h5 "Ropsten Testnet Attack")
                                                                         "Please be aware that the ethereum testnet is experiencing a (senseless) spam attack this week. This may cause failures in staking/voting that will not exist once this app goes out of beta on the main ethereum network."))))
                                       (bp/tab-panel (items-component items-props))

                                       (bp/tab-panel (proposals-component proposals-props))
                                       (bp/tab-panel (stakes-component  stakes-props))
                                       (bp/tab-panel ft/faq-text)))
                     (dom/div {:key "foo"
                               :style {:position "fixed"
                                       :display "flex"
                                       :flex-direction "column"
                                       :align-items "flex-end"
                                       :right    0
                                       :bottom   0
                                       :padding  "0.5rem"
                                       :opacity  "0.5"}}
                              (when (= false can-vote-proposal)
                                (bp/tag {:style {:margin "0.15em"}} "Today's proposal action used up"))
                              (bp/tag {:style {:margin "0.15em"}}
                               "Current Stake: " (if (= stake :mining)
                                                   (bp/spinner {:class "pt-small"})
                                                   stake) " Ether"))
                     (dom/div {:key "bar"
                               :style {:pointer-events "none " :opacity 1 :position "absolute" :height "100%" :width "100%" :top 0 :left 0 :display "flex" :justify-content "center" :align-items "center"}}
                              (brain-component (om/computed brain-props {:mode (:canvas-mode (om/get-state this))})))))))

(defn simple-read
  [{:keys [state] :as env} key _]
  {:value (@state key)})

(defn simple-read-with-remote
  [{:keys [state] :as env} key _]
  (let [value (@state key)]
    {:value value
     :remote (not value)}))

(defn recursive-read
  [query-root {:keys [parser query target ast] :as env} _ _]
  (if target
    {target (assoc ast :query-root query-root :query (parser env query target))}
    {:value (parser env query)}))

(defmulti read om/dispatch)

(defmethod read :etherean/user [& args]
  (apply recursive-read true args))

(defmethod read :user/address [env dispatch-key params]
  {:value (get-in @(:state env) [:etherean/user dispatch-key])})

(defmethod read :user/balance [env dispatch-key params]
  {:remote true
   :value  (get-in @(:state env) [:etherean/user dispatch-key])})

(defmethod read :user/can-vote-proposal [env dispatch-key params]
  {:remote true
   :value (get-in @(:state env) [:etherean/user dispatch-key])})

(defmethod read :user/stake [env dispatch-key params]
  {#_#_:remote {:type :join :dispatch-key :etherean/main-stakes :key :etherean/main-stakes :query [] :children [] :query-root true}
   :value (or (get-in @(:state env) [:stake/by-id (get-in @(:state env) [:etherean/user :user/address]) :stake/value]) 0)})

(defmethod read :etherean/items [env k params]
  (let [{:keys [parser state query target ast]} env
        state @state]
    (if target
      {target (assoc ast :query (parser env query target))}
      {:value (for [item (:item/by-id state)]
                (parser (assoc env :item item) query))})))

(defmethod read :etherean/proposals [env k params]
  (let [{:keys [parser state query target ast]} env
        state @state
        {:keys [proposal/order]} state]
    (if target
      {target (assoc ast :query (parser env query target))}
      {:value (for [proposal order]
                (parser (assoc env :proposal (get-in state proposal)) query))})))

(defmethod read :etherean/stakes [env dispatch-key params]
  (let [{:keys [parser state query target ast]} env
        state @state
        {:keys [stake/by-id]} state]
    (if target
      {target (assoc ast :query (parser env query target))}
      {:value (for [stake (vals by-id)]
                (parser (assoc env :stake stake) query))})))

(defmethod read :etherean/main-items [& args]
  (apply recursive-read false args))

(defmethod read :etherean/main-proposals [& args]
  (apply recursive-read false args))

(defmethod read :etherean/main-stakes [& args]
  (apply recursive-read false args))

(defmethod read :etherean/main-brain [& args]
  (apply recursive-read false args))

(defmethod read :item/votes [env k params]
  (let [{:keys [parser state query target ast]} env
        state @state
        {:keys [item/votes]} (:item env)]
    (if target
      {target (assoc ast :query (parser env query target))}
      {:value (when votes
                (for [item-votes votes]
                  (parser (assoc env :item-votes item-votes) query)))})))

(doseq [[object method remote] [[:proposal   :proposal/description true]
                                [:proposal   :proposal/unsaved     false]
                                [:proposal   :proposal/upvotes     true]
                                [:proposal   :proposal/downvotes   true]
                                [:stake      :stake/value          true]
                                [:item       :item/description     true]
                                [:item-votes :item-votes/today     true]
                                [:item-votes :item-votes/total     true]]]
  (defmethod read method [env dispatch-key params]
    {:remote remote
     :value  (get-in env [object dispatch-key])}))

(defmethod read :db/id [env dispatch-key params]
  {:remote true
   :value  (when-let [obj (or (:proposal env) (:stake env) (:item env))]
             (obj dispatch-key))})

(defmethod read :etherean/network-id [& args]
  (apply simple-read-with-remote args))

(defmulti mutate om/dispatch)

(defmethod mutate 'proposal/save [env k params]
  {:remote true
   :action (fn []
             (let [{:keys [id description]} params]
               (swap! (:state env)
                      (fn [state]
                        (let [{proposals :proposal/by-id} state
                              proposal                (proposals id)
                              new-tempid          (om/tempid)]
                          (-> state
                              (assoc :proposal/by-id
                                     (-> proposals
                                         (update id
                                                 assoc
                                                 :proposal/description description
                                                 :proposal/unsaved     false)
                                         (assoc new-tempid
                                                (assoc proposal
                                                       :db/id        new-tempid
                                                       :proposal/unsaved true))))
                              (update :proposal/order conj [:proposal/by-id  new-tempid])))))))})

(defmethod mutate 'proposal/vote [env k params]
  {:remote true
   :action (fn []
             (swap! (:state env)
                    (fn [state]
                      (update-in state [:proposal/by-id (:id params)] dissoc :proposal/upvotes))))})

(defmethod mutate 'item/vote [env k params]
  {:remote true
   :action (fn []
             (swap! (:state env)
                    (fn [state]
                      (update-in state [:item/by-id (:id params)] dissoc :item/votes))))})

(defmethod mutate 'etherean/advance-debug-day [env k params]
  {:remote true})

(defmethod mutate 'user/change-address [env dispatch-key params]
  {:action (fn []
             (swap! (:state env)
                    (fn [state]
                      (let [{:keys [address]} params]
                        (assoc-in state [:etherean/user :user/address] address)))))})

(defmethod mutate 'user/deposit [env dispath-key params]
  {:remote true
   :action (fn []
             (swap! (:state env)
                    (fn [state]
                      (assoc-in state [:stake/by-id (get-in state [:etherean/user :user/address]) :stake/value] :mining))))})

(defmethod mutate 'user/withdraw [env dispath-key params]
  {:remote true
   :action (fn []
             (swap! (:state env)
                    (fn [state]
                      (assoc-in state [:stake/by-id (get-in state [:etherean/user :user/address]) :stake/value] :mining))))})

(defn tweak-tree [b]
  (let [nodes-to-elide #{:etherean/main-proposals :etherean/main-stakes :etherean/main-items :etherean/main-brain}
        nodes (set/intersection (set (keys b)) nodes-to-elide)]
    (if (seq nodes)
      (let [node (first nodes)]
        (tweak-tree (merge (dissoc b node) (b node))))
      b)))

(defn map-by-id [items]
  (into {}
        (for [item items]
          [(:db/id item) item])))

(defn my-merge-tree [a b]
  #_(println "merging in " b)
  (let [{:keys [:etherean/network-id :etherean/proposals :proposal/order :etherean/stakes :etherean/user :etherean/items]} (tweak-tree b)]
    (-> a
        (update :etherean/network-id (fn [k]
                                       (or network-id k)))
        (update :etherean/user merge user)
        (update :proposal/by-id (fn [proposals-old]
                              (merge-with merge proposals-old (map-by-id proposals))))
        (update :proposal/order (fn [order-old]
                                  (if proposals
                                    (let [ks (concat (map :db/id proposals) (filter om/tempid? (map second order-old)))]
                                      (vec (for [k ks]
                                             [:proposal/by-id k])))
                                    order-old)))
        (update :stake/by-id (fn [stakes-old]
                               (merge-with merge stakes-old (map-by-id stakes))))
        (update :item/by-id (fn [items-old]
                              (or items items-old))))))

(defn my-merge [reconciler state res query]
  (let [k (into [] (remove symbol?) (keys res))]
    {:keys    k
     :next    (om/merge-novelty! reconciler state (select-keys res k) query)
     :tempids (->> (filter (comp symbol? first) res)
                   (map (comp :tempids second))
                   (reduce merge {}))}))

(defn migrate
  ([app-state-pure query tempids]
   (migrate app-state-pure query tempids nil))
  ([app-state-pure query tempids id-key]
   (letfn [(dissoc-in [pure [table id]]
             (assoc pure table (dissoc (get pure table) id)))
           (step [pure [old [_ id :as new]]]
             (-> pure
                 (dissoc-in old)
                 (assoc-in new
                           (cond-> (merge (get-in pure old) (get-in pure new))
                             (not (nil? id-key)) (assoc id-key id)))))
           (fix-id [ident]
             (get tempids ident ident))]
     (-> (reduce step app-state-pure tempids)
         #_(update :betmywork/selected-task fix-id)
         (update :proposal/order
                 (fn [order]
                   (vec (distinct (map fix-id order)))))))))

(def reconciler (om/reconciler {:state      app-state
                                :parser     (om/parser {:read   read
                                                        :mutate mutate})
                                :send       et/blockchain-send
                                :merge      my-merge
                                :migrate    migrate
                                :merge-tree my-merge-tree
                                :normalize  false
                                :id-key     :db/id}))

(om/add-root! reconciler
              Root
              (gdom/getElement "app"))

;;todo
;; "call to action"
;; add indicator for withdrawal date
;; add visual indicator for current endorsed items
;; "synapse firing" on first page
;; clickable brain
;; audit "automated item voting" logic
;; future: let people submit links, make brain items topics
