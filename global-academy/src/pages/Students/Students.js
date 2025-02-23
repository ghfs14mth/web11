import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Students.css";
import QueryForm from "../../components/QueryForm/QueryForm";
import StudentLogin from "../../components/StudentLogin/StudentLogin";
import Footer from "../../components/Footer/Footer";
const Students = () => {
    const location = useLocation();

    const menuOptions = [
        { name: "Timetable", link: "timetable" },
        { name: "Handbook", link: "handbook" },
        { name: "Learning", link: "learning" },
        { name: "Council", link: "council" },
    ];

    const isStudentsPage = location.pathname === "/students";
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarOpen && !event.target.closest(".students-sidebar") && !event.target.closest(".sidebar-toggle")) {
                setClosing(true); // Start closing animation
                setTimeout(() => {
                    setSidebarOpen(false);
                    setClosing(false);
                }, 300); // Delay to match CSS transition
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [sidebarOpen]);

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
                {/* Mobile Sidebar Toggle Button */}
                <div
                    className={`sidebar-toggle ${sidebarOpen ? "sidebar-toggle-open" : ""}`}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <span className={`arrow ${sidebarOpen ? "flip" : ""}`}>&#x276E;</span>
                </div>
                {/* Right Sidebar */}
                <div className={`students-sidebar ${sidebarOpen ? "sidebar-open" : ""} ${closing ? "sidebar-closing" : ""}`}>
                    <h2 style={{ marginLeft: "10px", color: "#fff" }}>
                        Students
                    </h2>
                    <ul>
                        {menuOptions.map((option, index) => {
                            const isActive = location.pathname.includes(option.link);
                            return (
                                <li key={index} onClick={() => setSidebarOpen(false)}>
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
            <Footer />
            <QueryForm />
        </div>
    );
};

export default Students;
