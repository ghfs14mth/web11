import React, { useState } from "react";
import "./AdministrativeTeam.css";
import OneImg from '../../assets/Member1.png';
import TwoImg from '../../assets/Member2.jpg';
import ThreeImg from '../../assets/Member3.png';
import FourImg from '../../assets/Member4.png';
import { Link } from "react-router-dom";
const AdministrativeTeam = () => {
    // Example data for team members
    const [selectedTab, setSelectedTab] = useState("district-office");

    const tabs = [
        { id: "district-office", label: "District Office" },
        { id: "high-school", label: "High School" },
    ];

    const teamMembers = {
        "district-office": [
            {
                name: "Dr. Vishwa Jeet Bansal",
                title: "Director",
                email: "vishwajeet224@gmail.com",
                phone: "+91 94184-86224",
                image: OneImg,
                link: "#",
            },
            {
                name: "Mrs. Vandana Bansal",
                title: "Principal",
                email: "vandanabansal1099@gmail.com",
                phone: "+91 82199-69112",
                image: TwoImg,
                link: "#",
            },
            {
                name: "Mrs. Tabssum Ansari",
                title: "Head Clerk/ Office Manager",
                email: "tabssum1985@gmail.com",
                phone: "+91 88978-56772",
                image: ThreeImg,
                link: "#",
            },
            {
                name: "Mrs. Kamlesh Tomar",
                title: "Sports Teach/ Office Manager",
                email: "kamlesh116@gmail.com",
                phone: "+91 88945-98770",
                image: FourImg,
                link: "#",
            },
        ],
        "high-school": [
            {
                name: "Mrs. Tabssum Ansari",
                title: "Head Clerk/ Office Manager",
                email: "tabssum1985@gmail.com",
                phone: "+91 88978-56772",
                image: ThreeImg,
                link: "#",
            },
            {
                name: "Mrs. Kamlesh Tomar",
                title: "Sports Teach/ Office Manager",
                email: "kamlesh116@gmail.com",
                phone: "+91 88945-98770",
                image: FourImg,
                link: "#",
            }
        ]
    };

    return (
        <div className="administrative-team">
            <h2 className="section-title">Administrative Team</h2>
            <p className="section-description">
                Students, families, and community members should feel they have access to every resource available, including our leadership team. Our talented and dedicated administrators are committed to assisting you. You can learn more about each administrator by reading their profiles below.
            </p>

            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-button ${selectedTab === tab.id ? "active" : ""}`}
                        onClick={() => setSelectedTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="team-members">
                {teamMembers[selectedTab].map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.image} alt={member.name} />
                        <div className="member-details">
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                            <p>{member.email}</p>
                            <p>{member.phone}</p>
                            <Link to="/about/home">Learn More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdministrativeTeam;
