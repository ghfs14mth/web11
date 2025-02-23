import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./Learning.css";
import { Link } from "react-router-dom";

const Learning = () => {
    const [learningData, setLearningData] = useState({});

    useEffect(() => {
        const db = getDatabase();
        const learningRef = ref(db, "students/learning");
        onValue(learningRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setLearningData(data);
            }
        });
    }, []);
    return (
        <div className="learning-container">
            <h1 className="learning-title">Learning Hub</h1>
            <p className="learning-subtitle">
                Latest news are available here. Click on a topic to explore learning resources.
            </p>

            {Object.keys(learningData).map((category) => (
                <div key={category} className="learning-category">
                    <h2>{category}</h2>
                    <ul>
                        {learningData[category].map((item, index) => (
                            <li key={index}>
                                <Link to={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Learning;
