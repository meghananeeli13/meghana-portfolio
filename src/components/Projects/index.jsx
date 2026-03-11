import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "ColabHub",
    subtitle: "Student Collaboration Platform",
    description: "A full-stack platform where students can post projects, discover collaborators, and request to join teams. Focused on community-driven project discovery.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    color: "#7C3AED",
    glowColor: "rgba(124,58,237,0.4)",
    icon: "🚀",
    github: "https://github.com/meghananeeli13/ColabHub",
    live: "#",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Pulmonary Nodule Detection",
    subtitle: "Deep Learning · IEEE Published",
    description: "A deep learning model to automatically detect pulmonary nodules from lung CT scans for early cancer detection using 3D CNN and YOLOv7.",
    tech: ["Python", "TensorFlow", "PyTorch", "YOLOv7", "OpenCV"],
    color: "#06B6D4",
    glowColor: "rgba(6,182,212,0.4)",
    icon: "🧠",
    github: "https://github.com/meghananeeli13/Pulmonary-Nodule-Detection",
    live: null,
    status: "Published",
  },
  {
    id: 3,
    title: "Hospital Management System",
    subtitle: "Console Application · C",
    description: "A menu-driven console application to manage patient records and billing. Implements file handling to store doctor details and automate bill calculation.",
    tech: ["C", "File Handling", "Data Structures"],
    color: "#22D3EE",
    glowColor: "rgba(34,211,238,0.4)",
    icon: "🏥",
    github: "https://github.com/meghananeeli13",
    live: null,
    status: "Completed",
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true }}
      animate={{ y: [0, -10, 0] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setFlipped(!flipped)}
      style={{
        width: "320px",
        height: "400px",
        cursor: "pointer",
        perspective: "1000px",
        position: "relative",
      }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <div style={{
          position: "absolute",
          inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          background: "rgba(255,255,255,0.02)",
          border: `1px solid ${project.color}40`,
          borderRadius: "20px",
          padding: "32px",
          backdropFilter: "blur(10px)",
          boxShadow: hovered
            ? `0 0 40px ${project.glowColor}, 0 0 80px ${project.glowColor}40`
            : `0 0 20px ${project.glowColor}30`,
          transition: "box-shadow 0.3s ease",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}>
          {/* Top glow line */}
          <div style={{
            position: "absolute", top: 0, left: "15%", right: "15%",
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          }} />

          {/* Icon */}
          <div style={{
            fontSize: "44px",
            marginBottom: "16px",
            filter: `drop-shadow(0 0 10px ${project.color})`,
          }}>{project.icon}</div>

          {/* Status badge */}
          <div style={{
            display: "inline-block",
            padding: "3px 10px",
            borderRadius: "20px",
            border: `1px solid ${project.color}60`,
            color: project.color,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            letterSpacing: "1px",
            marginBottom: "12px",
            background: `${project.color}10`,
            width: "fit-content",
          }}>{project.status}</div>

          <h3 style={{
            fontFamily: "Orbitron, sans-serif",
            fontSize: "16px",
            fontWeight: "700",
            color: "#E5E7EB",
            marginBottom: "6px",
          }}>{project.title}</h3>

          <p style={{
            color: project.color,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            letterSpacing: "1px",
            marginBottom: "14px",
          }}>{project.subtitle}</p>

          <p style={{
            color: "#6B7280",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            lineHeight: "1.7",
            marginBottom: "20px",
            flex: 1,
          }}>{project.description}</p>

          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.tech.slice(0, 3).map((t, i) => (
              <span key={i} style={{
                padding: "3px 10px",
                borderRadius: "20px",
                border: `1px solid ${project.color}30`,
                color: "#9CA3AF",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                background: `${project.color}08`,
              }}>{t}</span>
            ))}
          </div>

          {/* Flip hint */}
          <p style={{
            position: "absolute",
            bottom: "12px",
            right: "16px",
            color: "#374151",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "9px",
            letterSpacing: "1px",
          }}>CLICK TO FLIP ↻</p>
        </div>

        {/* BACK */}
        <div style={{
          position: "absolute",
          inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: `linear-gradient(135deg, ${project.color}15, rgba(11,15,26,0.98))`,
          border: `1px solid ${project.color}60`,
          borderRadius: "20px",
          padding: "32px",
          backdropFilter: "blur(10px)",
          boxShadow: `0 0 40px ${project.glowColor}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
          <div>
            <h3 style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "16px",
              fontWeight: "700",
              color: project.color,
              marginBottom: "20px",
            }}>{project.title}</h3>

            <p style={{
              color: "#9CA3AF",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "10px",
              letterSpacing: "3px",
              marginBottom: "12px",
            }}>TECH STACK</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{
                  padding: "5px 12px",
                  borderRadius: "8px",
                  border: `1px solid ${project.color}40`,
                  color: project.color,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  background: `${project.color}10`,
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: `1px solid ${project.color}60`,
                color: project.color,
                fontFamily: "Orbitron, sans-serif",
                fontSize: "11px",
                textDecoration: "none",
                textAlign: "center",
                background: `${project.color}10`,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => e.target.style.background = `${project.color}25`}
              onMouseLeave={e => e.target.style.background = `${project.color}10`}
            >
              GitHub →
            </a>

            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  background: `linear-gradient(90deg, ${project.color}, #06B6D4)`,
                  color: "white",
                  fontFamily: "Orbitron, sans-serif",
                  fontSize: "11px",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Live Demo ↗
              </a>
            )}

            <p
              onClick={e => { e.stopPropagation(); setFlipped(false) }}
              style={{
                color: "#4B5563",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                textAlign: "center",
                letterSpacing: "1px",
                cursor: "pointer",
                marginTop: "4px",
              }}
            >CLICK TO FLIP BACK ↻</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Projects() {
  return (
    <section
      id="projects"
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
        position: "absolute", top: "10%", left: "0%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)",
        filter: "blur(80px)", zIndex: 0
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "0%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)",
        filter: "blur(80px)", zIndex: 0
      }} />

      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "64px", position: "relative", zIndex: 1 }}
      >
        <p style={{
          color: "#06B6D4",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "12px",
          letterSpacing: "4px",
          marginBottom: "16px"
        }}>▶ PROJECTS.UNIVERSE</p>

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
            display: "inline-block"
          }}>Projects</span>
        </h2>

        <p style={{
          color: "#6B7280",
          fontFamily: "Inter, sans-serif",
          fontSize: "15px",
          maxWidth: "500px",
          margin: "0 auto",
          lineHeight: "1.7"
        }}>
          Click on any card to flip and see the tech stack + links 🚀
        </p>
      </motion.div>

      {/* Cards */}
      <div style={{
        display: "flex",
        gap: "32px",
        flexWrap: "wrap",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
      }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects