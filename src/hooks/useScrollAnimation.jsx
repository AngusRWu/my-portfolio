import { useRef, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "framer-motion";

export const useScrollAnimation = (threshold = 0.3) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const MotionDiv = ({ children, variants, className }) => (
    <motion.div
      ref={ref}
      className={className}
      variants={variants || {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );

  return MotionDiv;
};
