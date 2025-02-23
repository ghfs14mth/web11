import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./Council.css";

const clubs = ["Art Club", "Science Club", "Sports Club", "Music Club"];

const Council = () => {
    const [clubData, setClubData] = useState({});
    const [openClub, setOpenClub] = useState(null);

    useEffect(() => {
        const db = getDatabase();
        const councilRef = ref(db, "students/council");
        onValue(councilRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setClubData(data);
            }
        });
    }, []);

    const toggleTable = (club) => {
        setOpenClub(openClub === club ? null : club);
    };

    return (
        <div className="council-container">
            <h1 className="council-title">Student Council</h1>
            <div className="club-tables">
                {clubs.map((club) => (
                    <div key={club} className="club-wrapper">
                        <div 
                            className={`club-header ${openClub === club ? "active" : ""}`}
                            onClick={() => toggleTable(club)}
                        >
                            {club}
                            <span className="dropdown-icon">{openClub === club ? "▲" : "▼"}</span>
                        </div>
                        <table className={`club-table ${openClub === club ? "open" : ""}`}>
                            <tbody>
                                {clubData[club] ? (
                                    clubData[club].map((member, index) => (
                                        <tr key={index} className="club-row">
                                            <td className="member-img">
                                                <img src={member.image} alt={member.name} />
                                            </td>
                                            <td className="member-info">
                                                <span className="member-name">{member.name}</span>
                                                <br />
                                                <span className="member-position">{member.position}</span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2" className="loading">Loading...</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Council;
