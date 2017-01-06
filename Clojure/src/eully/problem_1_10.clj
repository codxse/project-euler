(ns eully.problem-1-10
  (require [clojure.set :as set]))

;; 1
(defn p1
  ([x y & [limit]]
   "Input m as {number1 % number2 %} & limit as number.
   Return sum of multiple first and second below limit (default 1000)"
    (let [set1 (set (range x limit x))
          set2 (set (range y limit y))]
      (reduce + (set/union set1 set2))))
  ([x y] (p1 x y 1000)))
