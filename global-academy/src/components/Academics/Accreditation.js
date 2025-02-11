import React from "react";
import "./Accreditation.css";
import acc1 from '../../assets/acc1.jpg';
import acc2 from '../../assets/acc2.jpg';
const Accreditation = () => {
  const accreditations = [
    { title: "Affiliated with HPBOSE", description: "Recognized by the Himachal Pradesh Board of School Education (HPBOSE) for primary, secondary, and senior secondary education." },
    { title: "National Accreditation", description: "Certified by the National Accreditation Board for Education and Training (NABET)." },
    { title: "ISO Certification", description: "ISO 9001:2015 certified for quality management systems in education." },
    { title: "Excellence in Education Award", description: "Awarded for maintaining high standards in teaching and extracurricular activities." },
  ];

  return (
    <div className="accreditation-container">
      <h2>School Accreditation</h2>
      <p>
        Global Academy is proud to be affiliated with the Himachal Pradesh Board of School Education (HPBOSE) and other renowned organizations. Our accreditations reflect our commitment to maintaining high educational standards, fostering innovation, and ensuring student success.
      </p>
      <div className="accreditation-list">
        {accreditations.map((item, index) => (
          <div key={index} className="accreditation-item">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="certificate-section">
        <h3>Our Certificates</h3>
        <div className="certificate-images">
          <img src={acc1} alt="Certificate 1" />
          <img src={acc2} alt="Certificate 2" />
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
