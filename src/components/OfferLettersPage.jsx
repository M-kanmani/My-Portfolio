import React from "react";
import offerPdf from "../assets/Offer_Letter.pdf"; // PDF ஃபைலை assets ஃபோல்டரில் வைத்துள்ளீர்களா என சரிபார்க்கவும்

function OfferLetterCard() {
  const offerDetails = {
    company: "Zidio Development",
    role: "Java Full Stack Developer Intern",
    employeeId: "ZIDIOqUGtQZ",
    startDate: "20-07-2026",
    endDate: "20-08-2026",
    stipend: "Up to ₹12,000 / Month",
    location: "Bengaluru, Karnataka",
    pdfUrl: offerPdf,
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div>
          <span style={styles.badge}>Active Offer</span>
          <h2 style={styles.role}>{offerDetails.role}</h2>
          <h4 style={styles.company}>🏢 {offerDetails.company} ({offerDetails.location})</h4>
        </div>
        <div style={styles.stipendBadge}>{offerDetails.stipend}</div>
      </div>

      <div style={styles.infoGrid}>
        <div>
          <span style={styles.label}>Employee ID:</span>
          <span style={styles.value}>{offerDetails.employeeId}</span>
        </div>
        <div>
          <span style={styles.label}>Duration:</span>
          <span style={styles.value}>{offerDetails.startDate} to {offerDetails.endDate}</span>
        </div>
      </div>

      <div style={styles.footer}>
        <a
          href={offerDetails.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.btn}
        >
          📄 View Official PDF ↗
        </a>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#0f172a",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    padding: "24px",
    maxWidth: "600px",
    margin: "20px auto",
    color: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    paddingBottom: "16px",
  },
  badge: {
    backgroundColor: "#10b981",
    color: "#000",
    fontSize: "0.75rem",
    fontWeight: "bold",
    padding: "4px 8px",
    borderRadius: "6px",
  },
  role: {
    margin: "8px 0 4px 0",
    fontSize: "1.25rem",
    color: "#60a5fa",
  },
  company: {
    margin: 0,
    fontSize: "0.9rem",
    color: "#94a3b8",
    fontWeight: "normal",
  },
  stipendBadge: {
    backgroundColor: "rgba(96, 165, 250, 0.1)",
    color: "#60a5fa",
    border: "1px solid rgba(96, 165, 250, 0.3)",
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "0.85rem",
    fontWeight: "600",
  },
  infoGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    margin: "16px 0",
    fontSize: "0.9rem",
  },
  label: {
    color: "#64748b",
    marginRight: "8px",
  },
  value: {
    color: "#e2e8f0",
    fontWeight: "600",
  },
  footer: {
    paddingTop: "12px",
  },
  btn: {
    display: "inline-block",
    backgroundColor: "#2563eb",
    color: "#fff",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "0.9rem",
  },
};

export default OfferLetterCard;