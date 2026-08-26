import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

// Real SVG Emoji Component (Twemoji CDN)
const RealEmoji = ({ code, alt, size = "32px" }) => (
  <img
    src={`https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${code}.svg`}
    alt={alt}
    style={{ width: size, height: size, display: "block" }}
  />
);

const educationData = [
  {
    emojiCode: "1f393", // 🎓 Graduation Cap
    title: "Bachelor of Technology / Engineering",
    period: "2023 – Present",
    institution: "A.V.C. College of Engineering",
    affiliation: "Affiliated to Anna University",
    location: "Mayiladuthurai",
    details:
      "Currently pursuing my degree with a focus on software development and modern web technologies.",
    status: "Currently Pursuing",
    grade: "CGPA: 7.91",
  },
  {
    emojiCode: "1f3eb", // 🏫 School
    title: "Higher Secondary Education (11th & 12th)",
    period: "2022",
    institution: "Kalaimagal Matriculation Higher Secondary School",
    location: "Akkur",
    details: "11th Grade: 70% | 12th Grade: 76%",
    status: "Completed",
  },
  {
    emojiCode: "1f4da", // 📚 Books
    title: "SSLC (10th Standard)",
    period: "2020",
    institution: "Govt. Girls Higher Secondary School",
    location: "Tamil Nadu",
    details: "Percentage: 100%",
    status: "Completed",
  },
];

function Education() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="education" style={styles.section}>
      {/* Both IDs added so navbar link works whether it's #education or #qualifications */}
      <div id="qualifications" style={{ position: "absolute", top: 0 }}></div>

      {/* Dynamic Particle Background */}
      <ParticlesBackground />

      {/* Radial Glow Effect */}
      <div style={styles.glowTopLeft}></div>
      <div style={styles.glowBottomRight}></div>

      <div style={styles.container}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={styles.header}
        >
          <p style={styles.subHeading}>My Academic Journey</p>
          <h2 style={styles.heading}>EDUCATION / QUALIFICATION</h2>
          <p style={styles.description}>
            My educational background and academic achievements.
          </p>
        </motion.div>

        {/* Clickable Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={styles.toggleBtn}
        >
          <span>{isOpen ? "Hide Details ▲" : "View Education Details ▼"}</span>
        </button>

        {/* Timeline Container with Toggle Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              style={styles.timeline}
            >
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -4 }}
                  style={styles.card}
                >
                  <div style={styles.cardHeader}>
                    <div style={styles.iconBox}>
                      <RealEmoji code={item.emojiCode} alt={item.title} size="30px" />
                    </div>
                    <div>
                      <h3 style={styles.cardTitle}>{item.title}</h3>
                      <p style={styles.institution}>{item.institution}</p>
                      {item.affiliation && (
                        <p style={styles.affiliation}>{item.affiliation}</p>
                      )}
                    </div>
                  </div>

                  <div style={styles.metaRow}>
                    <span style={styles.periodBadge}>{item.period}</span>
                    <span style={styles.locationText}>
                      <RealEmoji code="1f4cd" alt="Location" size="16px" />
                      {item.location}
                    </span>
                  </div>

                  <p style={styles.details}>{item.details}</p>

                  <div style={styles.footerRow}>
                    <span style={styles.statusBadge}>{item.status}</span>
                    {item.grade && (
                      <span style={styles.gradeBadge}>{item.grade}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    padding: "80px 20px",
    backgroundColor: "#050816",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  glowTopLeft: {
    position: "absolute",
    width: "350px",
    height: "350px",
    backgroundColor: "rgba(59, 130, 246, 0.15)",
    borderRadius: "50%",
    filter: "blur(90px)",
    top: "80px",
    left: "80px",
    pointerEvents: "none",
  },
  glowBottomRight: {
    position: "absolute",
    width: "350px",
    height: "350px",
    backgroundColor: "rgba(168, 85, 247, 0.15)",
    borderRadius: "50%",
    filter: "blur(90px)",
    bottom: "80px",
    right: "80px",
    pointerEvents: "none",
  },
  container: {
    maxWidth: "900px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    zIndex: 10,
  },
  header: {
    textAlign: "center",
    maxWidth: "650px",
    marginBottom: "30px",
  },
  subHeading: {
    color: "#60a5fa",
    fontSize: "1.25rem",
    fontWeight: "500",
    marginBottom: "4px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "800",
    letterSpacing: "1px",
    color: "#ffffff",
    marginBottom: "16px",
  },
  description: {
    fontSize: "0.95rem",
    color: "#d1d5db",
    lineHeight: "1.6",
  },
  toggleBtn: {
    backgroundColor: "rgba(59, 130, 246, 0.15)",
    border: "1px solid rgba(59, 130, 246, 0.4)",
    color: "#60a5fa",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: "600",
    marginBottom: "24px",
    transition: "all 0.3s ease",
  },
  timeline: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    overflow: "hidden",
  },
  card: {
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    backdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "2px",
  },
  institution: {
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#c084fc",
  },
  affiliation: {
    fontSize: "0.8rem",
    color: "#94a3b8",
  },
  metaRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
  },
  periodBadge: {
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "#60a5fa",
    backgroundColor: "rgba(96, 165, 250, 0.1)",
    padding: "4px 10px",
    borderRadius: "6px",
  },
  locationText: {
    fontSize: "0.85rem",
    color: "#94a3b8",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  details: {
    fontSize: "0.9rem",
    color: "#cbd5e1",
    lineHeight: "1.5",
  },
  footerRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "4px",
  },
  statusBadge: {
    fontSize: "0.75rem",
    fontWeight: "600",
    color: "#34d399",
    backgroundColor: "rgba(52, 211, 153, 0.1)",
    border: "1px solid rgba(52, 211, 153, 0.3)",
    padding: "4px 10px",
    borderRadius: "9999px",
  },
  gradeBadge: {
    fontSize: "0.75rem",
    fontWeight: "700",
    color: "#facc15",
    backgroundColor: "rgba(250, 204, 21, 0.1)",
    border: "1px solid rgba(250, 204, 21, 0.3)",
    padding: "4px 10px",
    borderRadius: "9999px",
  },
};

export default Education;