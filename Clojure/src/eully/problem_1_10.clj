(ns eully.problem-1-10
  (require [clojure.set :as set]
           [eully.common :as c]))

;; 1
(defn p1
  "Return sum of multiple x and y below limit (default 1000).
  x or y must be positive"
  ([x y & [limit]]
   (let [set1 (set (range x limit x))
         set2 (set (range y limit y))]
     (reduce + (set/union set1 set2))))
  ([x y] (p1 x y 1000)))

;; 2
(defn p2
  "Return sum of even fibonachi number below 4000000."
  ([x y sum-even]
   (if (< y 4000000)
     (recur (+ x y) x (if (even? x) (+ sum-even x) sum-even))
     sum-even))
  ([x y] (p2 x y 0))
  ([] (p2 1 1 0)))


