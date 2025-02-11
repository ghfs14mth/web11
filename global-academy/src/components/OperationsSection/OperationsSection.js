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
      {operations.map((item) => (
        <Link to={item.link} key={item.id} className="operation-item">
          <div className="operation-icon">
            <img src={item.icon} alt={item.title} />
          </div>
          <div className="operation-title">{item.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default OperationsSection;
