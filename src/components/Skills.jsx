import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

// React Icons Imports
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc"; 
import { TbApi } from "react-icons/tb";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact color="#61dafb" /> },
      { name: "JavaScript", icon: <FaJsSquare color="#f7df1e" /> },
      { name: "HTML", icon: <FaHtml5 color="#e34f26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572b6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#68a063" /> },
      { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
      { name: "Java", icon: <FaJava color="#5382a1" /> },
      { name: "REST API", icon: <TbApi color="#60a5fa" /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
      { name: "MySQL", icon: <SiMysql color="#00758f" /> },
    ],
  },
  {
    category: "Data & AI",
    skills: [
      { name: "Python", icon: <FaPython color="#3776ab" /> },
      { name: "Pandas", icon: <FaDatabase color="#306998" /> },
      { name: "Matplotlib", icon: <FaDatabase color="#ff6384" /> },
      { name: "IBM Cognos", icon: <FaDatabase color="#60a5fa" /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt color="#f05032" /> },
      { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
      { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
      { name: "VS Code", icon: <VscCode color="#007acc" /> },
    ],
  },
];

function Skills() {
  return (
    /* id="skills" என்பதை id="tech-stack" ஆக மாற்றப்பட்டுள்ளது */
    <section id="tech-stack" style={styles.section}>
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
          <p style={styles.subHeading}>My Expertise</p>
          <h2 style={styles.heading}>SKILLS & TECH STACK</h2>
          <p style={styles.description}>
            Technologies and tools I use to build efficient, scalable, and modern software applications.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div style={styles.grid}>
          {skillsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={styles.card}
            >
              <h3 style={styles.categoryTitle}>{item.category}</h3>

              <div style={styles.pillContainer}>
                {item.skills.map((skill, sIndex) => (
                  <span key={sIndex} style={styles.skillPill}>
                    <span style={styles.iconWrapper}>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
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
    maxWidth: "1150px",
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
    marginBottom: "50px",
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
  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    borderRadius: "12px",
    padding: "24px",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    backdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
  },
  categoryTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#c084fc",
    marginBottom: "16px",
    letterSpacing: "0.5px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    paddingBottom: "8px",
  },
  pillContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  skillPill: {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#ffffff",
    backgroundColor: "rgba(59, 130, 246, 0.12)",
    border: "1px solid rgba(59, 130, 246, 0.3)",
    padding: "8px 14px",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  iconWrapper: {
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
  },
};

export default Skills;