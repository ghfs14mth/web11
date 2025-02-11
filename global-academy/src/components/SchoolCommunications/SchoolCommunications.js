import React, { useState } from "react";
import "./SchoolCommunications.css";

const SchoolCommunication = () => {
  const [activeTab, setActiveTab] = useState("newsletters");

  const tabContent = {
    newsletters: (
      <div className="communication-detailed-content">
        <h3>Newsletters</h3>
        <h4>The Daily Digest</h4>
        <p>
          The Daily Digest is a daily newsletter published on school days for students and families about student life on campus. During the regular school year, it features a mixture of stories about students, club announcements, information about events on campus, and varsity sports results.
        </p>
        <p>
          During the summer months, the Daily Digest transforms into a weekly digest with information related to summer enrichment and the upcoming school year. At the beginning of the school year, the Daily Digest will resume as a daily publication.
        </p>
      </div>
    ),
    "social-media": (
      <div className="communication-detailed-content">
        <h3>Social Media</h3>
        <p>
          Stay connected with us on our official social media platforms to get the latest updates, announcements, and highlights from around the school. Follow us on Facebook, Instagram, and Twitter to stay engaged with the school community.
        </p>
      </div>
    ),
    "emergency-communications": (
      <div className="communication-detailed-content">
        <h3>Emergency Communications</h3>
        <p>
          Our emergency communication system ensures that all parents, students, and staff are informed promptly during critical situations. Notifications will be sent via email, text, and automated calls to keep everyone updated with real-time information.
        </p>
      </div>
    ),
  };

  return (
    <div className="communication-container">
      {/* Title */}
      <h2 className="communication-title">School Communication</h2>

      {/* General Description */}
      <div className="communication-description">
        <p>
          At Global Academy, we believe strong communication and community engagement are key to our mission: Success for Every Student. To that end, we have many ways for students and families to stay connected and up-to-date on everything our school has to offer.
        </p>
      </div>

      {/* Tab Section */}
      <div className="communication-tabs">
        <button
          className={`tab-button ${activeTab === "newsletters" ? "active" : ""}`}
          onClick={() => setActiveTab("newsletters")}
        >
          Newsletters
        </button>
        <button
          className={`tab-button ${activeTab === "social-media" ? "active" : ""}`}
          onClick={() => setActiveTab("social-media")}
        >
          Social Media
        </button>
        <button
          className={`tab-button ${activeTab === "emergency-communications" ? "active" : ""}`}
          onClick={() => setActiveTab("emergency-communications")}
        >
          Emergency Communications
        </button>
      </div>

      {/* Dynamic Content Based on Active Tab */}
      {tabContent[activeTab]}
    </div>
  );
};

export default SchoolCommunication;
