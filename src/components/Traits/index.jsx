import { motion } from "framer-motion"

const traits = [
  {
    icon: "🔄",
    title: "Adaptive",
    desc: "Quick to learn and adapt to new technologies and environments",
    color: "#7C3AED",
  },
  {
    icon: "🎨",
    title: "Creative",
    desc: "Brings unique and innovative approaches to problem solving",
    color: "#06B6D4",
  },
  {
    icon: "💪",
    title: "Resilient",
    desc: "Handles pressure, setbacks and challenges with a growth mindset",
    color: "#22D3EE",
  },
  {
    icon: "🔧",
    title: "Resourceful",
    desc: "Makes the most of available tools to deliver effective solutions",
    color: "#A78BFA",
  },
  {
    icon: "🤝",
    title: "Collaborative",
    desc: "Thrives in team environments and values open communication",
    color: "#34D399",
  },
  {
    icon: "🧠",
    title: "Analytical",
    desc: "Breaks down complex problems using data-driven thinking",
    color: "#F472B6",
  },
]

function Traits() {
  return (
    <section
      style={{
        backgroundColor: "#0B0F1A",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Nebula glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "200px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)",
        filter: "blur(60px)", zIndex: 0,
      }} />

      {/* Top divider line */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(6,182,212,0.4), transparent)",
      }} />

      {/* Bottom divider line */}
      <div style={{
        position: "absolute", bottom: 0, left: "10%", right: "10%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), rgba(124,58,237,0.4), transparent)",
      }} />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
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
          marginBottom: "12px",
        }}>▶ CORE.TRAITS</p>

        <h2 style={{
          fontFamily: "Orbitron, sans-serif",
          fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
          fontWeight: "900",
          color: "#E5E7EB",
        }}>
          What Drives{" "}
          <span style={{
            background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
          }}>Me</span>
        </h2>
      </motion.div>

      {/* Trait cards */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}>
        {traits.map((trait, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -8, 0] }}
            whileHover={{ scale: 1.05, y: -12 }}
            style={{
              width: "160px",
              padding: "28px 20px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${trait.color}30`,
              backdropFilter: "blur(10px)",
              textAlign: "center",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = `${trait.color}10`
              e.currentTarget.style.borderColor = `${trait.color}60`
              e.currentTarget.style.boxShadow = `0 0 30px ${trait.color}25`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.02)"
              e.currentTarget.style.borderColor = `${trait.color}30`
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            {/* Top glow line */}
            <div style={{
              position: "absolute", top: 0, left: "20%", right: "20%",
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${trait.color}, transparent)`,
            }} />

            {/* Floating animation per card with different duration */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3 + i * 0.4,
                ease: "easeInOut",
              }}
            >
              {/* Icon */}
              <div style={{
                fontSize: "36px",
                marginBottom: "14px",
                filter: `drop-shadow(0 0 8px ${trait.color})`,
              }}>
                {trait.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: "13px",
                fontWeight: "700",
                color: trait.color,
                marginBottom: "10px",
                letterSpacing: "0.5px",
              }}>
                {trait.title}
              </h3>

              {/* Desc */}
              <p style={{
                color: "#6B7280",
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                lineHeight: "1.7",
              }}>
                {trait.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Traits