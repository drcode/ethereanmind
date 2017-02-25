(ns ui.motion
    (:require [cljsjs.react-motion :as rm]))

(defn motion [atts thunk]
      (js/React.createElement js/ReactMotion.Motion (clj->js atts)
                              (fn [value]
                                  (thunk (js->clj value :keywordize-keys true)))))

(def spring js/ReactMotion.spring)

(def wobbly js/ReactMotion.presets.wobbly)

(def gentle js/ReactMotion.presets.gentle)

(def stiff js/ReactMotion.presets.stiff)
