(ns ui.util
  (:require-macros [shared.debug :refer [mdbg]])
  (:require [blueprint-cljs.core :as bp]))

(def my-toaster (bp/toaster))

(defn show-toast [typ message]
  (.show my-toaster #js {:intent  (typ bp/intents)
                         :message message}))

(defn get-tick-count []
  (.getTime (js/Date.)))

