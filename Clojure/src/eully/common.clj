(ns eully.common)

(defn abs [x]
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
