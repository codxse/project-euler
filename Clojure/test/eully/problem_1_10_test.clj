(ns eully.problem-1-10-test
  (require [clojure.test :refer :all]
           [eully.problem-1-10 :refer :all]))

(deftest p1-test
  (testing "Arguments."
    (is (= 23 (p1 3 5 10)))
    (is (= 233168 (p1 3 5 1000)))))

(deftest p2-test
  (testing "Arguments"
    (is (= 4613732 (p2 1 1 0)))
    (is (= 4613732 (p2 1 1)))
    (is (= 4613732 (p2)))))