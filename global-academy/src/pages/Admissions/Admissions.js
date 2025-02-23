import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Admissions.css";
import QueryForm from "../../components/QueryForm/QueryForm";
import Footer from "../../components/Footer/Footer";
const Admissions = () => {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const menuOptions = [
        { name: "Admission Rules", link: "admission-rules" },
        { name: "Admission Updates", link: "admission-updates" },
        { name: "Admission Form", link: "admission-form" },
    ];

    const isAdmissionsPage = location.pathname === "/admissions";
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarOpen && !event.target.closest(".admissions-sidebar") && !event.target.closest(".sidebar-toggle")) {
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
    const downloadBrochure = () => {
        const link = document.createElement("a");
        link.href = "https://storage.googleapis.com/web_images_database_gaps/GAPS_Brochure.pdf"; // Ensure this path is correct
        link.download = "GAPS_Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div>
            <div className="admissions-container">
                {/* Left Section */}
                <div className="admissions-content">
                    {isAdmissionsPage ? (
                        <div className="admissions-overview">
                            {/* Carousel */}

                            <h1>Admission Overview</h1>
                            <p>
                                At Global Academy, we welcome students from all
                                backgrounds, fostering a learning environment that
                                promotes excellence and inclusivity. Our admission
                                process ensures fairness and transparency, providing
                                every student with an equal opportunity to join our
                                institution.
                            </p>
                            <p><b>
                                Navigate the sidebar to explore more about our
                                admission process, updates, and guidelines.</b>
                            </p>
                            {/* Download Admission Brochure */}
                            <div className="admissions-brochure">
                                <button onClick={downloadBrochure} className="brochure-download-link">
                                    Download Admission Brochure
                                </button>
                            </div>
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
                <div className={`admissions-sidebar ${sidebarOpen ? "sidebar-open" : ""} ${closing ? "sidebar-closing" : ""}`}>
                    <h2 style={{ color: 'white' }}>Admissions</h2>
                    <ul>
                        {menuOptions.map((option, index) => {
                            const isActive = location.pathname.includes(option.link);
                            return (
                                <li key={index} onClick={() => setSidebarOpen(false)}>
                                    <Link
                                        to={`/admissions/${option.link}`}
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

export default Admissions;
