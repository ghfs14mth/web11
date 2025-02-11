import React, { useState, useEffect } from "react";
import "./Exams.css";
import { getDatabase, ref, onValue } from "firebase/database";

const Exams = () => {
  const [standard, setStandard] = useState("");
  const [examData, setExamData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (standard) {
      setLoading(true);
      const db = getDatabase();
      const examsRef = ref(db, `exams/${standard}`);
      onValue(examsRef, (snapshot) => {
        if (snapshot.exists()) {
          setExamData(snapshot.val());
        } else {
          setExamData([]);
        }
        setLoading(false);
      });
    }
  }, [standard]);

  return (
    <div className="exams-container">
      <h2>Exams</h2>
      <label htmlFor="standard-select">Select Standard:</label>
      <select
        id="standard-select"
        value={standard}
        onChange={(e) => setStandard(e.target.value)}
      >
        <option value="">-- Select Standard --</option>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((std) => (
          <option key={std} value={std}>
            Standard {std}
          </option>
        ))}
      </select>
      <div className="exam-table-container">
        <table className="exam-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Exam</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3">Loading...</td>
              </tr>
            ) : !standard ? (
              <tr>
                <td colSpan="3">Please select a standard to view exam schedule.</td>
              </tr>
            ) : examData.length === 0 ? (
              <tr>
                <td colSpan="3">No exams are scheduled for this standard as of now.</td>
              </tr>
            ) : (
              examData.map((exam, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{exam.title}</td>
                  <td>{exam.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exams;
