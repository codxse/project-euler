(ns eully.problem-1-11
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


; 11
(def p11-data
  (->> (slurp "https://projecteuler.net/problem=11")
       (re-seq #"\w+")
       (filter #(re-seq #"^[0-9]{2}$" %))
       (drop 6)
       (take 400)
       (map #(. Integer parseInt %))))

(defn p11-mirror [data]
  (->> (partition-all 20 data)
       (map reverse)
       (flatten)))

(defn p11-max [c]
  (->> c
       (map #(partition-all 4 1 %))
       (map #(filter (fn [x] (= 4 (count x))) %))
       (map #(map (fn [c] (reduce * c)) %))
       (flatten)
       (apply max)))

(defn p11-n-to-n--1 [data-coll]
  (loop [coll []
         data data-coll]
    (if data
      (recur (conj coll data) (next data))
      coll)))

(defn p11-half-diagonal
  [data-n-to-n--1-list]
  (let [diagonal-data (->> (map #(partition 1 21 %) data-n-to-n--1-list)
                           (map #(map first %))
                           (take 20))]
    (loop [top-half-diagonal-data []
           data diagonal-data
           n-line 20]
      (if data
        (recur (conj top-half-diagonal-data
                     (take n-line (first data)))
               (next data)
               (dec n-line))
        top-half-diagonal-data))))

(defn p11 [data]
  (let [horizontal (partition-all 20 data)
        vertical (->> horizontal
                      (apply map vector))
        fhalf-right (-> data p11-n-to-n--1 p11-half-diagonal)
        shalf-right (-> (reverse data) p11-n-to-n--1 p11-half-diagonal)
        fhalf-left (-> (p11-mirror data) p11-n-to-n--1 p11-half-diagonal)
        shalf-left (-> (reverse (p11-mirror data)) p11-n-to-n--1 p11-half-diagonal)]
    (max (p11-max horizontal)
         (p11-max vertical)
         (p11-max fhalf-right)
         (p11-max shalf-right)
         (p11-max fhalf-left)
         (p11-max shalf-left))))







