import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  User, 
  GraduationCap, 
  Zap, 
  Code2, 
  Briefcase, 
  Award, 
  Mail,
  Menu,
  X
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Qualifications", href: "#qualifications", icon: GraduationCap },
  { label: "Tech Stack", href: "#tech-stack", icon: Zap },
  { label: "Projects", href: "#projects", icon: Code2 },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Certifications", href: "#certifications", icon: Award },
  { label: "Contact", href: "#contact", icon: Mail },
];

function Navbar() {
  const [active, setActive] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        
        {/* Brand Name with Gradient Glow */}
        <div style={styles.brand}>
          <a href="#home" style={{ textDecoration: "none" }}>
            <h1 style={styles.brandName}>
              Kanmani <span style={styles.brandAccent}>M</span>
            </h1>
            <p style={styles.brandTitle}>Full Stack Developer</p>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav style={styles.desktopNav}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.href;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.href)}
                style={{
                  ...styles.navLink,
                  color: isActive ? "#38bdf8" : "#94a3b8",
                  backgroundColor: isActive ? "rgba(56, 189, 248, 0.12)" : "transparent",
                  borderColor: isActive ? "rgba(56, 189, 248, 0.3)" : "transparent",
                }}
              >
                <Icon 
                  size={17} 
                  style={{ 
                    color: isActive ? "#38bdf8" : "#64748b",
                    transition: "color 0.2s ease" 
                  }} 
                />
                <span>{item.label}</span>
                
                {/* Active Underline Glow */}
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    style={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={styles.menuBtn}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} color="#38bdf8" /> : <Menu size={24} color="#94a3b8" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={styles.mobileNav}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActive(item.href);
                  setIsOpen(false);
                }}
                style={{
                  ...styles.mobileNavLink,
                  color: active === item.href ? "#38bdf8" : "#cbd5e1",
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </motion.div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "rgba(5, 8, 22, 0.75)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    padding: "12px 24px",
  },
  container: {
    maxWidth: "1250px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    display: "flex",
    flexDirection: "column",
  },
  brandName: {
    fontSize: "1.2rem",
    fontWeight: "800",
    color: "#ffffff",
    margin: 0,
    letterSpacing: "0.5px",
  },
  brandAccent: {
    color: "#38bdf8",
    background: "linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  brandTitle: {
    fontSize: "0.72rem",
    color: "#94a3b8",
    fontWeight: "600",
    margin: "2px 0 0 0",
    letterSpacing: "0.5px",
  },
  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    padding: "6px",
    borderRadius: "14px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
  },
  navLink: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "0.85rem",
    fontWeight: "600",
    padding: "8px 14px",
    borderRadius: "10px",
    textDecoration: "none",
    border: "1px solid transparent",
    transition: "all 0.25s ease",
  },
  activeIndicator: {
    position: "absolute",
    bottom: "-2px",
    left: "20%",
    right: "20%",
    height: "2px",
    backgroundColor: "#38bdf8",
    borderRadius: "2px",
    boxShadow: "0 0 8px #38bdf8",
  },
  menuBtn: {
    display: "none",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "8px",
  },
  mobileNav: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "20px 10px",
    backgroundColor: "#0b1120",
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    marginTop: "12px",
    borderRadius: "12px",
  },
  mobileNavLink: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "0.95rem",
    fontWeight: "600",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "8px",
  },
};

export default Navbar;