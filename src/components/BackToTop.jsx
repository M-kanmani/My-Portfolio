import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          style={styles.button}
          aria-label="Back to Top"
        >
          ⬆️
        </motion.button>
      )}
    </AnimatePresence>
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "32px",
    right: "32px",
    zIndex: 999,
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
    color: "#ffffff",
    fontSize: "1.2rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
};

export default BackToTop;