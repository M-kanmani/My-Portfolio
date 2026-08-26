import React, { useState } from "react";
import { motion } from "framer-motion";

function Sidebar() {
  const [activeNav, setActiveNav] = useState("#home");

  const navLinks = [
    { name: "Home", icon: "🏠", href: "#home" },
    { name: "About", icon: "👤", href: "#about" },
    { name: "Qualifications", icon: "🎓", href: "#qualifications" },
    { name: "Tech Stack", icon: "⚡", href: "#techstack" },
    { name: "Projects", icon: "💻", href: "#projects" },
    { name: "Experience", icon: "🚀", href: "#experience" },
    { name: "Certifications", icon: "📜", href: "#certifications" },
    { name: "Offer Letters", icon: "💼", href: "#offer-letters", badge: "1" },
    { name: "Contact", icon: "✉️", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveNav(href);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside style={styles.sidebar}>
      {/* 1. Profile Section */}
      <div style={styles.profileSection}>
        <div style={styles.avatar}>K</div>
        <div style={styles.profileInfo}>
          <h3 style={styles.profileName}>Kanmani M</h3>
          <span style={styles.profileRole}>Full Stack Developer</span>
        </div>
      </div>

      {/* 2. Menu Links directly visible below profile */}
      <nav style={styles.navList}>
        {navLinks.map((link, index) => {
          const isActive = activeNav === link.href;
          return (
            <motion.a
              key={index}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              whileHover={{ x: 6, backgroundColor: "rgba(96, 165, 250, 0.12)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                ...styles.navItem,
                backgroundColor: isActive ? "rgba(96, 165, 250, 0.15)" : "rgba(255, 255, 255, 0.02)",
                color: isActive ? "#60a5fa" : "#cbd5e1",
                borderLeft: isActive ? "4px solid #60a5fa" : "4px solid transparent",
              }}
            >
              <span style={styles.navIcon}>{link.icon}</span>
              <span style={styles.navText}>{link.name}</span>
              {link.badge && <span style={styles.badge}>{link.badge}</span>}
            </motion.a>
          );
        })}
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    width: "270px",
    backgroundColor: "#0b0f17",
    borderRight: "1px solid rgba(255, 255, 255, 0.08)",
    padding: "24px 16px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    zIndex: 1000,
    overflowY: "auto",
  },
  profileSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    paddingBottom: "18px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
  },
  avatar: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
    fontSize: "1.2rem",
    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
  },
  profileInfo: {
    display: "flex",
    flexDirection: "column",
  },
  profileName: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#f8fafc",
    margin: 0,
  },
  profileRole: {
    fontSize: "0.78rem",
    color: "#94a3b8",
    marginTop: "2px",
  },
  navList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 14px",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "0.92rem",
    fontWeight: "600",
    transition: "all 0.2s ease",
    cursor: "pointer",
  },
  navIcon: {
    fontSize: "1.15rem",
  },
  navText: {
    flexGrow: 1,
  },
  badge: {
    backgroundColor: "#f59e0b",
    color: "#000000",
    fontSize: "0.72rem",
    fontWeight: "800",
    padding: "2px 8px",
    borderRadius: "10px",
  },
};

export default Sidebar;