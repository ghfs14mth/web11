import React from "react";
import { useParams } from "react-router-dom";
import Timetable from "../../components/TimeTable/TimeTable";
import Council from "../../components/Council/Council";
import Handbook from "../../components/Handbook/Handbook";

const StudentOption = () => {
    const { option } = useParams();

    // Add specific rendering logic for each option
    if (option === "timetable") {
        return (
            <div className="student-option">
                <Timetable />
            </div>
        );
    }

    if (option === "handbook") {
        return (
            <div className="student-option">
                <Handbook />
            </div>
        );
    }

    if (option === "learning") {
        return (
            <div className="student-option">
                <h2>Learning</h2>
                <p>
                    Discover learning resources tailored to your academic
                    journey.
                </p>
            </div>
        );
    }

    if (option === "council") {
        return (
            <div className="student-option">
                <Council />
            </div>
        );
    }

    return (
        <div className="student-option">
            <h2>{option.replace("-", " ").toUpperCase()}</h2>
            <p>{option || "Content not found."}</p>
        </div>
    );
};

export default StudentOption;
