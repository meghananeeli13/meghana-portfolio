import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import aiMl from "../../assets/certificates/ai-ml.png"
import ciscoCpp from "../../assets/certificates/cisco-cpp.png"
import azureCloud from "../../assets/certificates/azure-cloud.png"
import dataML from "../../assets/certificates/data-ml.png"
import ibmInternship from "../../assets/certificates/ibm-internship.png"
import iitFoundation from "../../assets/certificates/iit-foundation.png"
import infosysCloud from "../../assets/certificates/infosys-cloud.png"
import javaGeeks from "../../assets/certificates/java-geeks.png"
import nptelJava from "../../assets/certificates/nptel-java.png"
import nptelSoftSkills from "../../assets/certificates/nptel-softskills.png"
import smartCoder from "../../assets/certificates/smart-coder.png"

const certifications = [
  {
    id: 1,
    title: "AI and Machine Learning",
    issuer: "Simplilearn",
    color: "#7C3AED",
    icon: "🤖",
    image: aiMl,
    skills: ["AI", "Machine Learning", "Python"],
  },
  {
    id: 2,
    title: "Cisco C++",
    issuer: "Cisco",
    color: "#06B6D4",
    icon: "⚙️",
    image: ciscoCpp,
    skills: ["C++", "Programming", "OOP"],
  },
  {
    id: 3,
    title: "Cloud Computing using Microsoft Azure",
    issuer: "Microsoft",
    color: "#22D3EE",
    icon: "☁️",
    image: azureCloud,
    skills: ["Azure", "Cloud Computing", "DevOps"],
  },
  {
    id: 4,
    title: "Data with Machine Learning",
    issuer: "Simplilearn",
    color: "#A78BFA",
    icon: "📊",
    image: dataML,
    skills: ["Data Science", "ML", "Python"],
  },
  {
    id: 5,
    title: "IBM SkillsBuild AI ML Internship",
    issuer: "IBM",
    color: "#F472B6",
    icon: "🏢",
    image: ibmInternship,
    skills: ["AI", "ML", "IBM Cloud"],
  },
  {
    id: 6,
    title: "IIT Madras BS Data Science Foundation",
    issuer: "IIT Madras",
    color: "#34D399",
    icon: "🎓",
    image: iitFoundation,
    skills: ["Data Science", "Statistics", "Python"],
  },
  {
    id: 7,
    title: "Infosys SpringBoard Cloud Computing",
    issuer: "Infosys",
    color: "#7C3AED",
    icon: "🌐",
    image: infosysCloud,
    skills: ["Cloud", "Infosys", "Networking"],
  },
  {
    id: 8,
    title: "Java — Geeks for Geeks",
    issuer: "GeeksforGeeks",
    color: "#06B6D4",
    icon: "☕",
    image: javaGeeks,
    skills: ["Java", "OOP", "Data Structures"],
  },
  {
    id: 9,
    title: "NPTEL Programming in Java",
    issuer: "NPTEL",
    color: "#22D3EE",
    icon: "📝",
    image: nptelJava,
    skills: ["Java", "Programming", "NPTEL"],
  },
  {
    id: 10,
    title: "NPTEL Soft Skills",
    issuer: "NPTEL",
    color: "#A78BFA",
    icon: "🤝",
    image: nptelSoftSkills,
    skills: ["Communication", "Leadership", "Teamwork"],
  },
  {
    id: 11,
    title: "Smart Coder",
    issuer: "SmartInterviews",
    color: "#F472B6",
    icon: "💻",
    image: smartCoder,
    skills: ["DSA", "Problem Solving", "Coding"],
  },
]

const issuerColors = {
  Simplilearn: "#7C3AED",
  Cisco: "#049FD9",
  Microsoft: "#00A4EF",
  IBM: "#006699",
  "IIT Madras": "#34D399",
  Infosys: "#007CC3",
  GeeksforGeeks: "#2F8D46",
  NPTEL: "#F472B6",
  SmartInterviews: "#F59E0B",
}

function CertModal({ cert, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 40 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={e => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "640px",
          background: "#0F1420",
          border: `1px solid ${cert.color}50`,
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: `0 0 80px ${cert.color}30`,
        }}
      >
        {/* Modal header */}
        <div style={{
          padding: "20px 28px",
          borderBottom: `1px solid ${cert.color}20`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: `${cert.color}08`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "24px" }}>{cert.icon}</span>
            <div>
              <h3 style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: "13px",
                color: cert.color,
                marginBottom: "2px",
              }}>{cert.title}</h3>
              <p style={{
                color: issuerColors[cert.issuer] || "#9CA3AF",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
              }}>{cert.issuer}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#9CA3AF",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              padding: "6px 14px",
              cursor: "pointer",
            }}
          >✕ Close</button>
        </div>

        {/* Certificate image */}
        <div style={{ padding: "20px", background: "#080C14" }}>
          <img
            src={cert.image}
            alt={cert.title}
            style={{
              width: "100%",
              borderRadius: "12px",
              display: "block",
              border: `1px solid ${cert.color}20`,
              boxShadow: `0 0 30px ${cert.color}15`,
            }}
          />
        </div>

        {/* Footer */}
        <div style={{
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          borderTop: `1px solid ${cert.color}15`,
        }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {cert.skills.map((s, i) => (
              <span key={i} style={{
                padding: "3px 10px",
                borderRadius: "20px",
                border: `1px solid ${cert.color}30`,
                color: cert.color,
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                background: `${cert.color}08`,
              }}>{s}</span>
            ))}
          </div>
          <span style={{
            color: issuerColors[cert.issuer] || "#9CA3AF",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
          }}>— {cert.issuer}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Certifications() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <section
      id="certifications"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0B0F1A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Nebula glows */}
      <div style={{
        position: "absolute", top: "15%", left: "5%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)",
        filter: "blur(80px)", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", bottom: "15%", right: "5%",
        width: "350px", height: "350px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)",
        filter: "blur(80px)", zIndex: 0,
      }} />

      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          marginBottom: "64px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p style={{
          color: "#06B6D4",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "12px",
          letterSpacing: "4px",
          marginBottom: "16px",
        }}>▶ CERTIFICATIONS.LOG</p>

        <h2 style={{
          fontFamily: "Orbitron, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: "900",
          color: "#E5E7EB",
          marginBottom: "16px",
        }}>
          My{" "}
          <span style={{
            background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
          }}>Certifications</span>
        </h2>

        <p style={{
          color: "#6B7280",
          fontFamily: "Inter, sans-serif",
          fontSize: "15px",
          maxWidth: "500px",
          margin: "0 auto",
          lineHeight: "1.7",
        }}>
          Click any card to view the certificate 📜
        </p>
      </motion.div>

      {/* Cards grid */}
      <div style={{
        display: "flex",
        gap: "24px",
        flexWrap: "wrap",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        maxWidth: "1100px",
        width: "100%",
      }}>
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true }}
            animate={{ y: [0, -6, 0] }}
            whileHover={{ scale: 1.04, y: -10 }}
            onClick={() => setActiveCert(cert)}
            style={{
              width: "280px",
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${cert.color}30`,
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = `${cert.color}08`
              e.currentTarget.style.borderColor = `${cert.color}60`
              e.currentTarget.style.boxShadow = `0 0 40px ${cert.color}25`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.02)"
              e.currentTarget.style.borderColor = `${cert.color}30`
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            {/* Top glow line */}
            <div style={{
              position: "absolute", top: 0, left: "15%", right: "15%",
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`,
            }} />

            {/* Issuer badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 10px",
              borderRadius: "20px",
              background: `${issuerColors[cert.issuer] || "#9CA3AF"}15`,
              border: `1px solid ${issuerColors[cert.issuer] || "#9CA3AF"}30`,
              marginBottom: "16px",
            }}>
              <div style={{
                width: "6px", height: "6px",
                borderRadius: "50%",
                background: issuerColors[cert.issuer] || "#9CA3AF",
                boxShadow: `0 0 6px ${issuerColors[cert.issuer] || "#9CA3AF"}`,
              }} />
              <span style={{
                color: issuerColors[cert.issuer] || "#9CA3AF",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                letterSpacing: "1px",
              }}>{cert.issuer}</span>
            </div>

            {/* Icon */}
            <div style={{
              fontSize: "36px",
              marginBottom: "14px",
              filter: `drop-shadow(0 0 10px ${cert.color})`,
            }}>{cert.icon}</div>

            {/* Title */}
            <h3 style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "13px",
              fontWeight: "700",
              color: "#E5E7EB",
              marginBottom: "16px",
              lineHeight: "1.5",
            }}>{cert.title}</h3>

            {/* Skill tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {cert.skills.map((s, j) => (
                <span key={j} style={{
                  padding: "3px 10px",
                  borderRadius: "20px",
                  border: `1px solid ${cert.color}25`,
                  color: "#6B7280",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "10px",
                  background: `${cert.color}05`,
                }}>{s}</span>
              ))}
            </div>

            {/* View hint */}
            <p style={{
              position: "absolute",
              bottom: "12px",
              right: "16px",
              color: cert.color,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              letterSpacing: "1px",
              opacity: 0.6,
            }}>VIEW CERT →</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeCert && (
          <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certifications