import React from "react";
import "./Handbook.css";

const Handbook = () => {
  const handbookSections = [
    {
      title: "Code of Conduct",
      content: [
        "1. Students must respect all staff members, peers, and school property.",
        "2. Use of offensive language, bullying, or harassment of any kind will result in disciplinary action.",
        "3. Attendance is mandatory for all scheduled classes unless an official leave is approved.",
        "4. Academic dishonesty, including cheating and plagiarism, is strictly prohibited and will lead to consequences.",
        "5. Dress code must be adhered to at all times. Students are expected to wear the prescribed uniform neatly."
      ]
    },
    {
      title: "Attendance Policy",
      content: [
        "Clause 1: Attendance Requirement",
        "1. Students must maintain at least 85% attendance throughout the academic year.",
        "2. Excused absences include medical emergencies, bereavement, or participation in official school events.",
        "Clause 2: Consequences of Low Attendance",
        "1. Students falling below the required attendance may face restrictions from participating in extracurricular activities.",
        "2. Repeated low attendance will result in parental notification and may affect promotion to the next grade."
      ]
    },
    {
      title: "Disciplinary Actions",
      content: [
        "Clause 1: Minor Offenses",
        "1. Late submissions of assignments will result in a deduction of marks.",
        "2. Disruption of class proceedings will lead to a verbal warning or parent notification.",
        "Clause 2: Major Offenses",
        "1. Vandalism of school property will require compensation for damages and suspension.",
        "2. Physical altercations among students will lead to suspension and mandatory counseling sessions."
      ]
    },
    {
      title: "Safety and Security",
      content: [
        "Clause 1: Emergency Procedures",
        "1. Students must familiarize themselves with fire evacuation routes and emergency assembly points.",
        "2. Participation in emergency drills is mandatory.",
        "Clause 2: Restricted Areas",
        "1. Students are not allowed to access laboratories, staff rooms, or storage areas without supervision.",
        "2. Tampering with security systems or fire alarms will result in severe disciplinary action."
      ]
    },
    {
      title: "Examination Guidelines",
      content: [
        "1. Students must arrive at the examination venue 15 minutes before the scheduled time.",
        "2. Possession of unauthorized materials, such as notes or electronic devices, is strictly prohibited.",
        "3. Students must write their name and roll number clearly on the answer sheet.",
        "4. Any form of malpractice will result in disqualification from the examination."
      ]
    }
  ];

  return (
    <div className="handbook-container">
      <h1 className="handbook-title">Student Handbook</h1>
      <p className="handbook-intro">
        Welcome to the Student Handbook. This guide outlines the rules, regulations, and policies to be followed during the academic year.
      </p>
      <div className="handbook-sections">
        {handbookSections.map((section, index) => (
          <div key={index} className="handbook-section">
            <h2 className="handbook-section-title">{section.title}</h2>
            <ul className="handbook-rules">
              {section.content.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Handbook;
