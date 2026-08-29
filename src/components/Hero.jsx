import React from "react";
import profile from "../assets/hero.png";
import ParticlesBackground from "./ParticlesBackground";

function Hero() {
  return (
    <section style={styles.heroSection}>
      {/* Dynamic Particle Background Component */}
      <ParticlesBackground />

      {/* Background Radial Glow Effect */}
      <div style={styles.glowTopLeft}></div>
      <div style={styles.glowBottomRight}></div>

      {/* Main Responsive Grid Container */}
      <div style={styles.container} className="hero-container">
        
        {/* Left Side: Content & Action Links */}
        <div style={styles.leftContent} className="hero-left">
          <p style={styles.greeting}>👋 Hello, I'm</p>

          <h1 style={styles.name} className="hero-name">M. Kanmani</h1>

          <h2 style={styles.role} className="hero-role">Full Stack Developer</h2>

          <p style={styles.description} className="hero-desc">
            I build modern and scalable web applications using Java, React, Node.js and MongoDB. 
            Passionate about problem solving and creating real-world software solutions.
          </p>

          {/* Action Buttons */}
          <div style={styles.btnGroup} className="hero-btns">
            <a
              href="/kanmani-resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={styles.primaryBtn}
            >
              👁 View Resume
            </a>
            <a
              href="/kanmani-resume.pdf"
              download="M_Kanmani_Resume.pdf"
              style={styles.secondaryBtn}
            >
              📥 Download Resume
            </a>
          </div>

          {/* Social Brand Icon Links (GitHub, LinkedIn, Email) */}
          <div style={styles.socialContainer} className="hero-socials">
            {/* GitHub */}
            <a
              href="https://github.com/M-kanmani"
              target="_blank"
              rel="noreferrer"
              style={styles.iconBox}
              title="GitHub"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kanmani-murugesan-43b4a1375/"
              target="_blank"
              rel="noreferrer"
              style={styles.iconBox}
              title="LinkedIn"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:kanmanimurugesan1526@gmail.com"
              style={styles.iconBox}
              title="Email"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 6.013-9.518-6.013h19.036zm-19.518 14v-11.75l9.518 6.013 9.518-6.013v11.75h-19.036z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div style={styles.imageSection} className="hero-img-section">
          <div style={styles.ambientGlow}></div>
          <div style={styles.gradientBorderCard} className="gradient-card">
            <div style={styles.imageInnerWrapper}>
              <img src={profile} alt="Kanmani" style={styles.profileImg} />
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Down */}
      <div style={styles.scrollDown}>
        ↓ Scroll Down
      </div>

{/* Universal Responsive CSS for Mobile & Desktop Browser Modes */}
      <style>{`
        @media screen and (max-width: 1200px) {
          body, html {
            overflow-x: hidden !important;
            width: 100% !important;
          }
          section {
            padding: 30px 20px !important;
            box-sizing: border-box !important;
            width: 100% !important;
            min-height: auto !important;
          }
          .hero-container {
            flex-direction: column-reverse !important;
            align-items: center !important;
            text-align: center !important;
            gap: 24px !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            padding: 0 10px !important;
            box-sizing: border-box !important;
          }
          .hero-left {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            box-sizing: border-box !important;
          }
          .hero-name {
            font-size: 2.2rem !important;
            word-break: break-word !important;
          }
          .hero-role {
            font-size: 1.2rem !important;
          }
          .hero-desc {
            font-size: 0.95rem !important;
            padding: 0 10px !important;
            text-align: center !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .hero-btns {
            justify-content: center !important;
            width: 100% !important;
            gap: 12px !important;
          }
          .hero-socials {
            justify-content: center !important;
            width: 100% !important;
            margin-top: 20px !important;
          }
          .gradient-card {
            width: 190px !important;
            height: 190px !important;
            margin-top: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}

// Inline CSS Styles matching dark #050816 theme
const styles = {
  heroSection: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "#050816",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "60px 20px",
    width: "100%",
    boxSizing: "border-box",
  },
  glowTopLeft: {
    position: "absolute",
    width: "350px",
    height: "350px",
    backgroundColor: "rgba(59, 130, 246, 0.2)",
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
    backgroundColor: "rgba(168, 85, 247, 0.2)",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "48px",
    position: "relative",
    zIndex: 10,
    boxSizing: "border-box",
  },
  leftContent: {
    flex: "1",
    minWidth: "280px",
  },
  greeting: {
    color: "#60a5fa",
    fontSize: "1.25rem",
    fontWeight: "500",
  },
  name: {
    fontSize: "3.5rem",
    fontWeight: "800",
    marginTop: "12px",
    lineHeight: "1.1",
  },
  role: {
    fontSize: "1.75rem",
    color: "#c084fc",
    marginTop: "16px",
    fontWeight: "600",
  },
  description: {
    color: "#d1d5db",
    marginTop: "20px",
    maxWidth: "560px",
    lineHeight: "1.6",
    fontSize: "1.05rem",
  },
  btnGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    marginTop: "32px",
  },
  primaryBtn: {
    padding: "12px 28px",
    borderRadius: "9999px",
    border: "1px solid #3b82f6",
    color: "#ffffff",
    backgroundColor: "rgba(59, 130, 246, 0.15)",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  secondaryBtn: {
    padding: "12px 28px",
    borderRadius: "9999px",
    border: "1px solid #a855f7",
    color: "#ffffff",
    backgroundColor: "transparent",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  socialContainer: {
    display: "flex",
    gap: "24px",
    marginTop: "32px",
    alignItems: "center",
  },
  iconBox: {
    color: "#ffffff",
    textDecoration: "none",
    transition: "transform 0.3s ease, color 0.3s ease",
    display: "inline-block",
  },
  imageSection: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ambientGlow: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    backgroundColor: "rgba(59, 130, 246, 0.3)",
    filter: "blur(40px)",
  },
  gradientBorderCard: {
    position: "relative",
    width: "288px",
    height: "288px",
    borderRadius: "50%",
    padding: "4px",
    background: "linear-gradient(135deg, #3b82f6, #a855f7, #ec4899)",
  },
  imageInnerWrapper: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "#050816",
    padding: "8px",
  },
  profileImg: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  scrollDown: {
    position: "absolute",
    bottom: "24px",
    color: "#9ca3af",
    fontSize: "0.875rem",
    letterSpacing: "1px",
  },
};

export default Hero;