import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faFileAlt,
  faUserGraduate,
  faSchool,
  faCalendarAlt,
  faClipboardList,
  faHandshake,
  faMoneyBill,
  faStethoscope,
  faMedal,
  faRedo,
  faUserShield,
  faBell,
  faGlobe,
  faGavel,
  faUsers,
  faFileContract,
  faLaptop
} from "@fortawesome/free-solid-svg-icons";
import "./AdmissionRules.css";
import { Link } from "react-router-dom";

const admissionRules = [
  { icon: faCheckCircle, text: "Admission is open to all students regardless of background." },
  { icon: faFileAlt, text: "Submission of valid documents is mandatory." },
  { icon: faUserGraduate, text: "Students must meet the age requirements for their grade." },
  { icon: faSchool, text: "Transfer certificates are required for students shifting from other schools." },
  { icon: faCalendarAlt, text: "Late applications may not be considered." },
  { icon: faClipboardList, text: "Admissions are based on academic performance and entrance tests (if applicable)." },
  { icon: faHandshake, text: "Shortlisted students & parents may need to attend an interview session." },
  { icon: faMoneyBill, text: "Admission is confirmed only after fee payment within the given deadline." },
  { icon: faStethoscope, text: "A medical certificate from a registered doctor is mandatory." },
  { icon: faMedal, text: "Scholarships are available based on merit." },
  { icon: faRedo, text: "Re-admission is subject to seat availability." },
  { icon: faUserShield, text: "Parental consent is required for extracurricular activities & special programs." },
  { icon: faBell, text: "Students must adhere to school rules, dress codes, and attendance requirements." },
  { icon: faGlobe, text: "Foreign students must provide visa and passport details." },
  { icon: faGavel, text: "Any misconduct may result in admission cancellation." },
  { icon: faFileContract, text: "Withdrawal requires prior notice from parents." },
  { icon: faUsers, text: "Sibling preference is given to students with existing siblings in the school." },
  { icon: faLaptop, text: "All admissions are digitally recorded for transparency." },
];

const AdmissionRules = () => {
  return (
    <div className="admissions-rules-container">
      <h1>📜 Admission Rules</h1>
      <ul className="admission-rules-list">
        {admissionRules.map((rule, index) => (
          <li key={index} className="admission-rule">
            <FontAwesomeIcon icon={rule.icon} className="rule-icon" />
            <span>{rule.text}</span>
          </li>
        ))}
      </ul>
      <div className="apply-btn-container">
        <Link to={"/admissions/admission-form"} className="apply-btn">Apply for Admission</Link>
      </div>
    </div>
  );
};

export default AdmissionRules;
