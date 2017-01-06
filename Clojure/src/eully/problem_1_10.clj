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


;; 11
;(def p11-data
;  (->> (slurp "https://projecteuler.net/problem=11")
;       (re-seq #"\w+")
;       (filter #(re-seq #"^[0-9]{2}$" %))
;       (drop 6)
;       (take 400)
;       (map #(. Integer parseInt %))))
;
;(def p11-data-cols
;  (loop [coll []
;         data p11-data]
;    (if data
;      (recur (conj coll data) (next data))
;      coll)))
;
;(def p11-single
;  (->> (map #(partition 1 21 %) p11-data-cols)
;       (map #(map first %))
;       (take 20)))
;
;(def p11-fhalf-data
;  (loop [temp []
;         data (take 20 p11-single)
;         iter 20]
;    (if (> iter 0)
;      (recur (conj temp (take iter (first data)))
;             (rest data)
;             (dec iter))
;      temp)))
;
;(def p11-shalf-data
;  (loop [temp []
;         data (drop 20 p11-single)
;         iter 20]))
;
;(->> p11-fhalf-data
;     (map #(partition-all 4 %))
;     (map #(map (fn [c] (reduce * c)) %))
;     flatten
;     (apply max))





