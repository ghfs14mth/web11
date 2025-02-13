import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Parents.css";
import QueryForm from "../../components/QueryForm/QueryForm";
const Parents = () => {
    const location = useLocation(); // Hook to get the current path

    const menuOptions = [
        { name: "Registration", link: "registration" },
        { name: "Notices", link: "notices" },
        { name: "Transportation", link: "transportation" },
    ];

    const isParentsPage = location.pathname === "/parents"; // Check if on the /parents page

    return (
        <div>
            <div className="parents-container">
                {/* Left Section */}
                <div className="parents-content">
                    {isParentsPage ? (
                        <div className="parents-overview">
                            <h1>Welcome to the Parents' Section</h1>
                            <p>
                                Here you'll find all the resources and information you need to stay updated on your child's education and school activities.
                            </p>
                            <p style={{ fontWeight: '500' }}>Navigate the sidebar to explore more options.</p>
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="parents-sidebar">
                    <h2 style={{ marginLeft: "10px", color: '#fff' }}>Parents</h2>
                    <ul>
                        {menuOptions.map((option, index) => {
                            const isActive = location.pathname.includes(option.link); // Check if this link is active
                            return (
                                <li key={index}>
                                    <Link
                                        to={`/parents/${option.link}`}
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

export default Parents;
