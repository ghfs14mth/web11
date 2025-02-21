import React from "react";
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
            <Footer/>
            <QueryForm />
        </div>
    );
};

export default Students;
