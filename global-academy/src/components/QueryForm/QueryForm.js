import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./QueryForm.css";
import { getDatabase, ref, push } from "firebase/database";

const QueryForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Firebase Database Integration
    const db = getDatabase();
    const queriesRef = ref(db, "queries");
    push(queriesRef, formData)
      .then(() => {
        alert("Query submitted successfully!");
        setFormData({ name: "", email: "", query: "" });
        setIsFormOpen(false);
      })
      .catch((error) => alert("Error submitting query: " + error.message));
  };

  return (
    <div className="query-form-container">
      {/* Floating Icon */}
      {!isFormOpen && (
        <div className="query-icon" onClick={toggleForm}>
          <FontAwesomeIcon icon={faPen} className="query-icon-pencil" />
          <span>Query</span>
        </div>
      )}

      {/* Expandable Form */}
      {isFormOpen && (
        <div className="query-form">
          <button className="close-button" onClick={toggleForm}>
            ✖
          </button>
          <form onSubmit={handleSubmit}>
            <h2>Submit Your Query</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Query:
              <textarea
                name="query"
                value={formData.query}
                onChange={handleInputChange}
                required
              ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default QueryForm;
