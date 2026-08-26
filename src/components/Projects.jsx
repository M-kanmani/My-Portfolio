import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GITHUB_BASE = "https://github.com/M-kanmani";

const projects = [
  {
    id: 1,
    title: "Job Portal Application",
    description:
      "A complete full-stack portal connecting job seekers and recruiters with job search, applications, and management features.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "MERN",
    featured: true,
    github: `${GITHUB_BASE}/Job-Portal`,
    demo: "https://job-portal-nfcd.onrender.com",
  },
  {
    id: 2,
    title: "Interview Preparation Platform",
    description:
      "Interactive study platform built to help candidates prepare technical questions, track daily progress, and organize notes.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    category: "MERN",
    featured: true,
    github: `${GITHUB_BASE}/interview-preparation-platform`,
    demo: "https://interview-preparation-platform-1.onrender.com",
  },
  {
    id: 3,
    title: "MediChat AI",
    description:
      "AI-powered medical assistance chatbot designed to answer healthcare queries with live web deployment.",
    tech: ["React", "AI Integration", "Node.js", "Tailwind CSS"],
    category: "AI",
    featured: true,
    github: `${GITHUB_BASE}/medichat-ai`,
    demo: "https://medichat-ai-three.vercel.app",
  },
  {
    id: 4,
    title: "Product Management System",
    description:
      "A structured product management platform with inventory controls, filtering, and responsive interface.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    category: "Frontend",
    github: `${GITHUB_BASE}/Product-Management`,
    demo: "https://product-management-vert-zeta.vercel.app",
  },
  {
    id: 5,
    title: "Study Planner & Progress Tracker",
    description:
      "A productivity app helping students plan schedules, set academic targets, and track daily subject progress.",
    tech: ["React", "JavaScript", "LocalStorage"],
    category: "Frontend",
    github: `${GITHUB_BASE}/study-planner-progress-tracker`,
    demo: "https://study-planner-progress-tracker.vercel.app",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description:
      "Personal finance tracking tool to manage income, split monthly expenses, and monitor overall savings visually.",
    tech: ["React", "JavaScript", "Chart.js"],
    category: "Frontend",
    github: `${GITHUB_BASE}/expense-tracker`,
    demo: "https://expense-tracker-iota-rust-47.vercel.app",
  },
  {
    id: 7,
    title: "Freelance Project Marketplace",
    description:
      "An enterprise marketplace connecting freelancers with clients to post tasks, bid on projects, and manage hires.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "MERN",
    github: `${GITHUB_BASE}/freelance-project-marketplace`,
    demo: "https://freelance-project-marketplace.onrender.com",
  },
  {
    id: 8,
    title: "Recipe Craft (MealCraft)",
    description:
      "A web app for discovering customized cooking recipes, ingredients breakdown, and step-by-step meal prep guides.",
    tech: ["React", "REST API", "CSS3"],
    category: "Frontend",
    github: `${GITHUB_BASE}/recipe-craft`,
    demo: "https://mealcraft-app.netlify.app",
  },
  {
    id: 9,
    title: "Email Reminder System (NM-projects)",
    description:
      "Automated notification and email reminder system for scheduling tasks and sending time-bound alerts.",
    tech: ["Node.js", "Express", "Nodemailer", "MongoDB"],
    category: "Backend",
    github: `${GITHUB_BASE}/NM-projects`,
    demo: "https://email-reminder-system-kgon.onrender.com",
  },
  {
    id: 10,
    title: "Weather Data Analyzer",
    description:
      "A data science project that analyzes weather data using Python. Includes data cleaning, trend visualization, and correlation analysis.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    category: "Data Science",
    github: `${GITHUB_BASE}/Weather--data-analyzer`,
    demo: "",
  },
  {
    id: 11,
    title: "Fitness Tracker Application",
    description:
      "A simple fitness tracker app designed to log daily workouts, step counts, and calories burned effectively.",
    tech: ["Python", "Jupyter Notebook", "Data Analytics"],
    category: "Data Science",
    github: `${GITHUB_BASE}/Fitness-tracker-application`,
    demo: "",
  },
  {
    id: 12,
    title: "Java Quiz Game",
    description:
      "A Java-based interactive quiz game featuring custom timer controls, real-time score tracking, and multiple-choice questions.",
    tech: ["Java", "JavaFX", "OOP"],
    category: "Java",
    github: `${GITHUB_BASE}/Java-Quiz-Game`,
    demo: "",
  },
];

const categories = ["All", "MERN", "Frontend", "Backend", "AI", "Data Science", "Java"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((t) =>
        t.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.headerContainer}>
        <h3 style={styles.subHeading}>My Recent Work</h3>
        <h2 style={styles.mainHeading}>Featured Projects</h2>
      </div>

      {/* Search & Filter Bar */}
      <div style={styles.controlsWrapper}>
        <input
          type="text"
          placeholder="Search projects or tech (e.g., Python, React, Java)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />

        <div style={styles.filterGroup}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                ...styles.filterBtn,
                backgroundColor:
                  selectedCategory === cat
                    ? "#3b82f6"
                    : "rgba(255, 255, 255, 0.05)",
                color: selectedCategory === cat ? "#ffffff" : "#9ca3af",
                border:
                  selectedCategory === cat
                    ? "1px solid #60a5fa"
                    : "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout style={styles.grid}>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={project.id}
              whileHover={{ y: -8 }}
              style={{
                ...styles.card,
                borderColor: project.featured
                  ? "rgba(168, 85, 247, 0.4)"
                  : "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div>
                <div style={styles.cardHeader}>
                  <div style={styles.statusWrapper}>
                    {project.demo ? (
                      <>
                        <span style={styles.liveDot}></span>
                        <span style={styles.statusText}>Live</span>
                      </>
                    ) : (
                      <>
                        <span style={styles.codeDot}></span>
                        <span style={styles.codeText}>Source Code</span>
                      </>
                    )}
                    {project.featured && (
                      <span style={styles.featuredBadge}>⭐ Featured</span>
                    )}
                  </div>

                  <div style={styles.linksGroup}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.link}
                      >
                        GitHub 🔗
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.linkAccent}
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>

                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>
              </div>

              <div style={styles.techWrapper}>
                {project.tech.map((item, index) => (
                  <span key={index} style={styles.techBadge}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  headerContainer: {
    textAlign: "center",
    marginBottom: "36px",
  },
  subHeading: {
    color: "#a855f7",
    fontSize: "0.95rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    marginBottom: "8px",
  },
  mainHeading: {
    color: "#ffffff",
    fontSize: "2.2rem",
    fontWeight: "800",
  },
  controlsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    marginBottom: "40px",
  },
  searchInput: {
    width: "100%",
    maxWidth: "450px",
    padding: "12px 20px",
    borderRadius: "9999px",
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    color: "#ffffff",
    fontSize: "0.9rem",
    outline: "none",
  },
  filterGroup: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "8px",
  },
  filterBtn: {
    padding: "8px 16px",
    borderRadius: "9999px",
    fontSize: "0.85rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "rgba(15, 23, 42, 0.65)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  statusWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  liveDot: {
    width: "8px",
    height: "8px",
    backgroundColor: "#22c55e",
    borderRadius: "50%",
    boxShadow: "0 0 8px #22c55e",
  },
  statusText: {
    color: "#22c55e",
    fontSize: "0.75rem",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  codeDot: {
    width: "8px",
    height: "8px",
    backgroundColor: "#a855f7",
    borderRadius: "50%",
    boxShadow: "0 0 8px #a855f7",
  },
  codeText: {
    color: "#c084fc",
    fontSize: "0.75rem",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  featuredBadge: {
    backgroundColor: "rgba(168, 85, 247, 0.15)",
    color: "#c084fc",
    border: "1px solid rgba(168, 85, 247, 0.3)",
    fontSize: "0.72rem",
    fontWeight: "700",
    padding: "2px 8px",
    borderRadius: "9999px",
    marginLeft: "4px",
  },
  linksGroup: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  link: {
    color: "#9ca3af",
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: "600",
  },
  linkAccent: {
    color: "#3b82f6",
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: "600",
  },
  title: {
    color: "#ffffff",
    fontSize: "1.25rem",
    fontWeight: "700",
    marginBottom: "12px",
  },
  description: {
    color: "#94a3b8",
    fontSize: "0.9rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  techWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  techBadge: {
    backgroundColor: "rgba(59, 130, 246, 0.12)",
    color: "#60a5fa",
    border: "1px solid rgba(59, 130, 246, 0.25)",
    fontSize: "0.78rem",
    fontWeight: "600",
    padding: "4px 10px",
    borderRadius: "9999px",
  },
};