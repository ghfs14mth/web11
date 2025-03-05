import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import { Link } from "react-router-dom";
import "./OperationsSection.css";

const OperationsSection = () => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    const operationsRef = ref(database, "operationsSection");
    onValue(operationsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setOperations(data);
      }
    });
  }, []);

  return (
    <div className="operations-section">
      <Link to={"/academics/calendar"} className="operation-item">
        <div className="operation-icon">
          <img src={"/icons/calendar-icon.svg"} alt={"calendar-icon"} />
        </div>
        <div className="operation-title">Academic Calendar</div>
      </Link>
      <Link to={"/students/handbook"} className="operation-item">
        <div className="operation-icon">
          <img src={"/icons/code-icon.svg"} alt={"/icons/code-icon.svg"} />
        </div>
        <div className="operation-title">Student Handbook</div>
      </Link>
      <Link to={"/operations/menus"} className="operation-item">
        <div className="operation-icon">
          <img src={"/icons/menu-icon.svg"} alt={"/icons/menu-icon.svg"} />
        </div>
        <div className="operation-title">School Menus</div>
      </Link>
      <Link to={"/students"} className="operation-item">
        <div className="operation-icon">
          <img src={"/icons/login-icon.svg"} alt={"/icons/login-icon.svg"} />
        </div>
        <div className="operation-title">Clever Login</div>
      </Link>
      <Link to={"/parents/transportation"} className="operation-item">
        <div className="operation-icon">
          <img src={"/icons/transport-icon.svg"} alt={"/icons/transport-icon.svg"} />
        </div>
        <div className="operation-title">Transportation</div>
      </Link>
      <Link to={"/volunteer"} className="operation-item">
        <div className="operation-icon">
          <img src={"/icons/volunteer-icon.svg"} alt={"volunteer-icon"} />
        </div>
        <div className="operation-title">Volunteer</div>
      </Link>
    </div>
  );
};

export default OperationsSection;
