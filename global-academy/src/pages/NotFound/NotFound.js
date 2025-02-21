import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import QueryForm from "../../components/QueryForm/QueryForm";
import Footer from "../../components/Footer/Footer";
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
            <Footer/>
            <QueryForm />
        </div>
    );
};

export default NotFoundPage;
