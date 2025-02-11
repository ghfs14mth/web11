import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./Council.css";

const Council = () => {
  const [councilMembers, setCouncilMembers] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const councilRef = ref(db, "students/council");
    onValue(councilRef, (snapshot) => {
      const data = snapshot.val();
      setCouncilMembers(data || []);
    });
  }, []);

  const renderLevel = (level,index) => {
    const members = councilMembers.filter((member) => member.level === level);
    return (
      <div key={index} className="council-level">
        {members.map((member, index) => (
          <div key={index} className="council-item">
            <div className="hexagon">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="hexagon-title">{member.name}</div>
            <div className="hexagon-subtitle">{member.position}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="council-container">
      <h1>Student Council</h1>
      {[1, 2, 3].map((level,index) => renderLevel(level,index))}
    </div>
  );
};

export default Council;
