import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedTitle({ text }) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {}
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  return (
    <h1 aria-label={text}>
      {text.split(" ").map((word, index, array) => {
        const isMatheus = word === "Matheus";
        const isEli = word === "Eli";

        return (
          <motion.span
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05
            }}
            style={{
              display: "inline-block",
              marginRight: "0.25em",
              whiteSpace: "nowrap"
            }}
          >
            {word.split("").map((character, charIndex) => (
              <motion.span
                aria-hidden="true"
                key={charIndex}
                style={{ display: "inline-block" }}
                variants={characterAnimation}
                className={(isMatheus || isEli) ? 'matheusEli' : ""}
              >
                {character}
              </motion.span>
            ))}
          </motion.span>
        );
      })}
    </h1>
  );
}
