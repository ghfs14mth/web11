import React from "react";
import { motion } from "framer-motion";

const aiFeatures = [
  { title: "🤖 AI Tutors", description: "AI chatbots answer queries instantly!", color: "#FFD700" },
  { title: "🧮 Smart Math Coach", description: "AI adapts math problems for students.", color: "#FF5733" },
  { title: "💻 AI Coding Helper", description: "AI suggests fixes & coding solutions!", color: "#3498db" },
  { title: "🎨 AI Creativity Lab", description: "Create art, music & stories with AI.", color: "#9b59b6" },
  { title: "📚 AI Learning Paths", description: "AI personalizes lessons for students.", color: "#2ecc71" },
];

export default function AICodingHub() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        🚀 AI is Making <span style={{ color: "#00b4d8" }}>Learning Fun!</span>
      </h2>
      <p style={styles.subtext}>Explore AI-powered learning at Global Academy.</p>

      <div style={styles.grid}>
        {aiFeatures.map((feature, index) => (
          <motion.div
            key={index}
            style={{ ...styles.card, backgroundColor: feature.color }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.2 }}
          >
            <h3 style={styles.cardTitle}>{feature.title}</h3>
            <p style={styles.cardText}>{feature.description}</p>
          </motion.div>
        ))}
      </div>
      <p style={styles.subtext}>Empowering students with innovation.</p>
    </div>
  );
}

// 🎨 Optimized CSS-in-JS Styles
const styles = {
  container: {
    padding: "30px 15px 50px",
    textAlign: "center",
    background: "white",
    color: "#333",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "14px",
    marginBottom: "25px",
    color: "#555",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
    maxWidth: "750px",
    margin: "0 auto",
    marginBottom: "40px"
  },
  card: {
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)",
    textAlign: "center",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  cardText: {
    fontSize: "12px",
    marginTop: "5px",
  },
};
