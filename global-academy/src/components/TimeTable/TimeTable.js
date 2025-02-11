import React, { useState, useEffect } from "react";
import "./TimeTable.css";
import { getDatabase, ref, onValue } from "firebase/database";

const Timetable = () => {
    const [selectedStandard, setSelectedStandard] = useState("1");
    const [timetableData, setTimetableData] = useState([]);

    useEffect(() => {
        // Fetch timetable data based on the selected standard
        const db = getDatabase();
        const timetableRef = ref(db, `students/timetable/${selectedStandard}`);
        onValue(timetableRef, (snapshot) => {
            const data = snapshot.val();
            setTimetableData(data || []);
        });
    }, [selectedStandard]);
    console.log(timetableData)
    return (
        <div className="timetable-container">
            <h2>Class Timetable</h2>

            {/* Dropdown for Standard Selection */}
            <div className="standard-selector">
                <label htmlFor="standard">Select Standard:</label>
                <select
                    id="standard"
                    value={selectedStandard}
                    onChange={(e) => setSelectedStandard(e.target.value)}
                >
                    {[...Array(10).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                            Standard {i + 1}
                        </option>
                    ))}
                </select>
            </div>

            {/* Timetable Display */}
            {timetableData.length > 0 ? (
                <table className="timetable">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timetableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.time}</td>
                                <td>{row.monday}</td>
                                <td>{row.tuesday}</td>
                                <td>{row.wednesday}</td>
                                <td>{row.thursday}</td>
                                <td>{row.friday}</td>
                                <td>{row.saturday}</td>
                                <td>{row.sunday}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading timetable...</p>
            )}
        </div>
    );
};

export default Timetable;
