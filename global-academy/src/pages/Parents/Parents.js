import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Parents.css";
import QueryForm from "../../components/QueryForm/QueryForm";
import Footer from "../../components/Footer/Footer";
const Parents = () => {
    const location = useLocation(); // Hook to get the current path

    const menuOptions = [
        { name: "Registration", link: "registration" },
        { name: "Notices", link: "notices" },
        { name: "Transportation", link: "transportation" },
    ];
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isParentsPage = location.pathname === "/parents"; // Check if on the /parents page
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarOpen && !event.target.closest(".parents-sidebar") && !event.target.closest(".sidebar-toggle")) {
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
                {/* Mobile Sidebar Toggle Button */}
                {sidebarOpen ? <div
                    className={`sidebar-toggle ${sidebarOpen ? "sidebar-toggle-open" : ""}`}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <span className={`arrow ${sidebarOpen ? "flip" : ""}`}>&#x276E;</span>
                </div> : null}
                {/* Right Sidebar */}
                <div className={`parents-sidebar ${sidebarOpen ? "sidebar-open" : ""} ${closing ? "sidebar-closing" : ""}`}>

                    <h2 style={{ marginLeft: "10px", color: '#fff' }}>Parents</h2>
                    <ul>
                        {menuOptions.map((option, index) => {
                            const isActive = location.pathname.includes(option.link); // Check if this link is active
                            return (
                                <li key={index} onClick={() => setSidebarOpen(false)}>
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
            <Footer />
            <QueryForm />
        </div>
    );
};

export default Parents;
