import React from "react";
import etherCert from "../assets/ether-certificate.jpg";
import craftyCert from "../assets/crafty-certificate.jpg";

function CertificationsPage() {
  const certificates = [
    { title: "Full Stack Developer", company: "CraftyTech AI", file: craftyCert },
    { title: "Full Stack Developer", company: "Ether Infotech", file: etherCert },
  ];

  return (
    <div style={{ padding: "40px", backgroundColor: "#0b0f17", color: "#fff", minHeight: "100vh" }}>
      <h1 style={{ color: "#c084fc" }}>📜 Certificates</h1>
      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {certificates.map((cert, idx) => (
          <div key={idx} style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", backgroundColor: "#111827" }}>
            <h3>{cert.title}</h3>
            <p style={{ color: "#94a3b8" }}>{cert.company}</p>
            <a href={cert.file} target="_blank" rel="noreferrer" style={{ color: "#a855f7", fontWeight: "bold" }}>
              🖼️ View Certificate ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationsPage;