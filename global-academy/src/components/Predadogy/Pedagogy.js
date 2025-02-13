import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie-player";
import aiAnimation from "../../assets/ai-animation.json"; // AI Animated Lottie
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Pedagogy.css";

gsap.registerPlugin(ScrollTrigger);

const Pedagogy = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="pedagogy-container">
      {/* 🚀 Hero Section */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          Future-Ready Learning at <span>GAPS</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="hero-subtitle"
        >
          AI, Coding & Mathematics **shaping the innovators of tomorrow.**
        </motion.p>
        <Lottie loop animationData={aiAnimation} play className="ai-animation" />
      </section>

      {/* 🚀 Sections with Scroll Animations */}
      <div className="pedagogy-content">
        {[
          {
            title: "Experiential & Project-Based Learning",
            description: "AI-powered projects, real-world problem-solving, and hands-on learning.",
            img: "/assets/learning.svg",
          },
          {
            title: "Adaptive AI Learning Paths",
            description: "AI-driven personalized education, real-time progress tracking, and smart tutoring.",
            img: "/assets/adaptive.svg",
          },
          {
            title: "Mathematical Excellence & Olympiads",
            description: "Vedic math, Olympiad prep, and applied AI-driven statistical modeling.",
            img: "/assets/math.svg",
          },
          {
            title: "Coding, AI & Robotics",
            description: "Building future tech leaders with industry-level programming, AI projects, and deep learning.",
            img: "/assets/robotics.svg",
          },
        ].map((section, index) => (
          <section
            key={index}
            className={`scroll-section ${index % 2 === 0 ? "left" : "right"}`}
            ref={(el) => (sectionsRef.current[index] = el)}
          >
            <img src={section.img} alt={section.title} className="pedagogy-img" />
            <div className="text-box">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Pedagogy;
