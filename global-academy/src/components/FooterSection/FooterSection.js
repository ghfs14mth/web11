import React from "react";
import "./FooterSection.css";
import schoolLogo from "../../assets/logo.png"; // Replace with the actual logo path
import { FaFacebookF, FaInstagram } from "react-icons/fa"; // Import icons
import {Link} from "react-router-dom";
const FooterSection = () => {
    return (
        <footer className="footer-section">
            <div className="footer-top">
                <div className="footer-column school-info">
                    <img src={schoolLogo} alt="School Logo" className="school-logo" />
                    <h2 className="school-name">Global Academy </h2>
                    <h2 className="school-name">Public School</h2>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Get in Touch</h3>
                    <p>Himuda Colony, Shubh Khera, Paonta Sahib</p>
                    <p>Distt. Sirmaur, (H.P.)</p>
                    <p><a href="tel:+919418086224">(+91) 94180-86224 (phone)</a></p>
                    <p><a href="tel:+918219969112">(+91) 82199-69112 (phone)</a></p>
                    <p><a href="mailto:globalacademy.paonta@gmail.com">globalacademy.paonta@gmail.com</a></p>
                </div>
                <div className="footer-column liRE">
                    <h3 className="footer-heading">Links & Resources</h3>
                    <ul>
                        <li>
                            <Link to={`/about/news`} className="blog-item" >Blogs</Link>
                        </li>
                        <li>
                            <Link to={`/academics/calendar`} className="blog-item" >Calendar</Link>
                        </li>
                        <li>
                            <Link to={`/about/staff-directory`} className="blog-item" >Faculty & Staff Directory</Link>
                        </li>
                        <li>
                            <Link to={`/students`} className="blog-item" >Login</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Connect With Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61570341120024" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/globalacademy_paontasahib/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaInstagram />
                        </a >
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    Global Academy Public School District. Sirmaur does not discriminate on the basis
                    of race, color, national origin, sex, disability, age, or any other
                    applicable status protected by federal or state law. Questions about
                    non-discrimination policies should be sent to GHFS,
                    Sirmaur District at Majra, Market Street (H.P)
                    <span style={{ textAlign: 'center' }}>(+91) 82199-69112 Email: <a href="mailto:globalacademy.paonta@gmail.com">globalacademy.paonta@gmail.com</a></span>
                </p>
            </div>
        </footer>
    );
};

export default FooterSection;
