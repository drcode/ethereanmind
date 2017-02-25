(ns shared.debug)

(defmacro loop-dbg [vars & body]
          "prints out the value of all parameters into the loop for debugging purposes."
          `(loop ~vars
                 (println ~@(for [[var] (partition 2 vars)]
                                 `(str '~var "=" (pr-str ~var) " ")))
                 ~@body))

(defmacro let-dbg [vars & body]
          "prints out the value of all declarations of a let"
          `(let ~vars
                (println ~@(for [[var] (partition 2 vars)]
                                `(str '~var "=" (pr-str ~var) " ")))
                ~@body))

(defmacro mdbg [var]
          `(dbg ~var '~var))

(def max-label-length 60)

(defn dbg
  "Simple debug function useful for getting intermediates in -> piping."
  ([val s]
   (println (let [s (pr-str s)]
              (if (> (count s) max-label-length)
                (str (subs s 0 (- max-label-length 3)) "...")
                s))
            "="
            (pr-str val))
   val)
  ([val]
   (dbg val "dbg")))

(defmacro mdbg-sample [n var]
  `(if (zero? (rand-int ~n))
     (mdbg ~var)
     ~var))
