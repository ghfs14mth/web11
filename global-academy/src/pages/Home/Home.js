import React from "react";
import TrendingSection from "../../components/Trending/TrendingSection";
import BlogsSection from "../../components/Blogs/BlogsSection";
import Carousel from "../../components/Carousel/Carousel";
import OperationsSection from "../../components/OperationsSection/OperationsSection";
import "./Home.css";
import EventsCarousel from "../../components/EventsCarousel/EventsCarousel";
import SocialMediaSection from "../../components/SocialMediaSection/SocialMediaSection";
import BannerSection from "../../components/BannerSection/BannerSection";
import FooterSection from "../../components/FooterSection/FooterSection";
import QueryForm from "../../components/QueryForm/QueryForm";
import { Link } from "react-router-dom";
import RebrandingSection from "../../components/RebrandingSection/RebrandingSection";
import AICodingHub from "../../components/CodingHub/AICodingHub";

const Home = () => {
    return (
        <div>
            <RebrandingSection />
            <div className="home-container">
                <div className="left-section">
                    <TrendingSection />
                </div>
                <div className="middle-section">
                    <Carousel databaseName={"carouselImages"} />
                </div>
                <div className="right-section">
                    <BlogsSection />
                </div>
            </div>
            <OperationsSection />
            <AICodingHub />
            <EventsCarousel />
            <SocialMediaSection />
            <BannerSection />
            <FooterSection />
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

export default Home;
