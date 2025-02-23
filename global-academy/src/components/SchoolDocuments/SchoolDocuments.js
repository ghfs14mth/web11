import React, { useState, useEffect } from "react";
import "./SchoolDocuments.css";
import { getDatabase, ref, onValue } from "firebase/database"; // Import Realtime Database methods
import SDComm from '../../assets/school-building.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SchoolDocuments = () => {
    const [documents, setDocuments] = useState({});
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const database = getDatabase(); // Get the Realtime Database instance
                const documentsRef = ref(database, "school-documents"); // Reference to the 'school-documents' node

                // Fetch data from Realtime Database
                onValue(documentsRef, (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        const formattedDocs = {};

                        // Map through each category in the retrieved data
                        data.categories.forEach((item) => {
                            formattedDocs[item.category] = item.links;
                        });

                        setDocuments(formattedDocs);
                    } else {
                        console.error("No data found in Realtime Database!");
                    }
                });
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };

        fetchDocuments();
    }, []);

    const toggleCategory = (category) => {
        setActiveCategory((prevCategory) =>
            prevCategory === category ? null : category
        );
    };

    return (
        <div className="documents-container">
            {/* Title and Image */}
            <h2 className="documents-title">School Documents</h2>
            <img
                src={SDComm}
                alt="Boardroom"
                className="documents-image"
            />

            {/* Collapsible Sections */}
            <div className="documents-sections">
                {Object.keys(documents).map((category) => (
                    <div key={category} className="document-category">
                        <button
                            className={`category-button ${activeCategory === category ? "active" : ""
                                }`}
                            onClick={() => toggleCategory(category)}
                        > <FontAwesomeIcon icon={faGreaterThan} className="query-icon-greater-than" />
                            {category}
                        </button>
                        {activeCategory === category && (
                            <div className="category-content">
                                <ul>
                                    {documents[category].map((doc, index) => (
                                        <li key={index}>
                                            <Link to={doc.url} download target="_blank" rel="noopener noreferrer">
                                                {doc.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SchoolDocuments;
