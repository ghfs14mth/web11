import React from "react";
import "./BannerSection.css";
import bannerImage from "../../assets/banner-image.jpg"; // Place your image in the `src/assets/` folder

const BannerSection = () => {
  return (
    <div
      className="banner-section"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="gradient-overlay"></div> {/* Gradient overlay */}
      <div className="overlay-text">
        <span>Curiosity</span>
        <span>•</span>
        <span>Character</span>
        <span>•</span>
        <span>Courage</span>
        <span>•</span>
        <span>Compassion</span>
      </div>
    </div>
  );
};

export default BannerSection;
