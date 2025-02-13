import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Academics.css";
import QueryForm from "../../components/QueryForm/QueryForm";
const Academics = () => {
    const location = useLocation(); // Hook to get the current path

    const menuOptions = [
        { name: "Calendar", link: "calendar" },
        { name: "Accreditation", link: "accreditation" },
        { name: "Exams", link: "exams" },
        { name: "Pedadogy", link: "pedagogy" },
    ];

    const isAcademicsPage = location.pathname === "/academics"; // Check if on the /academics page

    return (
        <div>
            <div className="academics-container">
                {/* Left Section */}
                <div className="academics-content">
                    {isAcademicsPage ? (
                        <div className="academics-overview">
                            <h1>Academics at Global Academy</h1>
                            <p>
                                At Global Academy, we are committed to providing top-quality education that prepares students for the challenges of the modern world.
                                Our academics program includes a balanced curriculum, advanced teaching methods, and extracurricular activities to ensure all-around development.
                            </p>
                            <p style={{ fontWeight: "500" }}>Navigate the sidebar to explore more.</p>
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="academics-sidebar">
                    <h2 style={{ marginLeft: "10px" }}>Academics</h2>
                    <ul>
                        {menuOptions.map((option, index) => {
                            const isActive = location.pathname.includes(option.link); // Check if this link is active
                            return (
                                <li key={index}>
                                    <Link
                                        to={`/academics/${option.link}`}
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
        </div >
    );
};

export default Academics;
