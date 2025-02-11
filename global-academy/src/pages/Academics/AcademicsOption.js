import React from "react";
import { useParams } from "react-router-dom";
import AcademicCalendar from "../../components/Academics/Calendar";
import Accreditation from "../../components/Academics/Accreditation";
import Exams from "../../components/Academics/Exams";
import "./Academics.css";

const AcademicsOption = () => {
    const { option } = useParams();

    // Check if the selected option is 'calendar' and render the Calendar component
    if (option === "calendar") {
        return (
            <div className="academics-option">
                <AcademicCalendar />
            </div>
        );
    }

    // Check if the selected option is 'accreditation' and render the Accreditation component
    if (option === "accreditation") {
        return (
            <div className="academics-option">
                <Accreditation />
            </div>
        );
    }

    // Check if the selected option is 'exams' and render the Exams component
    if (option === "exams") {
        return (
            <div className="academics-option">
                <Exams />
            </div>
        );
    }

    // Render content for unknown options
    return (
        <div className="academics-option">
            <h2>{option.replace("-", " ").toUpperCase()}</h2>
            <p>{option || "Content not found."}</p>
        </div>
    );
};

export default AcademicsOption;
