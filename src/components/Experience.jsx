import React from "react";
import { motion } from "framer-motion";

// Assets imports for Certificates & Projects
import etherCertificate from "../assets/ether-certificate.jpg";
import craftyCertificate from "../assets/crafty-certificate.jpg"; 
import adroitCertificate from "../assets/Kanmani.pdf";
import arttifaiCertificate from "../assets/kanmani data science intern.pdf";

// Cognos Analytics Project PDF
import cognosProjectPdf from "../assets/IBM Cognos Analytics Project.pdf";

// Offer Letters PDFs
import sysslanOffer from "../assets/15_Kanmani M.pdf";
import zidioOffer from "../assets/Offer_Letter_2.pdf";
import crixsoftOffer from "../assets/Offer Letter_3.pdf";
import innovexaOffer from "../assets/M_Kanmani_Offer_Letter.pdf";
import thiranexOffer from "../assets/OfferLetter_Kanmani_M.pdf";
import craftyOffer from "../assets/Internship Offer Letter  M. Kanmani.pdf";

// Filtered Internship Data (Top 4 Only)
const internshipsData = [
  {
    id: 1,
    role: "Data Analytics Intern",
    company: "Adroit Technologies Innovative Solutions Pvt. Ltd.",
    type: "Virtual Internship",
    location: "India",
    duration: "09 Mar 2026 – 10 Apr 2026",
    durationTag: "1 Month",
    color: "#60a5fa", // Blue Accent
    highlights: [
      "Built interactive dashboards using IBM Cognos Analytics.",
      "Performed data analysis for member retention and revenue insights.",
      "Created reports and visualizations for business decisions.",
    ],
    tools: ["IBM Cognos", "Data Visualization", "Analytics", "Dashboard"],
    featuredProject: {
      title: "FitZone Gym - Member Retention & Revenue Analytics",
      desc: "Analyzed member behavior and revenue data to provide actionable business insights.",
    },
    certificatePdf: adroitCertificate,
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "CraftyTech AI",
    type: "On-Site Internship",
    location: "India",
    duration: "20 Jun 2026 – 20 Jul 2026",
    durationTag: "1 Month",
    color: "#a855f7", // Purple Accent
    highlights: [
      "Developed full-stack web applications.",
      "Integrated AI features in the interview platform.",
      "Implemented secure authentication and real-time user progress tracking.",
    ],
    tools: ["React", "Node.js", "Express.js", "MongoDB", "AI"],
    featuredProject: {
      title: "Interview Preparation Platform",
      desc: "Built an AI-driven platform to help candidates practice questions, track progress and improve skills.",
    },
    certificateImg: craftyCertificate,
  },
  {
    id: 3,
    role: "Full Stack Developer Intern",
    company: "Ether Infotech",
    type: "On-Site Internship",
    location: "Coimbatore, India",
    duration: "07 Dec 2025 – 07 Jan 2026",
    durationTag: "1 Month",
    color: "#34d399", // Emerald Green Accent
    highlights: [
      "Built a full-stack Expense Tracker application.",
      "Implemented income, expense management and analytics.",
      "Gained hands-on experience in real-world projects.",
    ],
    tools: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Charts"],
    featuredProject: {
      title: "Expense Tracker Application",
      desc: "A web application to track income, expenses and visualize savings with charts.",
    },
    certificateImg: etherCertificate,
  },
  {
    id: 4,
    role: "Data Science Intern",
    company: "Arttifai Tech",
    type: "Virtual Internship",
    location: "India",
    duration: "23 Jun 2025 – 30 Jun 2025",
    durationTag: "1 Week",
    color: "#f59e0b", // Amber Accent
    highlights: [
      "Performed data cleaning and exploratory data analysis.",
      "Visualized weather trends and correlations.",
      "Used Python libraries for data analysis.",
    ],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    featuredProject: {
      title: "Weather Data Analyzer",
      desc: "Analyzed weather data using Python to identify trends and correlations with visualizations.",
    },
    certificatePdf: arttifaiCertificate,
  },
];

// Complete Offer Letters Data (All 6 Preserved)
const offerLettersData = [
  { company: "Zidio Development", role: "Java Full Stack Developer Intern", dayMonth: "15 JUL", year: "2026", color: "#38bdf8", pdf: zidioOffer },
  { company: "CraftyTech AI", role: "Full Stack Developer Intern", dayMonth: "20 JUN", year: "2026", color: "#a855f7", pdf: craftyOffer },
  { company: "Crixsoft Solution", role: "Web Development Intern", dayMonth: "15 JUN", year: "2026", color: "#f59e0b", pdf: crixsoftOffer },
  { company: "Innovexa Catalyst", role: "Full Stack Web Development Intern", dayMonth: "13 JUN", year: "2026", color: "#10b981", pdf: innovexaOffer },
  { company: "Thiranex", role: "Full Stack Development Intern", dayMonth: "23 MAY", year: "2026", color: "#3b82f6", pdf: thiranexOffer },
  { company: "Sysslan IT Solutions", role: "Python Developer Intern", dayMonth: "04 MAR", year: "2026", color: "#ec4899", pdf: sysslanOffer },
];

function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <div style={styles.container}>
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={styles.header}
        >
          <p style={styles.subHeading}>MY JOURNEY</p>
          <h2 style={styles.heading}>Internships & Experience</h2>
        </motion.div>

        {/* 2-Column Grid Layout for Internships */}
        <div style={styles.grid}>
          {internshipsData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              whileHover={{ y: -4, boxShadow: `0 15px 35px -10px ${item.color}25` }}
              style={{
                ...styles.card,
                borderColor: `${item.color}30`,
              }}
            >
              {/* Top Row */}
              <div style={styles.cardTop}>
                <div style={{ ...styles.numberBadge, backgroundColor: `${item.color}20`, color: item.color }}>
                  {item.id}
                </div>

                <div style={styles.logoBox}>
                  <span style={{ fontSize: "1.2rem" }}>🏢</span>
                </div>

                <div style={styles.roleInfo}>
                  <h3 style={{ ...styles.roleTitle, color: item.color }}>{item.role}</h3>
                  <p style={styles.companyName}>{item.company}</p>
                  <p style={styles.locationText}>
                    💼 {item.type} &nbsp;|&nbsp; 📍 {item.location}
                  </p>
                </div>

                <div style={styles.dateCol}>
                  <span style={styles.durationText}>📅 {item.duration}</span>
                  <span style={{ ...styles.durationTag, backgroundColor: `${item.color}15`, color: item.color, borderColor: `${item.color}40` }}>
                    {item.durationTag}
                  </span>
                </div>
              </div>

              {/* Middle Section */}
              <div style={styles.cardBody}>
                {/* Highlights Column */}
                <div style={styles.highlightsCol}>
                  <p style={styles.sectionLabel}>Key Highlights</p>
                  <ul style={styles.bulletList}>
                    {item.highlights.map((point, idx) => (
                      <li key={idx} style={styles.bulletItem}>
                        <span style={{ color: item.color, marginRight: "8px" }}>✔</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Tags */}
                  <div style={{ marginTop: "16px" }}>
                    <p style={styles.sectionLabel}>Tech / Tools</p>
                    <div style={styles.toolsRow}>
                      {item.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          style={{
                            ...styles.toolTag,
                            color: item.color,
                            backgroundColor: `${item.color}10`,
                            borderColor: `${item.color}30`,
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Featured Project Column */}
                <div style={{ ...styles.featuredProjectBox, borderColor: `${item.color}25`, backgroundColor: `${item.color}05` }}>
                  <p style={styles.sectionLabel}>Featured Project</p>
                  <div style={styles.projectContent}>
                    <span style={{ fontSize: "1.2rem", color: item.color }}>⚙️</span>
                    <div>
                      <h4 style={styles.projectTitle}>{item.featuredProject.title}</h4>
                      <p style={styles.projectDesc}>{item.featuredProject.desc}</p>
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={item.certificatePdf || item.certificateImg || "#"}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...styles.viewCertBtn,
                      backgroundColor: `${item.color}20`,
                      color: item.color,
                      borderColor: `${item.color}50`,
                    }}
                  >
                    View Certificate ↗
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Certificates Bottom Action */}
        <div style={styles.bottomActionWrapper}>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#experience"
            style={styles.viewAllBtn}
          >
            💼 View All Certificates →
          </motion.a>
        </div>

        {/* ---------------- Timeline Offer Letters Section ---------------- */}
        <div style={styles.offerSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            <p style={styles.subHeading}>VERIFICATION</p>
            <h3 style={styles.offerHeading}>Offer Letters</h3>
            <p style={styles.offerSubText}>A timeline of my official internship offers</p>
            <div style={styles.underline}></div>
          </motion.div>

          {/* Timeline Wrapper */}
          <div style={styles.timelineWrapper}>
            <div style={styles.timelineLine}></div>

            <div style={styles.timelineList}>
              {offerLettersData.map((offer, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={styles.timelineRow}
                >
                  <div
                    style={{
                      ...styles.dateBox,
                      borderColor: `${offer.color}40`,
                      backgroundColor: `${offer.color}10`,
                    }}
                  >
                    <span style={{ ...styles.dateDayMonth, color: offer.color }}>
                      {offer.dayMonth}
                    </span>
                    <span style={styles.dateYear}>{offer.year}</span>
                  </div>

                  <div
                    style={{
                      ...styles.timelineNode,
                      borderColor: offer.color,
                      backgroundColor: "#080d1a",
                      boxShadow: `0 0 15px ${offer.color}40`,
                    }}
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c4.svg"
                      alt="Doc"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>

                  <motion.div
                    whileHover={{ y: -3, boxShadow: `0 10px 25px -5px ${offer.color}30` }}
                    style={{
                      ...styles.offerTimelineCard,
                      borderColor: `${offer.color}40`,
                    }}
                  >
                    <div style={styles.offerCardInfo}>
                      <h4 style={{ ...styles.offerRole, color: offer.color }}>
                        {offer.role}
                      </h4>
                      <p style={styles.offerCompany}>
                        🏢 {offer.company}
                      </p>
                    </div>

                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href={offer.pdf}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        ...styles.timelineOfferBtn,
                        borderColor: `${offer.color}60`,
                        color: offer.color,
                        backgroundColor: `${offer.color}12`,
                      }}
                    >
                      View Offer ↗
                    </motion.a>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#050816",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "1200px",
    width: "100%",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  subHeading: {
    color: "#60a5fa",
    fontSize: "0.85rem",
    fontWeight: "700",
    letterSpacing: "3px",
    marginBottom: "8px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#ffffff",
  },

  /* ---------- 2-COLUMN GRID STYLES ---------- */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(540px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "rgba(11, 17, 32, 0.75)",
    border: "1px solid",
    borderRadius: "20px",
    padding: "24px",
    backdropFilter: "blur(12px)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  cardTop: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    flexWrap: "wrap",
    borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
    paddingBottom: "16px",
  },
  numberBadge: {
    width: "28px",
    height: "28px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
    fontSize: "0.85rem",
    flexShrink: 0,
  },
  logoBox: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  roleInfo: {
    flex: 1,
  },
  roleTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    marginBottom: "2px",
  },
  companyName: {
    fontSize: "0.9rem",
    color: "#f8fafc",
    fontWeight: "600",
  },
  locationText: {
    fontSize: "0.78rem",
    color: "#94a3b8",
    marginTop: "2px",
  },
  dateCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "6px",
  },
  durationText: {
    fontSize: "0.78rem",
    color: "#94a3b8",
    fontWeight: "500",
  },
  durationTag: {
    fontSize: "0.7rem",
    fontWeight: "700",
    padding: "3px 10px",
    borderRadius: "12px",
    border: "1px solid",
  },

  cardBody: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "20px",
  },
  highlightsCol: {
    display: "flex",
    flexDirection: "column",
  },
  sectionLabel: {
    fontSize: "0.72rem",
    color: "#94a3b8",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "8px",
  },
  bulletList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  bulletItem: {
    fontSize: "0.82rem",
    color: "#cbd5e1",
    lineHeight: "1.4",
  },
  toolsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },
  toolTag: {
    fontSize: "0.72rem",
    fontWeight: "600",
    padding: "3px 8px",
    borderRadius: "6px",
    border: "1px solid",
  },

  featuredProjectBox: {
    border: "1px solid",
    borderRadius: "14px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "14px",
  },
  projectContent: {
    display: "flex",
    gap: "10px",
  },
  projectTitle: {
    fontSize: "0.88rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "4px",
  },
  projectDesc: {
    fontSize: "0.78rem",
    color: "#94a3b8",
    lineHeight: "1.4",
  },
  viewCertBtn: {
    fontSize: "0.78rem",
    fontWeight: "700",
    padding: "8px 14px",
    borderRadius: "8px",
    border: "1px solid",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
  },

  bottomActionWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
  viewAllBtn: {
    fontSize: "0.9rem",
    fontWeight: "700",
    color: "#a855f7",
    backgroundColor: "rgba(168, 85, 247, 0.1)",
    border: "1px solid rgba(168, 85, 247, 0.3)",
    padding: "12px 28px",
    borderRadius: "12px",
    textDecoration: "none",
  },

  /* ---------- TIMELINE STYLES ---------- */
  offerSection: {
    marginTop: "80px",
    paddingTop: "50px",
    borderTop: "1px dashed rgba(255, 255, 255, 0.1)",
  },
  offerHeading: {
    fontSize: "2.2rem",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "6px",
  },
  offerSubText: {
    fontSize: "0.95rem",
    color: "#94a3b8",
    marginBottom: "12px",
  },
  underline: {
    width: "50px",
    height: "3px",
    backgroundColor: "#38bdf8",
    margin: "0 auto",
    borderRadius: "2px",
  },
  timelineWrapper: {
    position: "relative",
    maxWidth: "850px",
    margin: "0 auto",
  },
  timelineLine: {
    position: "absolute",
    left: "148px",
    top: "20px",
    bottom: "20px",
    width: "2px",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    zIndex: 1,
  },
  timelineList: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    position: "relative",
    zIndex: 2,
  },
  timelineRow: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  },
  dateBox: {
    width: "100px",
    padding: "10px 8px",
    borderRadius: "12px",
    border: "1px solid",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  dateDayMonth: {
    fontSize: "0.85rem",
    fontWeight: "800",
  },
  dateYear: {
    fontSize: "0.75rem",
    color: "#94a3b8",
    fontWeight: "600",
    marginTop: "2px",
  },
  timelineNode: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "2px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  offerTimelineCard: {
    flex: 1,
    backgroundColor: "rgba(11, 17, 32, 0.75)",
    border: "1px solid",
    borderRadius: "16px",
    padding: "18px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  },
  offerCardInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  offerRole: {
    fontSize: "1.1rem",
    fontWeight: "700",
  },
  offerCompany: {
    fontSize: "0.9rem",
    color: "#cbd5e1",
    fontWeight: "500",
  },
  timelineOfferBtn: {
    fontSize: "0.85rem",
    fontWeight: "700",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "1px solid",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};

export default Experience;