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
import RebrandingSection from "../../components/RebrandingSection/RebrandingSection";
import AICodingHub from "../../components/CodingHub/AICodingHub";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <div className="marquee-box">
                <div className="marquee-container">
                    <div className="marquee-content">
                        📢 Admissions Open for 2025-26 | 🏆 English Speaking Course added to curriculum | 🎉 4 New Sports Academies Launched! | 🚀 First AI Enabled school in region!
                    </div>
                </div>
                <div className="carquee-container">
                    <div className="carquee-content">
                        📢 Admissions Open for 2025-26 | 🏆 English Speaking Course added to curriculum | 🎉 4 New Sports Academies Launched! | 🚀 First AI Enabled school in region!
                    </div>
                </div>
            </div>

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
            <div className="home-mobile-middle-carousel">
                <Carousel databaseName={"carouselImages"} />
            </div>
            <div className="home-mobile-right-blogs">
                <BlogsSection />
            </div>
            <OperationsSection />
            <AICodingHub />
            <EventsCarousel />
            <SocialMediaSection />
            <BannerSection />
            <FooterSection />
            <Footer />
            <QueryForm />
        </div>
    );
};

export default Home;
