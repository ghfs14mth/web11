import React, { useState } from "react";
import { database } from "../../firebase";
import { ref, push } from "firebase/database";
import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    standard: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    guardianName: "",
    guardianContact: "",
    previousSchool: "",
    notes: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.standard ||
      !formData.dob ||
      !formData.gender ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const studentsRef = ref(database, "parents/registrations");
    push(studentsRef, formData)
      .then(() => {
        setSuccessMessage("Registration submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          standard: "",
          dob: "",
          gender: "",
          email: "",
          phone: "",
          address: "",
          guardianName: "",
          guardianContact: "",
          previousSchool: "",
          notes: "",
        });
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("Failed to submit registration. Please try again.");
      });
  };

  return (
    <div className="registration-container">
      <h1>Student Registration</h1>
      <p className="registration-intro">
        Please fill out the form below to register your child at Global Academy.
      </p>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="standard">Standard</label>
          <select
            id="standard"
            name="standard"
            value={formData.standard}
            onChange={handleChange}
            required
          >
            <option value="">--Select Standard--</option>
            {[...Array(12).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">--Select Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter 10-digit phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter complete address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="guardianName">Guardian's Name</label>
          <input
            type="text"
            id="guardianName"
            name="guardianName"
            placeholder="Enter guardian's name"
            value={formData.guardianName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="guardianContact">Guardian's Contact</label>
          <input
            type="tel"
            id="guardianContact"
            name="guardianContact"
            placeholder="Enter guardian's phone number"
            value={formData.guardianContact}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="previousSchool">Previous School</label>
          <input
            type="text"
            id="previousSchool"
            name="previousSchool"
            placeholder="Enter previous school name"
            value={formData.previousSchool}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Enter additional information (optional)"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="submit-button">
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default Registration;
