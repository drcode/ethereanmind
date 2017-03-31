(ns ui.ethereum-test
  (:require [clojure.test :refer [deftest is]]
            [ui.ethereum :as et]))

(deftest replace-test []
  #_(is (= (et/replace-contract-references '(do (foo)
                                              (bar/baz 23))
                                         'bar)
         '(do (foo)
              (chan-call bar :baz 23))))
  (is (= (et/replace-contract-references '(())
                                         'bar)
         '(()))))

