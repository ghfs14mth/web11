import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./Employment.css";
import staff from '../../assets/staff.jpg';
const Employment = () => {
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    const fetchTeacherData = async () => {
      const database = getDatabase();
      const teachersRef = ref(database, "employment-teachers"); // Firebase Realtime Database node for teachers

      onValue(teachersRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setTeacherData(data);
        }
      });
    };

    fetchTeacherData();
  }, []);

  return (
    <div className="employment-container">
      {/* Title and Image */}
      <h2 className="employment-title">Employment Opportunities</h2>
      <img
        src={staff}
        alt="Employment"
        className="employment-image"
      />

      {/* Job Openings Table */}
      <div className="employment-table-container">
        <h3>Current Job Openings</h3>
        <table className="employment-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Title</th>
              <th>Requirements</th>
            </tr>
          </thead>
          <tbody>
            {teacherData.map((teacher, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {teacher.title}
                  <br />
                  <span className="job-description">{teacher.description}</span>
                </td>
                <td>{teacher.requirements.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Application Form */}
      <div className="employment-form">
        <h3>Submit Your Application</h3>
        <form>
          <label>
            Name:
            <input type="text" placeholder="Enter your name" required />
          </label>
          <label>
            Role:
            <select required>
              <option value="">Select a role</option>
              {teacherData.map((teacher, index) => (
                <option key={index} value={teacher.title}>
                  {teacher.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            CV:
            <input type="file" placeholder="Submit your CV" required />
          </label>
          <label>
            Remarks:
            <textarea placeholder="Tell us something about yourself" rows="4" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="employment-contact">
        <h3>Contact Us</h3>
        <p>
          <strong>Email:</strong> careers@globalacademy.edu
        </p>
        <p>
          <strong>Phone:</strong> +91 12345-67890
        </p>
        <p>
          <strong>Address:</strong> Himuda Colony, Paonta Sahib, Distt. Sirmaur
          (H.P)
        </p>
      </div>
    </div>
  );
};

export default Employment;
