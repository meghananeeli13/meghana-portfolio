import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: scrolled ? "rgba(11, 15, 26, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(6, 182, 212, 0.1)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        style={{
          fontFamily: "Orbitron, sans-serif",
          fontSize: "20px",
          fontWeight: "900",
          background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          cursor: "pointer",
        }}
      >
        MN.dev
      </motion.div>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {navLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            style={{
              color: "#9CA3AF",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "13px",
              textDecoration: "none",
              letterSpacing: "1px",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = "#22D3EE"}
            onMouseLeave={e => e.target.style.color = "#9CA3AF"}
          >
            {link.label}
          </motion.a>
        ))}

        {/* Hire Me button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          style={{
            padding: "8px 20px",
            borderRadius: "6px",
            background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
            color: "white",
            fontFamily: "Orbitron, sans-serif",
            fontSize: "11px",
            textDecoration: "none",
            boxShadow: "0 0 15px rgba(124,58,237,0.4)",
          }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  )
}

export default Navbar