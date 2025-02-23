import React, { useState } from "react";
import { database } from "../../firebase"; // Ensure Firebase is properly set up
import { ref, push } from "firebase/database";
import "./AdmissionForm.css";

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        nationality: "",
        address: "",
        previousSchool: "",
        guardianName: "",
        guardianPhone: "",
    });
    
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!/^[a-zA-Z ]{2,}$/.test(formData.fullName)) newErrors.fullName = "Invalid name format";

        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";

        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit number";

        if (!formData.dob) newErrors.dob = "Date of Birth is required";
        if (!formData.gender) newErrors.gender = "Select your gender";
        if (!formData.nationality.trim()) newErrors.nationality = "Nationality is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.previousSchool.trim()) newErrors.previousSchool = "Enter previous school name";

        if (!formData.guardianName.trim()) newErrors.guardianName = "Guardian's Name is required";
        if (!/^[a-zA-Z ]{2,}$/.test(formData.guardianName)) newErrors.guardianName = "Invalid guardian name";

        if (!formData.guardianPhone.trim()) newErrors.guardianPhone = "Guardian's Phone is required";
        if (!/^\d{10}$/.test(formData.guardianPhone)) newErrors.guardianPhone = "Enter a valid 10-digit number";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return; // ✅ Fix: Stop submission if validation fails
        
        setLoading(true);
        try {
            const admissionsRef = ref(database, "admissions/forms"); // ✅ Reference to Realtime DB
            await push(admissionsRef, formData); // ✅ Push form data to Firebase
    
            alert("Form submitted successfully! ✅");
    
            // ✅ Clear the form correctly after submission
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                dob: "",
                gender: "",
                nationality: "",
                address: "",
                previousSchool: "",
                guardianName: "",
                guardianPhone: "",
            });
    
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("❌ Error submitting form. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="admission-form-container">
            <h2>Student Admission Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input type="text" name="fullName" placeholder="Enter full name" value={formData.fullName} onChange={handleChange} />
                    {errors.fullName && <span className="error">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>Phone:</label>
                    <input type="text" name="phone" placeholder="Enter phone number (10 digits)" value={formData.phone} onChange={handleChange} />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                    {errors.dob && <span className="error">{errors.dob}</span>}
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.gender && <span className="error">{errors.gender}</span>}
                </div>

                <div className="form-group">
                    <label>Nationality:</label>
                    <input type="text" name="nationality" placeholder="Enter nationality" value={formData.nationality} onChange={handleChange} />
                    {errors.nationality && <span className="error">{errors.nationality}</span>}
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" name="address" placeholder="Enter full address" value={formData.address} onChange={handleChange} />
                    {errors.address && <span className="error">{errors.address}</span>}
                </div>

                <div className="form-group">
                    <label>Previous School:</label>
                    <input type="text" name="previousSchool" placeholder="Enter previous school name" value={formData.previousSchool} onChange={handleChange} />
                    {errors.previousSchool && <span className="error">{errors.previousSchool}</span>}
                </div>

                <div className="form-group">
                    <label>Guardian's Name:</label>
                    <input type="text" name="guardianName" placeholder="Enter guardian's name" value={formData.guardianName} onChange={handleChange} />
                    {errors.guardianName && <span className="error">{errors.guardianName}</span>}
                </div>

                <div className="form-group">
                    <label>Guardian's Phone:</label>
                    <input type="text" name="guardianPhone" placeholder="Enter guardian's phone number" value={formData.guardianPhone} onChange={handleChange} />
                    {errors.guardianPhone && <span className="error">{errors.guardianPhone}</span>}
                </div>

                <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default AdmissionForm;
