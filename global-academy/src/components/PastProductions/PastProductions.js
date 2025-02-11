import React, { useState, useEffect } from "react";
import "./PastProductions.css";
import { getDatabase, ref, onValue } from "firebase/database";

const PastProductions = () => {
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    // Fetch past productions data from Firebase Realtime Database
    const db = getDatabase();
    const productionsRef = ref(db, "incidents/pastProductions");
    onValue(productionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the data object into an array, sort by date in descending order
        const sortedData = Object.values(data).sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setProductions(sortedData);
      }
    });
  }, []);

  return (
    <div className="past-productions-container">
      <h2>Past Productions</h2>
      <div className="past-productions-list">
        {productions.length > 0 ? (
          productions.map((production, index) => (
            <div className="past-production-card" key={index}>
              <div className="production-image">
                <img
                  src={production.image || "https://via.placeholder.com/300x200"}
                  alt={production.title}
                />
              </div>
              <div className="production-details">
                <h3>{production.title}</h3>
                <p>{production.description}</p>
                <p>{new Date(production.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No past productions available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default PastProductions;
