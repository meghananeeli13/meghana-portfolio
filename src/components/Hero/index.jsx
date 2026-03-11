import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { motion } from "framer-motion"
import resume from "../../assets/Meghana_Resume.pdf"

// ⭐ Moving Stars
function MovingStars() {
  const starsRef = useRef()

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0003
      starsRef.current.rotation.x += 0.0001
    }
  })

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={7000} factor={4} fade speed={2} />
    </group>
  )
}

// ⌨️ Typewriter Hook
function useTypewriter(texts, speed = 80) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1))

        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        } else {
          setCharIndex((prev) => prev + 1)
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1))

        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
          setCharIndex(0)
        } else {
          setCharIndex((prev) => prev - 1)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  return displayText
}

function Hero() {

  const typeText = useTypewriter([
    "Full-Stack Developer",
    "Building Web Applications",
    "Crafting Collaborative Platforms",
  ])

  // 🚀 Scroll to Projects
  const scrollToProjects = () => {
    const section = document.getElementById("projects")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // 📄 View Resume
  const viewResume = () => {
    window.open(resume, "_blank")
  }

  // ⬇️ Download Resume
  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = resume
    link.download = "Meghana_Resume.pdf"
    link.click()
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0B0F1A",
        display: "flex",
        alignItems: "center",
      }}
    >

      {/* 🌌 Star Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0.6, 3], fov: 50 }}>
          <MovingStars />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 clamp(24px, 8vw, 120px)",
        }}
      >

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            color: "#06B6D4",
            fontFamily: "JetBrains Mono",
            fontSize: "13px",
            marginBottom: "16px",
            letterSpacing: "2px",
          }}
        >
          ▶ BUILDING IDEAS THROUGH CODE
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontFamily: "Orbitron",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: "900",
            color: "#E5E7EB",
            marginBottom: "16px",
          }}
        >
          Hi, I'm{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#7C3AED,#06B6D4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 25px rgba(124,58,237,0.7)",
            }}
          >
            Meghana
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: "clamp(0.9rem,1.8vw,1.1rem)",
            color: "#22D3EE",
            marginBottom: "24px",
            minHeight: "2rem",
          }}
        >
          {typeText}
          <span style={{ animation: "blink 1s infinite" }}>|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            fontFamily: "Inter",
            fontSize: "clamp(0.9rem,1.5vw,1rem)",
            color: "#9CA3AF",
            marginBottom: "40px",
            maxWidth: "520px",
            lineHeight: "1.7",
          }}
        >
          Exploring ideas through code and building collaborative web platforms.
Open to Opportunities
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >

          {/* View Projects */}
          <button
            onClick={scrollToProjects}
            style={{
              padding: "14px 32px",
              borderRadius: "10px",
              background: "linear-gradient(90deg,#7C3AED,#06B6D4)",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontFamily: "Orbitron",
              boxShadow: "0 0 25px rgba(124,58,237,0.6)",
            }}
          >
            View Projects
          </button>

          {/* View Resume */}
          <button
            onClick={viewResume}
            style={{
              padding: "14px 28px",
              borderRadius: "10px",
              border: "1px solid #06B6D4",
              background: "transparent",
              color: "#06B6D4",
              cursor: "pointer",
              fontFamily: "Orbitron",
            }}
          >
            View Resume
          </button>


        </motion.div>
      </div>

      <style>{`
        @keyframes blink {
          0%,100% {opacity:1}
          50% {opacity:0}
        }
      `}</style>
    </div>
  )
}

export default Hero