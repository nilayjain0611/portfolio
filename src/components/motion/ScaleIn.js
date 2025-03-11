"use client";
import { motion } from "framer-motion";

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
};

export default function ScaleIn({ children }) {
  return (
    <motion.div
      variants={scaleInVariants}
      initial="hidden"
      animate="visible"
      
    >
      {children}
    </motion.div>
  );
}
