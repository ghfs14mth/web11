import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Admissions.css";
import QueryForm from "../../components/QueryForm/QueryForm";
import Footer from "../../components/Footer/Footer";
const Admissions = () => {
    const location = useLocation();

    const menuOptions = [
        { name: "Admission Rules", link: "admission-rules" },
        { name: "Admission Updates", link: "admission-updates" },
        { name: "Admission Form", link: "admission-form" },
    ];

    const isAdmissionsPage = location.pathname === "/admissions";

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
                                <a
                                    href="/path-to-admission-brochure.pdf"
                                    download
                                    className="brochure-download-link"
                                >
                                    Download Admission Brochure
                                </a>
                            </div>
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="admissions-sidebar">
                    <h2 style={{ color: 'white' }}>Admissions</h2>
                    <ul>
                        {menuOptions.map((option, index) => {
                            const isActive = location.pathname.includes(option.link);
                            return (
                                <li key={index}>
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
            <Footer/>
            <QueryForm />
        </div>
    );
};

export default Admissions;
