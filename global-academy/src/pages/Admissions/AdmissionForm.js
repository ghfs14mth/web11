import React, { useActionState } from "react";
import { database } from "../../firebase"; // Ensure Firebase is properly set up
import { ref, push } from "firebase/database";
import "./AdmissionForm.css";

const AdmissionForm = () => {
    // Define initial form state
    const initialState = {
        studentName: "",
        dob: "",
        fatherName: "",
        fatherQualification: "",
        fatherOccupation: "",
        motherName: "",
        motherQualification: "",
        annualIncome: "",
        houseNo: "",
        village: "",
        postOffice: "",
        tehsil: "",
        district: "",
        state: "",
        phoneFather: "",
        phoneMother: "",
        studentClass: ""
    };

    // useActionState to manage form submission
    const [formData, submitForm, isSubmitting] = useActionState(
        async (state, e) => {
            e.preventDefault();
            // Validate form
            if (!state.studentName.trim()) return { error: "Student Name is required" };
            if (!state.dob) return { error: "Date of Birth is required" };
            if (!state.fatherName.trim()) return { error: "Father’s Name is required" };
            if (!state.motherName.trim()) return { error: "Mother’s Name is required" };
            if (!state.annualIncome.trim()) return { error: "Annual Income is required" };
            if (!state.phoneFather.trim() || !/^\d{10}$/.test(state.phoneFather))
                return { error: "Valid Father’s Phone Number is required" };
            if (!state.phoneMother.trim() || !/^\d{10}$/.test(state.phoneMother))
                return { error: "Valid Mother’s Phone Number is required" };
            if (!state.studentClass) return { error: "Please select a class" };

            try {
                const admissionsRef = ref(database, "admissions/forms");
                await push(admissionsRef, state);
                alert("Form submitted successfully!");
                return initialState; // Reset form
            } catch (error) {
                console.error("Error submitting form:", error);
                return { error: "Error submitting form. Please try again." };
            }
        },
        initialState
    );

    return (
        <div className="admission-form-container">
            <h2 className="school-name">Global Academy Public School</h2>
            <p className="school-details">
                HIMUDA Colony, Shubh Khera, Paonta Sahib (HP) | Phone: 9418085224, 8219965912
            </p>
            <h3 className="form-title">REGISTRATION FORM (SESSION 2025-2026)</h3>

            <form id="admission-form" name="admission-form" onSubmit={submitForm}>
                <div className="form-group-admission">
                    <label htmlFor="student-name">Name of the Student:</label>
                    <input id="student-name" type="text" name="studentName" value={formData.studentName} onChange={submitForm} />
                </div>

                <div className="form-group-admission">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input id="dob" type="date" name="dob" value={formData.dob} onChange={submitForm} />
                </div>

                <div className="form-group-admission">
                    <label htmlFor="student-class">Class:</label>
                    <select id="student-class" name="studentClass" value={formData.studentClass} onChange={submitForm} className="dropdown-admission-form">
                        <option value="">Select Class</option>
                        {[...Array(12).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                                {num + 1}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group-admission">
                    <label htmlFor="father-name">Father’s Name:</label>
                    <input id="father-name" type="text" name="fatherName" value={formData.fatherName} onChange={submitForm} />
                </div>

                <div className="form-group-admission">
                    <label htmlFor="father-qualification">Father’s Qualification:</label>
                    <input id="father-qualification" type="text" name="fatherQualification" value={formData.fatherQualification} onChange={submitForm} />
                </div>

                <div className="form-group-admission">
                    <label htmlFor="father-occupation">Father’s Occupation:</label>
                    <input id="father-occupation" type="text" name="fatherOccupation" value={formData.fatherOccupation} onChange={submitForm} />
                </div>

                <div className="form-group-admission">
                    <label htmlFor="mother-name">Mother’s Name:</label>
                    <input id="mother-name" type="text" name="motherName" value={formData.motherName} onChange={submitForm} />
                </div>

                <div className="form-group-admission">
                    <label htmlFor="mother-qualification">Mother’s Qualification:</label>
                    <input id="mother-qualification" type="text" name="motherQualification" value={formData.motherQualification} onChange={submitForm} />
                </div>

                <div className="form-group-admission">
                    <label htmlFor="annual-income">Annual Income (from all sources): Rs.</label>
                    <input id="annual-income" type="text" name="annualIncome" value={formData.annualIncome} onChange={submitForm} />
                </div>

                <h4>Address</h4>
                <div className="form-group-admission">
                    <label htmlFor="house-no">House No.:</label>
                    <input id="house-no" type="text" name="houseNo" value={formData.houseNo} onChange={submitForm} />
                </div>

                <div className="form-group-admission">
                    <label htmlFor="phoneFather">Phone (Father):</label>
                    <input id="phoneFather" type="text" name="phoneFather" value={formData.phoneFather} onChange={submitForm} />
                </div>
                
                <div className="form-group-admission">
                    <label htmlFor="phoneMother">Phone (Mother):</label>
                    <input id="phoneMother" type="text" name="phoneMother" value={formData.phoneMother} onChange={submitForm} />
                </div>

                {formData.error && <p className="error">{formData.error}</p>}

                <button name="submit-button" id="submit-button" type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default AdmissionForm;
