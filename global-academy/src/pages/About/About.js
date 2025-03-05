import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./About.css";
import QueryForm from "../../components/QueryForm/QueryForm";
import Footer from "../../components/Footer/Footer";

const About = () => {
    const location = useLocation(); // Hook to get the current path

    const menuOptions = [
        { name: "Overview", link: "overview" },
        { name: "Administrative Team", link: "administrative-team" },
        { name: "Alumni", link: "alumni" },
        { name: "Board of Education", link: "board-of-education" },
        { name: "School Communications", link: "school-communications" },
        { name: "School Documents", link: "school-documents" },
        { name: "Employment", link: "employment" },
        { name: "News", link: "news" },
        { name: "Staff Directory", link: "staff-directory" },
        { name: "Visit Us", link: "visit-us" },
    ];
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isAboutPage = location.pathname === "/about"; // Check if on the /about page
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarOpen && !event.target.closest(".about-sidebar") && !event.target.closest(".sidebar-toggle")) {
                setClosing(true); // Start closing animation
                setTimeout(() => {
                    setSidebarOpen(false);
                    setClosing(false);
                }, 600); // Slower close (matches 0.6s CSS transition)
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [sidebarOpen]);

    return (
        <div>
            <div className="about-container">
                {/* Left Section */}
                <div className="about-content">
                    {isAboutPage ? (
                        <div className="about-overview">
                            <h1>Global Academy</h1>
                            <p>At Global Academy, secondary education has been defined for the 21st century. Designed to cultivate critical thinkers, innovators, and compassionate leaders, the  school blends academic excellence with cutting-edge technology like AI and coding, character development, and real-world applications.</p>
                            <p>The curriculum integrates the best of traditional learning with modern approaches, emphasizing Science (Medical and Non-Medical), commerce and humanities. Through hands-on projects, digital learning, and collaborative problem-solving, the school empowers students to explore their passions and develop future-ready skills. The highly qualified teachers serve as mentors, fostering creativity, resilience, and a love for lifelong learning.</p>
                            <p>Beyond academics, Global Academy prioritizes holistic development. The vibrant extracurricular programs—ranging from robotics and entrepreneurship to music, sports inclusive of Kabaddi Academy, Table -Tennis Academy, Badminton Academy and Chess Academy, and much more along with community service—help students discover their unique talents and build confidence. The Global Academy emphasizes values such as integrity, responsibility, and global citizenship, ensuring its pass outs are not just academically accomplished but also socially responsible individuals.</p>
                            <p>The school also integrates class room studies with Coaching for various competitive entrance examinations like JEE, NEET, NDA, IPMAT, CLAT, CPT, HAS and IAS and sports as mentioned in the safe hands of teachers and coaches of National and international reputation.</p>
                            <p>With state-of-the-art facilities, a safe and inclusive environment, and a commitment to personalized learning, Global Academy Public School stands as a beacon of educational excellence.The school prepares  students not just for exams, but for life. Join us and be part of a school that shapes the leaders and changemakers of tomorrow.</p>
                            <p style={{ fontWeight: '500' }}>Navigate the sidebar to learn more</p>
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </div>
                {/* Mobile Sidebar Toggle Button */}
                <div
                    className={`sidebar-toggle ${sidebarOpen ? "sidebar-toggle-open" : ""}`}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <span className={`arrow ${sidebarOpen ? "flip" : ""}`}>&#x276E;</span>
                </div>
                {/* Right Sidebar */}
                <div className={`about-sidebar ${sidebarOpen ? "sidebar-open" : ""} ${closing ? "sidebar-closing" : ""}`}>
                    <h2 >About Us</h2>
                    <ul>
                        {menuOptions.map((option, index) => {
                            const isActive = location.pathname.includes(option.link); // Check if this link is active
                            return (
                                <li key={index} onClick={() => setSidebarOpen(false)}>
                                    <Link
                                        to={`/about/${option.link}`}
                                        className={`sidebar-link ${isActive ? "active" : ""}`} // Add 'active' class if this tab is active
                                    >
                                        {option.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <Footer />
            <QueryForm />
        </div>
    );
};

export default About;
