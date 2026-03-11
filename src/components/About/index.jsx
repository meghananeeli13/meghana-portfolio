import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0B0F1A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Space background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Stars radius={100} depth={50} count={4000} factor={3} fade speed={0.5} />
        </Canvas>
      </div>

      {/* Nebula glow blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)",
        filter: "blur(80px)", zIndex: 1
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)",
        filter: "blur(80px)", zIndex: 1
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: "600px", height: "300px", borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(124,58,237,0.06), transparent 70%)",
        filter: "blur(100px)", zIndex: 1
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: "1100px", width: "100%",
        display: "flex", gap: "60px",
        alignItems: "center", flexWrap: "wrap",
      }}>

        {/* Left — Title + Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ flex: "1", minWidth: "260px" }}
        >
          <p style={{
            color: "#06B6D4",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "12px",
            letterSpacing: "4px",
            marginBottom: "16px"
          }}>▶ SYSTEM.PROFILE</p>

          <h2 style={{
            fontFamily: "Orbitron, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "900",
            color: "#E5E7EB",
            lineHeight: "1.2",
            marginBottom: "40px"
          }}>
            About{" "}
            <span style={{
              background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block"
            }}>Me</span>
          </h2>

          {/* Floating stat orbs */}
          {[
            { label: "CGPA", value: "9.3", color: "#7C3AED" },
            { label: "Leetcode rating", value: "1600+", color: "#06B6D4" },
            { label: "HackerRank", value: "5★ Python", color: "#22D3EE" },
            { label: "Publication", value: "IEEE ✓", color: "#7C3AED" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ x: 10, scale: 1.02 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
                padding: "12px 20px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${stat.color}30`,
                cursor: "default",
                transition: "all 0.3s",
              }}
            >
              <div style={{
                width: "8px", height: "8px",
                borderRadius: "50%",
                backgroundColor: stat.color,
                boxShadow: `0 0 10px ${stat.color}`,
                flexShrink: 0,
              }} />
              <span style={{
                color: "#6B7280",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "12px", flex: 1
              }}>{stat.label}</span>
              <span style={{
                color: stat.color,
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "13px",
                fontWeight: "700"
              }}>{stat.value}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Right — Floating Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 1,
            delay: 0.3,
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
          style={{
            flex: "1.5",
            minWidth: "320px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(124,58,237,0.25)",
            borderRadius: "24px",
            padding: "40px",
            backdropFilter: "blur(20px)",
            boxShadow: `
              0 0 60px rgba(124,58,237,0.12),
              0 0 120px rgba(6,182,212,0.06),
              inset 0 0 60px rgba(124,58,237,0.03)
            `,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Card glow top border */}
          <div style={{
            position: "absolute", top: 0, left: "20%", right: "20%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #7C3AED, #06B6D4, transparent)",
          }} />

          {/* Terminal dots */}
          <div style={{
            display: "flex", alignItems: "center",
            gap: "8px", marginBottom: "28px",
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(124,58,237,0.15)"
          }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 6px #ef4444" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b", boxShadow: "0 0 6px #f59e0b" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
            <span style={{
              marginLeft: "10px",
              color: "#4B5563",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px"
            }}>meghana@universe:~ $ cat about.md</span>
          </div>

          {/* Bio */}
          <p style={{
            color: "#9CA3AF",
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            lineHeight: "1.9",
            marginBottom: "20px"
          }}>
            Hey! I'm{" "}
            <span style={{ color: "#22D3EE", fontWeight: "700" }}>Neeli Meghana</span>,
            a 3rd year B.Tech{" "}
            <span style={{ color: "#E5E7EB" }}>CSE student</span> at
            B V Raju Institute of Technology ,Narsapur.
          </p>

          <p style={{
            color: "#9CA3AF",
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            lineHeight: "1.9",
            marginBottom: "24px"
          }}>
            I’m passionate about building{" "}
<span style={{ color: "#E5E7EB" }}>modern web applications</span> and
exploring{" "}
<span style={{ color: "#22D3EE" }}>machine learning solutions</span>
 that solve real-world problems.
          </p>

          {/* Currently building */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: "14px",
              padding: "18px 20px",
              marginBottom: "28px",
            }}
          >
            <p style={{
              color: "#7C3AED",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              letterSpacing: "3px",
              marginBottom: "10px"
            }}>🚀 CURRENTLY BUILDING</p>
            <p style={{
              color: "#E5E7EB",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              lineHeight: "1.7"
            }}>
              <span style={{ color: "#22D3EE", fontWeight: "700" }}>ColabHub</span> —
              A student collaboration platform to post projects,
              find teammates, and build together.
            </p>
            <p style={{
              color: "#6B7280",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              marginTop: "8px"
            }}>React · Node.js · MongoDB · Express</p>
          </motion.div>

          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["React.js", "Node.js", "MongoDB", "Python", "TensorFlow", "JavaScript", "Express.js", "Git"].map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1, y: -2 }}
                style={{
                  padding: "5px 14px",
                  borderRadius: "20px",
                  border: "1px solid rgba(6,182,212,0.25)",
                  color: "#06B6D4",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  cursor: "default",
                  background: "rgba(6,182,212,0.05)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  e.target.style.background = "rgba(6,182,212,0.15)"
                  e.target.style.boxShadow = "0 0 10px rgba(6,182,212,0.3)"
                }}
                onMouseLeave={e => {
                  e.target.style.background = "rgba(6,182,212,0.05)"
                  e.target.style.boxShadow = "none"
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Bottom glow border */}
          <div style={{
            position: "absolute", bottom: 0, left: "20%", right: "20%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #06B6D4, #7C3AED, transparent)",
          }} />
        </motion.div>
      </div>
    </section>
  )
}

export default About