import React from "react";
import "./VisitUS.css";
import locationPic from '../../assets/location.jpeg';

const VisitUs = () => {
  return (
    <div className="visit-us">
      <h2 className="visit-title">Visit Us</h2>
      
      {/* Map Section */}
      <div className="visit-map">
        <img
          src={locationPic} // Replace with the actual path to the map image
          alt="Map of School Location"
          className="visit-map-image"
        />
        <div className="visit-address">
          <div className="address-item">
            <strong>Global Academy</strong>
            <p>Himuda Colony, Shubh Khera</p>
            <p>Paonta Sahib, Himachal Pradesh, India</p>
            <a href="tel:+919418086224">+91 94180-86224</a>
          </div>
          <div className="address-item">
            <strong>Administration Center/ GHFS</strong>
            <p>Market Road/ H.No. 134</p>
            <p>Majra, Himachal Pradesh, India</p>
            <a href="tel:+919418486224">+91 94184-86224</a>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="visit-details">
        <div className="detail-section">
          <h4>If You Are the Parent of a Prospective Student</h4>
          <p>
            If you would like to tour the school, please contact Dr. Vishwa Jeet at{" "}
            <a href="mailto:dr.vishwa@gmail.com">dr.vishwa@gmail.com</a>.
          </p>
        </div>

        <div className="detail-section">
          <h4>If You Are an Educator</h4>
          <p>
            Because there are so many teachers and administrators from around the country
            who want to visit Global Academy, we designate several dates each school year
            to accommodate them.
          </p>
          <p>Contact Mrs. Tabassum Ansari at (+91) 94180-86224</p>
        </div>

        <div className="detail-section">
          <h4>If You Attended Global Academy</h4>
          <p>
            We enjoy seeing our alumni return. Please contact your former teachers in advance to
            coordinate your visit. Alumni must present a valid state-issued photo ID and sign in at
            the main office.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;
