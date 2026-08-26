import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

// Certificate PDF Imports
import bigData101Cert from "../assets/Big Data 101 kanmani.pdf";
import bigData201Cert from "../assets/Big Data 201 kanmani.pdf";
import bigData301Cert from "../assets/Big Data 301kanmani.pdf";
import kanmaniKotlinCert from "../assets/KANMANI-M-Participant-Certificate.pdf";
import ieeeWebinarCert from "../assets/IEE webinar.pdf";
import resumeWritingCert from "../assets/1767368890249.pdf";
import mongoDBCert from "../assets/mongodb.pdf";

// Certificate Image Imports
import gatewayWebinarCert from "../assets/gateway solution webinar.jpg";
import ictAcademyCert from "../assets/1767366246386.jpg";
import eworldCert from "../assets/e-world.jpg";
import llamaCert from "../assets/LLAMA model cert.png";
import ibmCognosCert from "../assets/ibm cognos course.jpg";
import egsSummitCert from "../assets/EGS clg.jpeg";
import cryptographyCert from "../assets/crypography.jpg";
import hackathonCert from "../assets/hackathon.png";

const certificatesData = [
  {
    title: "Hackathon 360° - Round 1 & 2",
    issuer: "ECLEARNIX INNOVATION CHALLENGE",
    date: "July - August 2025",
    type: "image",
    file: hackathonCert,
  },
  {
    title: "Cryptography",
    issuer: "VOIS / VODAFONE IDEA FOUNDATION",
    date: "August 14, 2025",
    type: "image",
    file: cryptographyCert,
  },
  {
    title: "Academic Student Summit (2nd Place)",
    issuer: "EGS PILLAY ENGINEERING COLLEGE",
    date: "April 20, 2026",
    type: "image",
    file: egsSummitCert,
  },
  {
    title: "Big Data 101",
    issuer: "INFOSYS SPRINGBOARD",
    date: "March 28, 2026",
    type: "pdf",
    file: bigData101Cert,
  },
  {
    title: "Big Data - 201",
    issuer: "INFOSYS SPRINGBOARD",
    date: "April 13, 2026",
    type: "pdf",
    file: bigData201Cert,
  },
  {
    title: "Big Data - 301",
    issuer: "INFOSYS SPRINGBOARD",
    date: "April 18, 2026",
    type: "pdf",
    file: bigData301Cert,
  },
  {
    title: "Android App using Kotlin",
    issuer: "SPOKEN TUTORIAL (IIT BOMBAY)",
    date: "April 01, 2026",
    score: "82.50%",
    type: "pdf",
    file: kanmaniKotlinCert,
  },
  {
    title: "Introduction to Cognos Analytics",
    issuer: "IBM CAREER EDUCATION PROGRAM",
    date: "March 26, 2026",
    type: "image",
    file: ibmCognosCert,
  },
  {
    title: "Architecture Behind LLAMA Model",
    issuer: "SCALER MASTERCLASS",
    date: "March 07, 2026",
    type: "image",
    file: llamaCert,
  },
  {
    title: "UI/UX with AI Master Class",
    issuer: "EWORLD COMPUTER TECHNOLOGIES",
    date: "February 22, 2026",
    type: "image",
    file: eworldCert,
  },
  {
    title: "MongoDB Basics for Students",
    issuer: "MONGODB",
    date: "June 23, 2025",
    type: "pdf",
    file: mongoDBCert,
  },
  {
    title: "AI & Machine Learning Webinar",
    issuer: "IEEE STUDENT BRANCH (SWCE)",
    type: "pdf",
    file: ieeeWebinarCert,
  },
  {
    title: "Smart Resume Writing Workshop",
    issuer: "ST. JOSEPH'S COLLEGE OF ENGINEERING",
    date: "March 29, 2025",
    type: "pdf",
    file: resumeWritingCert,
  },
  {
    title: "IOT & DevOps Webinar",
    issuer: "GATEWAY SOFTWARE SOLUTIONS",
    date: "March 22, 2026",
    type: "image",
    file: gatewayWebinarCert,
  },
  {
    title: "India's Industrial Transformation",
    issuer: "ICT ACADEMY",
    date: "December 10, 2025",
    type: "image",
    file: ictAcademyCert,
  },
];

function Certificates() {
  return (
    /* id="qualifications" என்பது id="certifications" ஆக மாற்றப்பட்டுள்ளது */
    <section id="certifications" style={styles.section}>
      <ParticlesBackground />

      <div style={styles.glowTopLeft}></div>
      <div style={styles.glowBottomRight}></div>

      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={styles.header}
        >
          <p style={styles.subHeading}>Check Out</p>
          <h2 style={styles.heading}>MY CERTIFICATES</h2>
          <p style={styles.description}>
            I have completed various technical training courses and certifications to enhance my engineering skills. Here are my verified credentials.
          </p>
        </motion.div>

        <div style={styles.grid}>
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              whileHover={{ y: -6 }}
              style={styles.card}
            >
              <div style={styles.previewFrame}>
                {cert.type === "pdf" ? (
                  <iframe
                    src={`${cert.file}#toolbar=0&navpanes=0`}
                    title={cert.title}
                    style={styles.pdfIframe}
                  />
                ) : (
                  <img
                    src={cert.file}
                    alt={cert.title}
                    style={styles.certImg}
                  />
                )}
              </div>

              <div style={styles.cardDetails}>
                <h3 style={styles.certTitle}>{cert.title}</h3>
                <p style={styles.certIssuer}>{cert.issuer}</p>
                {cert.score && (
                  <p style={styles.scoreText}>Score: {cert.score}</p>
                )}
                
                <div style={styles.btnGroup}>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.viewLink}
                  >
                    View Document ↗
                  </a>
                </div>
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
    maxWidth: "1400px",
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
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    backdropFilter: "blur(10px)",
  },
  previewFrame: {
    width: "100%",
    height: "130px",
    backgroundColor: "#050816",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
    marginBottom: "10px",
  },
  pdfIframe: {
    width: "100%",
    height: "100%",
    border: "none",
    pointerEvents: "none",
  },
  certImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardDetails: {
    textAlign: "center",
    width: "100%",
  },
  certTitle: {
    fontSize: "0.85rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "4px",
    lineHeight: "1.2",
  },
  certIssuer: {
    fontSize: "0.7rem",
    fontWeight: "600",
    color: "#c084fc",
    letterSpacing: "0.4px",
    marginBottom: "4px",
  },
  scoreText: {
    fontSize: "0.7rem",
    color: "#34d399",
    fontWeight: "600",
    marginBottom: "6px",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: "4px",
  },
  viewLink: {
    fontSize: "0.75rem",
    color: "#60a5fa",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default Certificates;