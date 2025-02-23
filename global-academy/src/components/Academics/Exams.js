import React, { useState, useEffect } from "react";
import "./Exams.css";
import { getDatabase, ref, onValue } from "firebase/database";

const Exams = () => {
  const [standard, setStandard] = useState("");
  const [examData, setExamData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [field, setField] = useState("");
  const [fields, setFields] = useState([]);

  useEffect(() => {
    if (standard) {
      setLoading(true);
      const db = getDatabase();
      if (standard > 10) {
        if (standard === "11") {
          const fieldSelections1 = ["commerce", "science", "arts"]
          setFields(fieldSelections1);
        }
        else {
          const fieldSelections2 = ["arts", "science"]
          setFields(fieldSelections2);
        }
      }
      const examsRef = ref(db, `exams/${standard}`);

      onValue(examsRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const commerce = data.filter(exam => exam.category === "commerce");
          const arts = data.filter(exam => exam.category === "arts");
          const science = data.filter(exam => exam.category === "science");
          if (standard > 10) {
            setLoading(true);
            if (field.length > 0) {
              if (science.length && field === "science") {
                setExamData(science)
              }
              else if (field === "arts") {
                setExamData(arts)
              }
              else if (commerce.length && field === "commerce") {
                setExamData(commerce)
              }
              else {
                setExamData([]);
              }
            }
          }
          else {
            setExamData(data)
          }
        } else {
          setExamData([])
        }
        setLoading(false);
      });
    }
  }, [standard, field]);

  return (
    <div className="exams-container">
      <h2>Exams</h2>
      <div className="exams-school_info">
        <p className="exams-school_name">Global Academy Public School, Paonta Sahib </p>
        <p>Date Sheet</p>

        <p>  Final Examination - Session : 2024-25</p>
        <p>  Time : 9:00 AM </p>
      </div>
      <div className="exams-select-options">
        <div>
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
        </div>
        <div>{standard > 10 ? <>
          <label style={{ marginRight: '85px' }} htmlFor="standard-select"> Field: </label>
          <select
            id="field-select"
            value={field}
            onChange={(e) => setField(e.target.value)}
          >
            <option value="">-- Select Field --</option>
            {fields.map((file, index) => (
              <option key={index} value={file}>
                {file}
              </option>
            ))}
          </select> </> : null}</div>
      </div>
      {standard > 10 ? <h4 >Field: {field}</h4> : null}
      <div className="exam-table-container">
        <table className="exam-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Exam</th>
              <th>Date</th>
              <th>Day</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            ) : !standard ? (
              <tr>
                <td colSpan="4">Please select a standard to view exam schedule.</td>
              </tr>
            ) : standard > 10 && field.length === 0 ? (
              <tr>
                <td colSpan="4">Please select a field to view exam schedule.</td>
              </tr>
            ) : examData.length === 0 ? (
              <tr>
                <td colSpan="4">No exams are scheduled for this standard as of now.</td>
              </tr>
            ) : (
              examData.map((exam, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{exam.title}</td>
                  <td>{exam.date}</td>
                  <td>{exam.day}</td>
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
