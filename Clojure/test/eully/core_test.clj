(ns eully.core-test
  (:require [clojure.test :refer :all]
            [eully.core :refer :all]
            [eully.common :refer :all]))

;(deftest a-test
;  (testing "FIXME, I fail."
;    (is (= 0 1))))

(deftest prime?-test
  (testing "below 4"
    (is (= false (prime? 0)))
    (is (= false (prime? 1)))
    (is (= true (prime? 2)))
    (is (= true (prime? 3))))
  (testing "negative"
    (is (= false (prime? -1)))
    (is (= true (prime? 2)))
    (is (= true (prime? 3)))
    (is (= false (prime? -9))))
  (testing "9 11 12 17 19 23 27"
    (is (= false (prime? 9)))
    (is (= true (prime? 11)))
    (is (= false (prime? 12)))
    (is (= true (prime? 17)))
    (is (= true (prime? 19)))
    (is (= true (prime? 23)))
    (is (= false (prime? 27)))))