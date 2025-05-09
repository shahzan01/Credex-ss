"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animation: Variants;
  once?: boolean;
}

export function ScrollAnimationWrapper({
  children,
  className = "",
  animation,
  once = true,
}: ScrollAnimationWrapperProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.25 });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animation}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimationWrapper;
