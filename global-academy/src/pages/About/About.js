import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./About.css";
import QueryForm from "../../components/QueryForm/QueryForm";

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

    const isAboutPage = location.pathname === "/about"; // Check if on the /about page

    return (
        <div>
            <div className="about-container">
                {/* Left Section */}
                <div className="about-content">
                    {isAboutPage ? (
                        <div className="about-overview">
                            <h1>About Global Academy</h1>
                            <p>
                                Welcome to Global Academy, a place where education meets excellence. At Global Academy, we believe in nurturing the minds of tomorrow by providing a holistic and inclusive learning environment that encourages curiosity, creativity, and critical thinking.

                                Our mission is to empower every student with the knowledge, skills, and values needed to succeed in an ever-changing world. We take pride in offering a comprehensive curriculum that balances academic rigor with extracurricular opportunities, fostering personal growth and lifelong learning.</p>

                            <p>At Global Academy, every student is valued and supported by a dedicated team of educators and staff who are committed to their success. Our state-of-the-art facilities and diverse programs ensure that students can explore their interests, develop their talents, and build strong foundations for their future.

                                Whether it’s in the classroom, on the stage, or on the playing field, Global Academy provides a safe and inspiring space where every individual is encouraged to reach their full potential. Together, we strive to create a community that celebrates diversity, respects individuality, and builds strong character.

                                Join us on this journey of discovery and growth. At Global Academy, we are not just preparing students for the next grade level—we are preparing them for life.
                            </p>
                            <p style={{ fontWeight: '500' }}>Navigate the sidebar to learn more</p>
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="about-sidebar">
                    <h2 style={{ marginLeft: "10px", color: '#fff' }}>About Us</h2>
                    <ul>
                        {menuOptions.map((option, index) => {
                            const isActive = location.pathname.includes(option.link); // Check if this link is active
                            return (
                                <li key={index}>
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
            <div className="home-page-footer">
                <div className="footer-links">
                    <Link to={`/privacy-policy`}>Privacy Policy</Link>
                    <Link to={`/about/visit-us`}>Site Map</Link>
                    <Link to={`/accessibility`}>Accessibility</Link>
                </div>
                <div className="footer-powered">
                    <span>Powered by GHFS</span>
                </div>
                <div className="footer-language">
                    <select aria-label="Select language">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                    </select>
                </div>
            </div>
            <QueryForm />
        </div>
    );
};

export default About;
