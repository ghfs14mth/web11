import React from "react";
import { useParams } from "react-router-dom";
import Overview from "../../components/Overview/Overview"; // Import the Overview component
import AdministrativeTeam from "../../components/AdministrativeTeam/AdministrativeTeam"; // Import the AdministrativeTeam component
import "./About.css";
import Alumni from "../../components/Alumni/Alumni";
import BoardOfEducation from "../../components/BoardofEducation/BoardofEducation";
import SchoolCommunication from "../../components/SchoolCommunications/SchoolCommunications";
import SchoolDocuments from "../../components/SchoolDocuments/SchoolDocuments";
import Employment from "../../components/Employment/Employment";
import StaffDirectory from "../../components/StaffDirectory/StaffDirectory";
import VisitUs from "../../components/VisitUs/VisitUs";

const AboutOption = () => {
    const { option } = useParams();

    // Check if the selected option is 'overview' and render the Overview component
    if (option === "overview") {
        return (
            <div className="about-option">
                <Overview /> {/* Render the Overview component */}
            </div>
        );
    }

    // Check if the selected option is 'administrative-team' and render the AdministrativeTeam component
    if (option === "administrative-team") {
        return (
            <div className="about-option">
                <AdministrativeTeam /> {/* Render the AdministrativeTeam component */}
            </div>
        );
    }
    // Check if the selected option is 'alumni' and render the Alumni component
    if (option === "alumni") {
        return (
            <div className="alumni">
                <Alumni /> {/* Render the AdministrativeTeam component */}
            </div>
        );
    }
    // Check if the selected option is 'board-of-education' and render the BoardofEducation component
    if (option === "board-of-education") {
        return (
            <div className="board-of-education">
                <BoardOfEducation /> {/* Render the BOE component */}
            </div>
        );
    }
    // Check if the selected option is 'school-communications' and render the School Communications component
    if (option === "school-communications") {
        return (
            <div className="school-communications">
                <SchoolCommunication /> {/* Render the school communications component */}
            </div>
        );
    }
    // Check if the selected option is 'school-documents' and render the SchoolDocuments component
    if (option === "school-documents") {
        return (
            <div className="school-documents">
                <SchoolDocuments /> {/* Render the school documents component */}
            </div>
        );
    }
    // Check if the selected option is 'employment' and render the Employment component
    if (option === "employment") {
        return (
            <div className="employment">
                <Employment /> {/* Render the school documents component */}
            </div>
        );
    }
    // Check if the selected option is 'staff-directory' and render the StaffDirectory component
    if (option === "staff-directory") {
        return (
            <div className="staff-directory">
                <StaffDirectory /> {/* Render the staff-directory component */}
            </div>
        );
    }
    // Check if the selected option is 'visit-us' and render the VisitUs component
    if (option === "visit-us") {
        return (
            <div className="visit-us">
                <VisitUs /> {/* Render the visit-us component */}
            </div>
        );
    }
    // Render content for other options
    return (
        <div className="about-option">
            <h2>{option.replace("-", " ").toUpperCase()}</h2>
            <p>{option || "Content not found."}</p>
        </div>
    );
};

export default AboutOption;
