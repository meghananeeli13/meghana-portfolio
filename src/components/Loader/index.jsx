import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const lines = [
  "Initializing portfolio...",
  "Loading developer profile...",
  "Rendering galaxy...",
  "Ready.",
]

function Loader({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (currentLine < lines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1)
      }, 1500)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setVisible(false)
        setTimeout(onComplete, 1000)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [currentLine])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#0B0F1A" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Glowing orb */}
          <div className="mb-8 w-16 h-16 rounded-full"
            style={{
              background: "radial-gradient(circle, #7C3AED, #06B6D4)",
              boxShadow: "0 0 40px #7C3AED, 0 0 80px #06B6D4",
              animation: "pulse 2s infinite"
            }}
          />

          {/* Terminal lines */}
          <div className="font-mono text-left w-80">
            {lines.slice(0, currentLine + 1).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  color: i === currentLine ? "#22D3EE" : "#6B7280",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "14px",
                  marginBottom: "8px"
                }}
              >
                {i === currentLine ? "▶ " : "✓ "}{line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader