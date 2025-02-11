import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import QueryForm from "../../components/QueryForm/QueryForm";
const NotFoundPage = () => {
    return (
        <div>
            <div className="not-found-container">
                <h1 className="not-found-title">404</h1>
                <h2 className="not-found-subtitle">Page Not Found</h2>
                <p className="not-found-message">
                    Oops! The page you're looking for doesn't exist. It might have been removed or the link may be broken.
                </p>
                <Link to="/" className="not-found-home-link">
                    Go Back to Home
                </Link>
            </div>
            <div className="home-page-footer">
                <div className="footer-links">
                    <Link to={`/privacy-policy`}>Privacy Policy</Link>
                    <Link to={`/about/visit-us`}>Site Map</Link>
                    <Link to={`/accessibility`}>Accessibility</Link>
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
            <QueryForm />
        </div>
    );
};

export default NotFoundPage;
