import React from "react";
import "./RebrandingSection.css";

const RebrandingSection = () => {
  return (
    <section className="rebranding-section">
      {/* Starry Background Overlay */}
      <div className="stars"></div>

      {/* Moving Rocket */}
      <img
        src="https://i.imgur.com/Y3HAOrv.png" /* Replace with a better rocket SVG */
        alt="Rocket"
        className="rocket"
      />

      {/* Rebranding Text (Now Floating) */}
      <div className="rebranding-text">
        <h1 className="neon-text">🚀 Future Innovators Start Here!</h1>
        <p>
          AI | Space Science | Coding | Mathematics  
          <br />
          <strong>Shaping the next-gen thinkers at GAPS!</strong>
        </p>
      </div>
    </section>
  );
};

export default RebrandingSection;
