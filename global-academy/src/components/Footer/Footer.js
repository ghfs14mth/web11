import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div>
            <div className="home-page-footer">
                <div className="footer-links">
                    <Link className='footer-links-link' to={`/privacy-policy`}>Privacy Policy</Link>
                    <Link className='footer-links-link' to={`/about/visit-us`}>Site Map</Link>
                    <Link className='footer-links-link' to={`/accessibility`}>Accessibility</Link>
                </div>
                <div className="footer-powered">
                    <span>Powered by GHFS</span>
                </div>
                <div className="footer-language">
                    <select aria-label="Select language">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Footer