import React, { useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import "./Transportation.css";
import { FaBus, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Transportation = () => {
  const [busRoutes, setBusRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      const db = getDatabase();
      const routeRef = ref(db, "transportation/routes");
      const snapshot = await get(routeRef);

      if (snapshot.exists()) {
        setBusRoutes(snapshot.val());
      }
    };

    fetchRoutes();
  }, []);

  return (
    <div className="transportation-container">
      <h1 className="transport-title">🚌 School Transportation Routes</h1>
      <p className="transport-subtitle">
        Find the best route for your daily commute to Global Academy.
      </p>

      <div className="bus-routes">
        {busRoutes.map((bus) => (
          <div key={bus.id} className="bus-card" style={{ borderColor: bus.color }}>
            <h2 style={{ color: bus.color }}>
              <FaBus /> {bus.name}
            </h2>
            <ul>
              {bus.stops.map((stop, index) => (
                <li key={index}>
                  <span className="stop-location">
                    <FaMapMarkerAlt className="stop-icon" /> {stop.name}
                  </span>
                  <span className="stop-time">
                    <FaClock /> {stop.time}
                  </span>
                </li>

              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transportation;
