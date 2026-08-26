import React, { useState } from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse movement capture for 3D Parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30; // 30px max tilt
    const y = (clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <div style={styles.container} onMouseMove={handleMouseMove}>
      {/* Dynamic Parallax Background Glow */}
      <motion.div 
        animate={{ x: mousePos.x * -1.5, y: mousePos.y * -1.5 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={styles.ambientGlow} 
      />

      <main style={styles.content}>
        
        {/* Step 1: KANMANI - Extra Bold with Hover Neon Pulse */}
        <motion.p 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ 
            scale: 1.03, 
            textShadow: "0 0 30px rgba(255, 255, 255, 0.8)",
            transition: { duration: 0.2 } 
          }}
          style={{
            ...styles.subHeader,
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          }}
        >
          KANMANI
        </motion.p>

        {/* Step 2: PORTFOLIO - Smooth Entrance & Interactive Scale */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ 
            scale: 1.02, 
            textShadow: "0 0 60px rgba(56, 189, 248, 0.8)",
            transition: { duration: 0.2 }
          }}
          style={{
            ...styles.mainTitle,
            transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
          }}
        >
          PORTFOLIO
        </motion.h1>

        {/* Step 3: Greeting Badge with Pulsing Gradient Glow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          style={styles.badgeWrapper}
        >
          <p style={styles.welcomeText}>WELCOME TO MY PORTFOLIO!</p>
        </motion.div>

      </main>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#030712",
    color: "#ffffff",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Inter', sans-serif",
    cursor: "default",
  },
  ambientGlow: {
    position: "absolute",
    width: "650px",
    height: "650px",
    background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(3,7,18,0) 70%)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    textAlign: "center",
    padding: "0 20px",
  },
  subHeader: {
    fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
    fontWeight: "900",
    letterSpacing: "14px",
    color: "#ffffff",
    marginBottom: "4px",
    textShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
    transition: "transform 0.1s ease-out",
    userSelect: "none",
  },
  mainTitle: {
    fontSize: "clamp(3.5rem, 10vw, 8.8rem)",
    fontWeight: "900",
    letterSpacing: "8px",
    lineHeight: "1",
    color: "#38bdf8",
    textShadow: "0 0 45px rgba(56, 189, 248, 0.35)",
    marginBottom: "32px",
    transition: "transform 0.1s ease-out",
    userSelect: "none",
  },
  badgeWrapper: {
    padding: "1px",
    borderRadius: "30px",
    background: "linear-gradient(135deg, rgba(56,189,248,0.5), rgba(255,255,255,0.08))",
    boxShadow: "0 0 20px rgba(56, 189, 248, 0.15)",
    cursor: "pointer",
  },
  welcomeText: {
    fontSize: "0.9rem",
    fontWeight: "700",
    letterSpacing: "3px",
    color: "#e2e8f0",
    padding: "10px 28px",
    borderRadius: "30px",
    backgroundColor: "#030712",
    margin: 0,
  },
};

export default LandingPage;