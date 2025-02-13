import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./AdmissionUpdates.css";

const AdmissionUpdates = () => {
  const [updateImage, setUpdateImage] = useState(null);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const imageRef = ref(db, "admissions/updates/imageUrl");
    const updatesRef = ref(db, "admissions/updates/list");

    // Fetching Image URL
    onValue(imageRef, (snapshot) => {
      setUpdateImage(snapshot.val());
    });

    // Fetching Admission Updates List
    onValue(updatesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUpdates(Object.values(data));
      }
    });
  }, []);

  return (
    <div className="admission-updates-container">
      <h1>📢 Admission Updates</h1>
      <p className="subtext">Stay updated with the latest admission announcements.</p>

      {/* Display the Image */}
      <div className="updates-image-container">
        {updateImage ? (
          <img src={updateImage} alt="Admission Update" className="updates-image" />
        ) : (
          <div className="image-placeholder">Image Loading...</div>
        )}
      </div>

      {/* Dynamic Updates Section */}
      <div className="updates-list">
        {updates.length > 0 ? (
          updates.map((update, index) => (
            <div key={index} className="update-card">
              <h3>{update.title}</h3>
              <p>{update.description}</p>
              <span className="update-date">{update.date}</span>
            </div>
          ))
        ) : (
          <p className="no-updates">No updates at the moment. Check back later!</p>
        )}
      </div>
    </div>
  );
};

export default AdmissionUpdates;
