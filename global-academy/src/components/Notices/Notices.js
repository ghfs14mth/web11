import React, { useState, useEffect } from "react";
import "./Notices.css";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const noticesRef = ref(database, "parents/notices");
    onValue(noticesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        let noticesArray = Object.values(data);
        
        // ✅ Sorting notices by latest date first
        noticesArray.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        setNotices(noticesArray);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="notices-container">
      <h1>School Notices</h1>
      <p className="notices-intro">
        Stay updated with the latest notices and announcements from the school.
      </p>
      {loading ? (
        <p>Loading notices...</p>
      ) : notices.length > 0 ? (
        <div className="notices-list">
          {notices.map((notice, index) => (
            <div key={index} className="notice-card">
              <h2 className="notice-title">{notice.title}</h2>
              <p className="notice-date">{new Date(notice.date).toDateString()}</p>
              <p className="notice-description">{notice.description}</p>
              <p className="notice-description">Regards,</p>
              <p className="notice-description">{notice.salutation}</p>
              <p className="notice-description" style={{marginTop:"-18px"}}>{notice.occupation}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-notices">No notices available at the moment.</p>
      )}
    </div>
  );
};

export default Notices;
