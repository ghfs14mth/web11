import React, { useState, useEffect } from "react";
import { getDatabase, ref, push,onValue } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./Employment.css";
import staff from "../../assets/staff.jpg";

const Employment = () => {
  const [teacherData, setTeacherData] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [remarks, setRemarks] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchTeacherData = async () => {
      const database = getDatabase();
      const teachersRef = ref(database, "employment-teachers");

      onValue(teachersRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setTeacherData(data);
        }
      });
    };

    fetchTeacherData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cvFile) {
      alert("Please select a CV file to upload.");
      return;
    }

    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowedTypes.includes(cvFile.type)) {
      alert("Only PDF or Word documents are allowed for CV upload.");
      return;
    }

    setUploading(true);
    const storage = getStorage();
    const fileRef = storageRef(storage, `employment/cv/${Date.now()}_${cvFile.name}`);
    const uploadTask = uploadBytesResumable(fileRef, cvFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress.toFixed(0)); // Update progress
      },
      (error) => {
        console.error("Upload error:", error);
        alert("Error uploading CV. Please try again.");
        setUploading(false);
      },
      async () => {
        const cvUrl = await getDownloadURL(uploadTask.snapshot.ref);

        // Store form submission in Firebase Realtime Database
        const db = getDatabase();
        const applicationsRef = ref(db, "employment/cv");
        await push(applicationsRef, {
          name,
          role,
          cvUrl,
          remarks,
          timestamp: new Date().toISOString(),
        });

        alert("Application submitted successfully! ✅");

        setName("");
        setRole("");
        setCvFile(null);
        setRemarks("");
        setProgress(0);
        setUploading(false);
      }
    );
  };

  return (
    <div className="employment-container">
      <h2 className="employment-title">Employment Opportunities</h2>
      <img src={staff} alt="Employment" className="employment-image" />

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

      <div className="employment-form">
        <h3>Submit Your Application</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
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
            <input type="file" onChange={(e) => setCvFile(e.target.files[0])} required />
          </label>
          {uploading && <p>Uploading: {progress}%</p>}
          <label>
            Remarks:
            <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} rows="4" />
          </label>
          <button type="submit" disabled={uploading}>
            {uploading ? `Uploading... ${progress}%` : "Submit"}
          </button>
        </form>
      </div>

      <div className="employment-contact">
        <h3>Contact Us</h3>
        <p>
          <strong>Email:</strong> careers@globalacademy.edu
        </p>
        <p>
          <strong>Phone:</strong> +91 12345-67890
        </p>
        <p>
          <strong>Address:</strong> Himuda Colony, Paonta Sahib, Distt. Sirmaur (H.P)
        </p>
      </div>
    </div>
  );
};

export default Employment;
