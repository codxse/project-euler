(ns eully.problem-1-10-test
  (require [clojure.test :refer :all]
           [eully.problem-1-10 :refer :all]))

(deftest p1-test
  (testing "Three arguments."
    (is (= 23 (p1 3 5 10))))
  (testing "Two arguments."
    (is (= 233168 (p1 3 5 1000)))))