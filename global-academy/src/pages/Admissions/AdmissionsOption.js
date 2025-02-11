import React from "react";
import { useParams } from "react-router-dom";

const AdmissionsOption = () => {
  const { option } = useParams();

  // Render content for Admission Rules
  if (option === "admission-rules") {
    return (
      <div className="admissions-option">
        <h2>Admission Rules</h2>
        <p>1. Admission is open to all students regardless of background.</p>
        <p>2. Submission of valid documents is mandatory.</p>
        <p>3. Transfer certificates are required for transfers.</p>
      </div>
    );
  }

  // Render content for Admission Updates
  if (option === "admission-updates") {
    return (
      <div className="admissions-option">
        <h2>Admission Updates</h2>
        <p>No updates at the moment. Check back later!</p>
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
