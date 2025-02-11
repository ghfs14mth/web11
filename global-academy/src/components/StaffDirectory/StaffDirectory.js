import React, { useEffect, useState } from "react";
import "./StaffDirectory.css"; // Include custom CSS file for styling
import { getDatabase, ref, onValue } from "firebase/database"; // Firebase Realtime Database imports
import staff from '../../assets/staff.jpg';
const StaffDirectory = () => {
    const [staffData, setStaffData] = useState([]);

    useEffect(() => {
        // Fetching staff directory data from Firebase
        const db = getDatabase();
        const staffRef = ref(db, "staff-directory"); // Firebase reference to 'staff-directory' node
        onValue(staffRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const staffList = Object.values(data).map((item, index) => ({
                    id: index + 1, // Assign Sr. No
                    name: item.name,
                    roles: item.roles,
                }));
                setStaffData(staffList);
            }
        });
    }, []);

    return (
        <div className="staff-directory">
            <h1 className="section-title">Staff Directory</h1>

            {/* Image */}
            <div className="staff-image-container">
                <img
                    src={staff}
                    alt="Staff Directory"
                    className="staff-directory-image"
                />
            </div>

            {/* Staff Table */}
            <div className="staff-table-container">
                <h2 className="table-title">Our Amazing Staff</h2>
                <table className="staff-table">
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Teacher</th>
                            <th>Roles</th></tr>
                    </thead>
                    <tbody>
                        {staffData.length > 0 ? (
                            staffData.map((staff) => (
                                <tr key={staff.id}>
                                    <td>{staff.id}</td>
                                    <td>{staff.name}</td>
                                    <td>{staff.roles?.join(", ") || 'No roles assigned'}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No staff data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StaffDirectory;
