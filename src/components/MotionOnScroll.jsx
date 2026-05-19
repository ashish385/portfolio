import React from "react";
import { motion } from "framer-motion";

const MotionOnScroll = ({
  children,
  className,
  delayMs = 0,
  durationMs = 500,
  translateY = 12,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: translateY, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: delayMs / 1000, duration: durationMs / 1000, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionOnScroll;

