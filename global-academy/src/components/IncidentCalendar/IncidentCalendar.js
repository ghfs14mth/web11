// IncidentCalendar.js

import React, { useState, useEffect } from "react";
import "./IncidentCalendar.css";
import { getDatabase, ref, onValue } from "firebase/database";

const IncidentCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events data from Firebase Realtime Database
    const db = getDatabase();
    const eventsRef = ref(db, "incidents/calendar");
    onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      setEvents(data || []);
    });
  }, []);

  return (
    <div className="incident-calendar-container">
      <h2>Upcoming Events</h2>
      <div className="incident-calendar-list">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div className="incident-calendar-card" key={index}>
              <div className="incident-calendar-date">
                <p>{new Date(event.date).toLocaleDateString("en-US", { month: "short" })}</p>
                <h3>{new Date(event.date).getDate()}</h3>
                <p>{new Date(event.date).getFullYear()}</p>
              </div>
              <div className="incident-calendar-details">
                <h3>{event.title}</h3>
                <p>{event.time}</p>
                <p>{event.location}</p>
                <img
                  src={event.image || "https://via.placeholder.com/300x200"}
                  alt={event.title}
                />
              </div>
            </div>
          ))
        ) : (
          <p>No events available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default IncidentCalendar;
