import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

const COMMANDS = {
  help: {
    output: `Available commands:
  help      → show all commands
  about     → who is Meghana?
  contact   → get contact details
  github    → open GitHub profile
  linkedin  → open LinkedIn profile
  email     → send an email
  projects  → view projects
  secret    → 🤫
  clear     → clear terminal`,
  },
  about: {
    output: `> Neeli Meghana
> 3rd year B.Tech CSE @ B V Raju Institute of Technology
> Full-Stack Developer + ML Enthusiast
> IEEE Published Author
> Currently building ColabHub 🚀`,
  },
  contact: {
    output: `> Email    : meghananeeli1385@gmail.com
> GitHub   : https://github.com/meghananeeli13
> LinkedIn : https://linkedin.com/in/meghana`,
  },
  github: {
    output: `> Opening GitHub profile...
> github.com/meghananeeli13`,
    action: () => window.open("https://github.com/meghananeeli13", "_blank"),
  },
  linkedin: {
    output: `> Opening LinkedIn profile...
> linkedin.com/in/meghana`,
    action: () => window.open("https://linkedin.com/in/neeli-meghana-02b2a032a", "_blank"),
  },
  email: {
    output: `> Opening email client...
> meghananeeli1385@gmail.com`,
    action: () => window.open("mailto:meghananeeli1385@gmail.com", "_blank"),
  },

  projects: {
    output: `> 1. ColabHub — Student Collaboration Platform
>    Tech: React, Node.js, MongoDB
>
> 2. Pulmonary Nodule Detection — IEEE Published
>    Tech: Python, TensorFlow, YOLOv7
>
> 3. Hospital Management System
>    Tech: C, File Handling`,
  },
  secret: {
    output: `> 🚀 ACCESS GRANTED
>
> "The best way to predict the future
>  is to create it."
>
> Thanks for exploring my universe! 🌌
> You found the easter egg! 🥚✨`,
  },
  clear: {
    output: null,
    clear: true,
  },
}

const WELCOME_MESSAGE = [
  "╔══════════════════════════════════════╗",
  "║    MEGHANA'S CONTACT TERMINAL v1.0  ║",
  "╚══════════════════════════════════════╝",
  "",
  "> Initializing contact module...",
  "> Connection established ✓",
  "> Type 'help' to see all commands",
  "",
]

const contactCards = [
  {
    icon: "📧",
    label: "Email",
    value: "meghananeeli1385@gmail.com",
    color: "#7C3AED",
    action: () => window.open("mailto:meghananeeli1385@gmail.com", "_blank"),
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/meghananeeli13",
    color: "#06B6D4",
    action: () => window.open("", "_blank"),
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/meghana",
    color: "#22D3EE",
    action: () => window.open("https://linkedin.com/in/neeli-meghana-02b2a032a", "_blank"),
  },
 
]

function Contact() {
  const [history, setHistory] = useState(
    WELCOME_MESSAGE.map((line) => ({ type: "output", text: line }))
  )
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const bottomRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    const newHistory = [
      ...history,
      { type: "input", text: `meghana@portfolio:~$ ${cmd}` },
    ]

    if (!trimmed) {
      setHistory(newHistory)
      return
    }

    const command = COMMANDS[trimmed]

    if (command) {
      if (command.clear) {
        setHistory(
          WELCOME_MESSAGE.map((line) => ({ type: "output", text: line }))
        )
      } else {
        const lines = command.output.split("\n").map((line) => ({
          type: "output",
          text: line,
        }))
        setHistory([...newHistory, ...lines, { type: "output", text: "" }])
        if (command.action) command.action()
      }
    } else {
      setHistory([
        ...newHistory,
        {
          type: "error",
          text: `> Command not found: '${trimmed}'. Type 'help' for available commands.`,
        },
        { type: "output", text: "" },
      ])
    }

    setCommandHistory((prev) => [trimmed, ...prev])
    setHistoryIndex(-1)
    setInput("")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1)
      setHistoryIndex(newIndex)
      setInput(commandHistory[newIndex] || "")
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const newIndex = Math.max(historyIndex - 1, -1)
      setHistoryIndex(newIndex)
      setInput(newIndex === -1 ? "" : commandHistory[newIndex])
    }
  }

  return (
    <section
      id="contact"
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
        position: "absolute", top: "20%", left: "5%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)",
        filter: "blur(80px)", zIndex: 0
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "5%",
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
        style={{
          textAlign: "center",
          marginBottom: "48px",
          position: "relative",
          zIndex: 1
        }}
      >
        <p style={{
          color: "#06B6D4",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "12px",
          letterSpacing: "4px",
          marginBottom: "16px"
        }}>▶ CONTACT.TERMINAL</p>

        <h2 style={{
          fontFamily: "Orbitron, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: "900",
          color: "#E5E7EB",
        }}>
          Get In{" "}
          <span style={{
            background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block"
          }}>Touch</span>
        </h2>
      </motion.div>

      {/* Main content — Terminal + Cards */}
      <div style={{
        display: "flex",
        gap: "32px",
        width: "100%",
        maxWidth: "1100px",
        position: "relative",
        zIndex: 1,
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}>

        {/* LEFT — Terminal */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ flex: "1.5", minWidth: "320px" }}
        >
          <div style={{
            background: "rgba(0,0,0,0.7)",
            border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 0 60px rgba(124,58,237,0.15)",
          }}>
            {/* Terminal header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 20px",
              background: "rgba(255,255,255,0.03)",
              borderBottom: "1px solid rgba(124,58,237,0.2)",
            }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 6px #ef4444" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b", boxShadow: "0 0 6px #f59e0b" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
              <span style={{
                marginLeft: "12px",
                color: "#4B5563",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "12px",
              }}>meghana@portfolio — contact-terminal</span>
            </div>

            {/* Terminal body */}
            <div
              onClick={() => inputRef.current?.focus()}
              style={{
                padding: "20px",
                height: "380px",
                overflowY: "auto",
                cursor: "text",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "13px",
                lineHeight: "1.8",
              }}
            >
              {history.map((line, i) => (
                <div key={i} style={{
                  color: line.type === "input"
                    ? "#22D3EE"
                    : line.type === "error"
                    ? "#ef4444"
                    : "#9CA3AF",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}>
                  {line.text}
                </div>
              ))}

              {/* Input line */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                <span style={{ color: "#22D3EE", flexShrink: 0 }}>
                  meghana@portfolio:~$
                </span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#E5E7EB",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "13px",
                    flex: 1,
                    caretColor: "#22D3EE",
                  }}
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </div>

          <p style={{
            marginTop: "12px",
            color: "#4B5563",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            letterSpacing: "2px",
          }}>
            💡 TRY: help · contact · github · secret
          </p>
        </motion.div>

        {/* RIGHT — Quick Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            flex: "1",
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <p style={{
            color: "#06B6D4",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            letterSpacing: "3px",
            marginBottom: "8px",
          }}>▶ QUICK CONNECT</p>

          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ x: 8, scale: 1.02 }}
              onClick={card.action}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "18px 20px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${card.color}30`,
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: `0 0 20px ${card.color}10`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${card.color}10`
                e.currentTarget.style.borderColor = `${card.color}60`
                e.currentTarget.style.boxShadow = `0 0 30px ${card.color}25`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.02)"
                e.currentTarget.style.borderColor = `${card.color}30`
                e.currentTarget.style.boxShadow = `0 0 20px ${card.color}10`
              }}
            >
              {/* Icon */}
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: `${card.color}15`,
                border: `1px solid ${card.color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                flexShrink: 0,
              }}>
                {card.icon}
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  color: "#6B7280",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  marginBottom: "4px",
                }}>{card.label}</p>
                <p style={{
                  color: "#E5E7EB",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: "500",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}>{card.value}</p>
              </div>

              {/* Arrow */}
              <span style={{
                color: card.color,
                fontSize: "16px",
                flexShrink: 0,
              }}>→</span>
            </motion.div>
          ))}

          {/* Available for hire badge */}
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              marginTop: "8px",
              padding: "14px 20px",
              borderRadius: "14px",
              background: "rgba(34,197,94,0.05)",
              border: "1px solid rgba(34,197,94,0.3)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 8px #22c55e",
              flexShrink: 0,
            }} />
            <p style={{
              color: "#22c55e",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              letterSpacing: "1px",
            }}>Available for internships & opportunities</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact