"use client";
import { motion } from "framer-motion";

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.3 } // Each child animates 0.3s apart
  }
};

export default function StaggerContainer({ children }) {
  return (
    <motion.div variants={staggerVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}
