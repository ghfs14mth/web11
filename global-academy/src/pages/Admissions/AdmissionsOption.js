import React from "react";
import { useParams } from "react-router-dom";
import AdmissionForm from "./AdmissionForm";
import AdmissionRules from "./AdmissionRules";
import AdmissionUpdates from "./AdmissionUpdates";

const AdmissionsOption = () => {
  const { option } = useParams();

  // Render content for Admission Rules
  if (option === "admission-rules") {
    return (
      <div className="admissions-option">
        <AdmissionRules />
      </div>
    );
  }
  // Render content for Admission Updates
  if (option === "admission-updates") {
    return (
      <div className="admissions-option">
        <AdmissionUpdates />
      </div>
    );
  }
  if (option === "admission-form") {
    return (
      <div className="admissions-option">
        <AdmissionForm />
      </div>
    );
  }

  return (
    <div className="admissions-option">
      <h2>{option.replace("-", " ").toUpperCase()}</h2>
      <p>Content not found.</p>
    </div>
  );
};

export default AdmissionsOption;
