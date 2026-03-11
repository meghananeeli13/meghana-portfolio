import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const skillCategories = {
  Frontend: {
    color: "#7C3AED",
    icon: "⚛️",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "JavaScript", icon: "🟨" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
    ],
  },
  Backend: {
    color: "#06B6D4",
    icon: "🚂",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      { name: "MongoDB", icon: "🍃" },
      { name: "REST APIs", icon: "🔌" },
    ],
  },
  "ML/AI": {
    color: "#22D3EE",
    icon: "🧠",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "OpenCV", icon: "👁️" },
    ],
  },
  Tools: {
    color: "#A78BFA",
    icon: "🔧",
    skills: [
      { name: "Git", icon: "🔀" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
    ],
  },
  Languages: {
    color: "#34D399",
    icon: "⚙️",
    skills: [
      { name: "C", icon: "⚙️" },
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" },
    ],
  },
}

function OrbitSystem({ category, color, skills, activeSkill, setActiveSkill }) {
  const [angles, setAngles] = useState(
    skills.map((_, i) => (360 / skills.length) * i)
  )
  const rafRef = useRef()
  const radius = 140

  useEffect(() => {
    let last = performance.now()
    const animate = (now) => {
      const delta = now - last
      last = now
      setAngles(prev => prev.map(a => (a + delta * 0.04) % 360))
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div style={{
      position: "relative",
      width: "340px",
      height: "340px",
      flexShrink: 0,
    }}>
      {/* Orbit ring */}
      <div style={{
        position: "absolute",
        left: "50%", top: "50%",
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        border: `1px dashed ${color}30`,
        pointerEvents: "none",
      }} />

      {/* Outer glow ring */}
      <div style={{
        position: "absolute",
        left: "50%", top: "50%",
        width: `${radius * 2 + 20}px`,
        height: `${radius * 2 + 20}px`,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        border: `1px solid ${color}10`,
        pointerEvents: "none",
      }} />

      {/* Center node */}
      <motion.div
        animate={{
          boxShadow: [
            `0 0 20px ${color}40`,
            `0 0 50px ${color}60`,
            `0 0 20px ${color}40`,
          ],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "absolute",
          left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color}30, ${color}10)`,
          border: `2px solid ${color}60`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 20,
          pointerEvents: "none",
        }}
      >
        <span style={{ fontSize: "20px" }}>{skillCategories[category].icon}</span>
        <span style={{
          color: color,
          fontFamily: "Orbitron, sans-serif",
          fontSize: "8px",
          fontWeight: "700",
          letterSpacing: "0.5px",
          marginTop: "2px",
        }}>{category}</span>
      </motion.div>

      {/* Skill nodes */}
      {skills.map((skill, i) => {
        const rad = (angles[i] * Math.PI) / 180
        const x = Math.cos(rad) * radius
        const y = Math.sin(rad) * radius
        const isActive = activeSkill?.name === skill.name

        return (
          <div
            key={skill.name}
            onClick={() => setActiveSkill(isActive ? null : skill)}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "56px",
              height: "56px",
              marginLeft: "-28px",
              marginTop: "-28px",
              transform: `translate(${x}px, ${y}px)`,
              zIndex: 10,
              cursor: "pointer",
            }}
          >
            <div style={{
              width: "100%",
              height: "100%",
              borderRadius: "14px",
              background: isActive ? `${color}25` : "rgba(255,255,255,0.04)",
              border: `1px solid ${isActive ? color : color + "50"}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
              backdropFilter: "blur(10px)",
              boxShadow: isActive ? `0 0 20px ${color}60` : `0 0 8px ${color}20`,
              transition: "all 0.3s ease",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${color}20`
                e.currentTarget.style.boxShadow = `0 0 25px ${color}50`
                e.currentTarget.style.transform = "scale(1.2)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = isActive ? `${color}25` : "rgba(255,255,255,0.04)"
                e.currentTarget.style.boxShadow = isActive ? `0 0 20px ${color}60` : `0 0 8px ${color}20`
                e.currentTarget.style.transform = "scale(1)"
              }}
            >
              <span style={{ fontSize: "16px" }}>{skill.icon}</span>
              <span style={{
                color: isActive ? color : "#9CA3AF",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "7px",
                textAlign: "center",
                lineHeight: "1.2",
                transition: "color 0.3s",
              }}>{skill.name}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const [activeSkill, setActiveSkill] = useState(null)
  const currentCategory = skillCategories[activeCategory]
  const color = currentCategory.color

  return (
    <section
      id="skills"
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
      {/* Nebula glow */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: `radial-gradient(circle, ${color}12, transparent 70%)`,
        filter: "blur(80px)", zIndex: 0,
        transition: "background 0.5s ease",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "5%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)",
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
          marginBottom: "48px",
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
        }}>▶ SKILLS.GALAXY</p>
        <h2 style={{
          fontFamily: "Orbitron, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: "900",
          color: "#E5E7EB",
        }}>
          My{" "}
          <span style={{
            background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
          }}>Skills</span>
        </h2>
      </motion.div>

      {/* Main layout */}
      <div style={{
        display: "flex",
        gap: "48px",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        width: "100%",
        maxWidth: "1100px",
      }}>

        {/* LEFT — Category buttons */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            minWidth: "180px",
          }}
        >
          <p style={{
            color: "#4B5563",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            letterSpacing: "3px",
            marginBottom: "8px",
          }}>SELECT CATEGORY</p>

          {Object.entries(skillCategories).map(([cat, data]) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setActiveSkill(null) }}
              style={{
                padding: "12px 18px",
                borderRadius: "10px",
                border: `1px solid ${activeCategory === cat ? data.color : data.color + "25"}`,
                background: activeCategory === cat ? `${data.color}15` : "rgba(255,255,255,0.02)",
                color: activeCategory === cat ? data.color : "#6B7280",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "12px",
                cursor: "pointer",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s",
                boxShadow: activeCategory === cat ? `0 0 20px ${data.color}20` : "none",
              }}
              onMouseEnter={e => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = `${data.color}50`
                  e.currentTarget.style.color = data.color
                }
              }}
              onMouseLeave={e => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = `${data.color}25`
                  e.currentTarget.style.color = "#6B7280"
                }
              }}
            >
              <div style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: data.color,
                boxShadow: activeCategory === cat ? `0 0 8px ${data.color}` : "none",
                flexShrink: 0,
                transition: "all 0.3s",
              }} />
              {cat}
              <span style={{
                marginLeft: "auto",
                fontSize: "10px",
                color: activeCategory === cat ? data.color : "#374151",
              }}>
                {data.skills.length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* CENTER — Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <OrbitSystem
            key={activeCategory}
            category={activeCategory}
            color={color}
            skills={currentCategory.skills}
            activeSkill={activeSkill}
            setActiveSkill={setActiveSkill}
          />
        </motion.div>

        {/* RIGHT — Skill detail */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ minWidth: "180px", maxWidth: "200px" }}
        >
          <AnimatePresence mode="wait">
            {activeSkill ? (
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  background: `${color}10`,
                  border: `1px solid ${color}40`,
                  boxShadow: `0 0 30px ${color}20`,
                  marginBottom: "16px",
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>
                  {activeSkill.icon}
                </div>
                <h3 style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontSize: "14px",
                  color: color,
                  marginBottom: "6px",
                }}>{activeSkill.name}</h3>
                <p style={{
                  color: "#6B7280",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                }}>{activeCategory}</p>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                <p style={{
                  color: "#374151",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  lineHeight: "1.8",
                }}>Click any orbiting node to see details ✨</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skill tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {currentCategory.skills.map((skill, i) => (
              <span
                key={i}
                onClick={() => setActiveSkill(activeSkill?.name === skill.name ? null : skill)}
                style={{
                  padding: "4px 10px",
                  borderRadius: "20px",
                  border: `1px solid ${color}30`,
                  color: activeSkill?.name === skill.name ? color : "#6B7280",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "10px",
                  cursor: "pointer",
                  background: activeSkill?.name === skill.name ? `${color}15` : "transparent",
                  transition: "all 0.2s",
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills