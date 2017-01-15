(ns eully.common)

(defn abs [x]
  "Return absolute number of x."
  (if (>= x 0)
    x
    (- x)))

(defn gcd [x y]
  (if (zero? y)
    x
    (recur y (rem x y))))

(defn lcm [x y]
  (let [denom (gcd x y)]
    (when (not= 0 denom)
      (quot (abs (* x y)) (gcd x y)))))

(defn lazy-fib
  ([x y]
   (lazy-seq (cons x (lazy-fib (+' x y) x))))
  ([]
   (lazy-fib 1 1)))

(def prime?
  (memoize
    (fn [x]
      "Return true if prime number."
      (let [x (abs x)]
        (cond
          (= x 0) false
          (= x 1) false
          (= x 2) true
          (= x 3) true
          (even? x) false
          :else (->> (map #(zero? (rem x %))
                          (range 2 (-> x Math/sqrt int inc)))
                     (every? #(= false %))))))))