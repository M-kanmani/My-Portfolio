import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profile from "../assets/hero.png"; // 👈 Updated path here

// Animated Counter Component
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={styles.imageWrapper}
        >
          <div style={styles.gradientBorder}>
            <img src={profile} alt="profile" style={styles.image} />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={styles.contentWrapper}
        >
          <p style={styles.subHeading}>About Me</p>

          <h2 style={styles.heading}>Who I Am?</h2>

          <p style={styles.description}>
            I'm M. Kanmani, a passionate developer interested in building modern
            web applications. I love working with Java, React, Node.js and MongoDB
            to create scalable solutions.
          </p>

          {/* Animated Info Cards */}
          <div style={styles.cardsGrid}>
            
            {/* Projects Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={styles.card}
            >
              <h3 style={{ ...styles.cardNum, color: "#60a5fa" }}>
                <Counter target={10} suffix="+" />
              </h3>
              <p style={styles.cardLabel}>Projects</p>
            </motion.div>

            {/* Internships Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={styles.card}
            >
              <h3 style={{ ...styles.cardNum, color: "#c084fc" }}>
                <Counter target={3} suffix="+" />
              </h3>
              <p style={styles.cardLabel}>Internships</p>
            </motion.div>

            {/* Certificates Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={styles.card}
            >
              <h3 style={{ ...styles.cardNum, color: "#f472b6" }}>
                <Counter target={20} suffix="+" />
              </h3>
              <p style={styles.cardLabel}>Certificates</p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    backgroundColor: "#050816",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 24px",
  },
  container: {
    maxWidth: "1150px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "48px",
    alignItems: "center",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  gradientBorder: {
    width: "288px",
    height: "288px",
    borderRadius: "24px",
    padding: "4px",
    background: "linear-gradient(135deg, #3b82f6, #9333ea)",
    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
    border: "4px solid #050816",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  subHeading: {
    color: "#60a5fa",
    fontSize: "1.125rem",
    fontWeight: "500",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginTop: "12px",
  },
  description: {
    color: "#d1d5db",
    marginTop: "20px",
    lineHeight: "1.7",
    fontSize: "1.05rem",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    marginTop: "32px",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(12px)",
    borderRadius: "16px",
    padding: "20px 12px",
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },
  cardNum: {
    fontSize: "1.875rem",
    fontWeight: "800",
    margin: 0,
  },
  cardLabel: {
    fontSize: "0.875rem",
    color: "#e5e7eb",
    marginTop: "6px",
    fontWeight: "500",
  },
};

export default About;