import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { getDatabase, ref, onValue } from "firebase/database";

const AcademicCalendar = () => {
    const [value, setValue] = useState(new Date());
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const eventsRef = ref(db, "calendar");
        onValue(eventsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const formattedEvents = Object.values(data);
                setEvents(formattedEvents);
            }
        });
    }, []);

    const renderEventDetails = (date) => {
        const dayEvents = events.filter((event) => {
            const eventDate = new Date(event.date);
            return (
                eventDate.getDate() === date.getDate() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getFullYear() === date.getFullYear()
            );
        });

        return (
            <div className="event-container">
                {dayEvents.map((event, index) => (
                    <div key={index} className="event-card">
                        <strong>{event.title}</strong>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="academic-calendar">
            <h1>Academic Calendar</h1>
            <Calendar
                onChange={setValue}
                value={value}
                tileContent={({ date }) => renderEventDetails(date)}
                className="custom-calendar"
            />

            {/* Holiday Table */}
            <div className="table-container">
                <h3>Holiday List</h3>
                <table className="table">
                    <thead>
                        <tr >
                            <th style={{backgroundColor:'#1d5f2c', color:'#fff'}}>Sr No.</th>
                            <th style={{backgroundColor:'#1d5f2c', color:'#fff'}}>Holiday</th>
                            <th style={{backgroundColor:'#1d5f2c', color:'#fff'}}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{event.title}</td>
                                <td>{event.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AcademicCalendar;
