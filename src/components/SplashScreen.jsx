"use client"; // Ensure it runs only on the client side

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish(); // Notify parent to show website
    }, 2500); // Shorter duration for better experience

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }} // Faster fade-out
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }} // More blur at start
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)", // Clears up fast
              transition: { duration: 1, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              scale: 1.1,
              filter: "blur(20px)", // Apply strong blur while fading out
              transition: { duration: 0.8, ease: "easeIn" },
            }}
          >
            <Image
              src="/logo.svg" // Replace with your logo path
              alt="Brand Logo"
              width={150}
              height={150}
              className="w-32 h-32"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
