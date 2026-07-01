import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FadeIn({ children, delay = 0, direction = "up", fullHeight = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0
      }}
      animate={
        isInView
          ? {
            opacity: 1,
            y: 0,
            x: 0
          }
          : {}
      }
      transition={{
        duration: 0.9,
        delay,
        ease: [0.19, 0.51, 0.23, 0.99]
      }}
      className={fullHeight ? "h-full" : ""}
    >
      {children}
    </motion.div>
  );
}
