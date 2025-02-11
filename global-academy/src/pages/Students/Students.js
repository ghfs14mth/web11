import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Students.css";
import QueryForm from "../../components/QueryForm/QueryForm";
import StudentLogin from "../../components/StudentLogin/StudentLogin";
const Students = () => {
    const location = useLocation();

    const menuOptions = [
        { name: "Timetable", link: "timetable" },
        { name: "Handbook", link: "handbook" },
        { name: "Learning", link: "learning" },
        { name: "Council", link: "council" },
    ];

    const isStudentsPage = location.pathname === "/students";

    return (
        <div>
            <div className="students-container">
                {/* Left Section */}
                <div className="students-content">
                    {isStudentsPage ? (
                        <div className="students-overview">
                            <StudentLogin />
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="students-sidebar">
                    <h2 style={{ marginLeft: "10px", color: "#fff" }}>
                        Students
                    </h2>
                    <ul>
                        {menuOptions.map((option, index) => {
                            const isActive = location.pathname.includes(option.link);
                            return (
                                <li key={index}>
                                    <Link
                                        to={`/students/${option.link}`}
                                        className={`sidebar-link ${isActive ? "active" : ""
                                            }`}
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

export default Students;
