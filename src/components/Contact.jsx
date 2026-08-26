import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mailto link trigger
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Kanmani,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:kanmanimurugesan1526@gmail.com?subject=${subject}&body=${body}`;

    // Success alert காண்பிக்க
    setIsSubmitted(true);

    // Form inputs-ஐ காலி செய்ய
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // 5 வினாடிகளுக்குப் பின் மெசேஜ் மறைய
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const draftMailUrl = `mailto:kanmanimurugesan1526@gmail.com?subject=${encodeURIComponent(
    "Hello Kanmani!"
  )}&body=${encodeURIComponent(
    "Hi Kanmani,\n\nI came across your personal site and wanted to connect with you..."
  )}`;

  return (
    <section id="contact" style={styles.section}>
      {/* Particle Dynamic Background */}
      <ParticlesBackground />

      {/* Radial Glow Effects matching Hero */}
      <div style={styles.glowTopLeft}></div>
      <div style={styles.glowBottomRight}></div>

      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.subTitle}>Connect With Me</p>
          <h2 style={styles.mainTitle}>Let's Talk</h2>
        </div>

        <div style={styles.gridContainer}>
          {/* Left Side: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={styles.infoWrapper}
          >
            <h3 style={styles.infoTitle}>Reach Out Anytime!</h3>
            <p style={styles.infoText}>
              Feel free to reach out anytime via phone, email, or LinkedIn. I'm always happy to connect!
            </p>

            <div style={styles.detailsList}>
              {/* Phone & WhatsApp */}
              <div style={styles.detailItem}>
                <span style={styles.iconBox}>
                  <FaPhoneAlt style={{ color: "#38bdf8", fontSize: "1.2rem" }} />
                </span>
                <div>
                  <p style={styles.detailLabel}>Direct Call / WhatsApp</p>
                  <a
                    href="https://wa.me/918220467835?text=Hi%20Kanmani!"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.detailValue}
                  >
                    +91 82204 67835
                  </a>
                  <span style={styles.badge}>Always Available</span>
                </div>
              </div>

              {/* Instant Email */}
              <div style={styles.detailItem}>
                <span style={styles.iconBox}>
                  <FaEnvelope style={{ color: "#f43f5e", fontSize: "1.3rem" }} />
                </span>
                <div>
                  <p style={styles.detailLabel}>Instant Email</p>
                  <a href={draftMailUrl} style={styles.detailValue}>
                    kanmanimurugesan1526@gmail.com
                  </a>
                  <span style={styles.badge}>Draft Quick Note</span>
                </div>
              </div>

              {/* LinkedIn */}
              <div style={styles.detailItem}>
                <span style={styles.iconBox}>
                  <FaLinkedin style={{ color: "#0a66c2", fontSize: "1.4rem" }} />
                </span>
                <div>
                  <p style={styles.detailLabel}>LinkedIn Profile</p>
                  <a
                    href="https://www.linkedin.com/in/kanmani-murugesan-43b4a1375"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.detailValue}
                  >
                    linkedin.com/in/kanmani-murugesan
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div style={styles.detailItem}>
                <span style={styles.iconBox}>
                  <FaGithub style={{ color: "#ffffff", fontSize: "1.4rem" }} />
                </span>
                <div>
                  <p style={styles.detailLabel}>GitHub Profile</p>
                  <a
                    href="https://github.com/M-kanmani"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.detailValue}
                  >
                    github.com/M-kanmani
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={styles.detailItem}>
                <span style={styles.iconBox}>
                  <FaMapMarkerAlt style={{ color: "#e11d48", fontSize: "1.3rem" }} />
                </span>
                <div>
                  <p style={styles.detailLabel}>Location</p>
                  <p style={styles.detailTextValue}>Mayiladuthurai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Simple Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={styles.formCard}
          >
            {/* Success Alert */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={styles.successBox}
              >
                ✅ Thanks! Your message has been sent successfully.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ ...styles.input, resize: "vertical" }}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={styles.button}
              >
                Send Message 🚀
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "#050816",
    color: "#ffffff",
    padding: "80px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    position: "relative",
    zIndex: 10,
  },
  header: {
    textAlign: "center",
    marginBottom: "56px",
  },
  subTitle: {
    color: "#60a5fa",
    fontSize: "1.1rem",
    fontWeight: "600",
    letterSpacing: "1px",
    marginBottom: "8px",
  },
  mainTitle: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#ffffff",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    alignItems: "start",
  },
  infoWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  infoTitle: {
    fontSize: "1.6rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "12px",
  },
  infoText: {
    color: "#94a3b8",
    fontSize: "0.95rem",
    lineHeight: "1.6",
    marginBottom: "32px",
  },
  detailsList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  detailItem: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    padding: "14px 20px",
    borderRadius: "16px",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    backdropFilter: "blur(10px)",
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  detailLabel: {
    color: "#60a5fa",
    fontSize: "0.78rem",
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: "2px",
  },
  detailValue: {
    color: "#ffffff",
    fontSize: "0.95rem",
    fontWeight: "600",
    textDecoration: "none",
    display: "inline-block",
  },
  badge: {
    display: "inline-block",
    marginLeft: "8px",
    fontSize: "0.72rem",
    color: "#38bdf8",
    backgroundColor: "rgba(56, 189, 248, 0.1)",
    padding: "2px 8px",
    borderRadius: "6px",
    fontWeight: "500",
  },
  detailTextValue: {
    color: "#ffffff",
    fontSize: "0.95rem",
    fontWeight: "600",
    margin: 0,
  },
  formCard: {
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
  },
  successBox: {
    backgroundColor: "rgba(34, 197, 94, 0.15)",
    color: "#4ade80",
    border: "1px solid rgba(34, 197, 94, 0.4)",
    padding: "12px 16px",
    borderRadius: "10px",
    marginBottom: "20px",
    fontSize: "0.9rem",
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    color: "#c084fc",
    fontSize: "0.85rem",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#050816",
    border: "1px solid rgba(59, 130, 246, 0.3)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#ffffff",
    fontSize: "0.95rem",
    outline: "none",
  },
  button: {
    backgroundColor: "rgba(59, 130, 246, 0.2)",
    color: "#ffffff",
    fontWeight: "700",
    fontSize: "1rem",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #3b82f6",
    cursor: "pointer",
    marginTop: "8px",
    transition: "all 0.3s ease",
  },
};

export default Contact;