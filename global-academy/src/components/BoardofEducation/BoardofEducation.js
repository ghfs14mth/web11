import React, { useState } from "react";
import "./BoardofEducation.css";
import BOE from '../../assets/BOE.jpg';
import policyIcon from '../../assets/policy-icon.png';
import visionIcon from '../../assets/vision-icon.png';
import { Link} from "react-router-dom";
const BoardOfEducation = () => {
    const [activeTab, setActiveTab] = useState("board-members");

    const tabContent = {
        "board-members": (
            <div className="board-detailed-content">
                <h3>District 125 Board of Education</h3>
                <p>
                    Our Board Members are leaders who bring a wealth of experience and expertise to ensure the school operates efficiently and effectively.
                </p>
            </div>
        ),
        "meeting-agendas": (
            <div className="board-detailed-content">
                <h3>Meeting Agendas/Minutes/Bulletin</h3>
                <p>
                    Stay informed with our comprehensive meeting agendas, minutes, and bulletin updates. Transparency and communication are at the heart of our operations.
                </p>
            </div>
        ),
        "stay-in-touch": (
            <div className="board-detailed-content">
                <h3>Stay in Touch</h3>
                <p>
                    Connect with us to share your thoughts, suggestions, or concerns. Your input is vital to our continued growth and success.
                </p>
            </div>
        ),
    };

    return (
        <div className="board-education-container">
            {/* Title */}
            <h2 className="board-title">Board of Education</h2>

            {/* Image Section */}
            <div className="board-image-container">
                <img
                    src={BOE} // Replace with your actual boardroom image URL
                    alt="Boardroom"
                    className="board-image"
                />
            </div>

            {/* General Text */}
            <div className="board-description">
                <p>
                    The Board of Education at Global Academy plays a pivotal role in shaping the future of the school.
                    Our dedicated members work tirelessly to set policies and ensure the highest standards of education
                    and management. Through their efforts, we maintain a safe, inclusive, and forward-thinking environment
                    for our students and staff.
                </p>
            </div>
            {/* Icon Section */}
            <div className="board-icon-section">
                <div className="icon-card">
                    <div className="icon">
                        <img
                            src={policyIcon} // Replace with your actual Policy Manual icon URL
                            alt="Policy Manual"
                        />
                    </div>
                    <Link to="/privacy-policy" className="icon-link">Policy Manual</Link>
                </div>
                <div className="icon-card">
                    <div className="icon">
                        <img
                            src={visionIcon} // Replace with your actual Vision Statement icon URL
                            alt="Vision Statement"
                        />
                    </div>
                    <Link to="/vision-statement" className="icon-link">Vision Statement</Link>
                </div>
            </div>

            {/* Tab Section */}
            <div className="board-tabs">
                <button
                    className={`tab-button ${activeTab === "board-members" ? "active" : ""}`}
                    onClick={() => setActiveTab("board-members")}
                >
                    Board Members
                </button>
                <button
                    className={`tab-button ${activeTab === "meeting-agendas" ? "active" : ""}`}
                    onClick={() => setActiveTab("meeting-agendas")}
                >
                    Meeting Agendas/Minutes/Bulletin
                </button>
                <button
                    className={`tab-button ${activeTab === "stay-in-touch" ? "active" : ""}`}
                    onClick={() => setActiveTab("stay-in-touch")}
                >
                    Stay in Touch
                </button>
            </div>

            {/* Dynamic Content Based on Active Tab */}
            {tabContent[activeTab]}
        </div>
    );
};

export default BoardOfEducation;
