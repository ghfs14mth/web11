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
import AICodingHub from "../../components/CodingHub/AICodingHub";
import Footer from "../../components/Footer/Footer";
import "../../components/RebrandingSection/RebrandingSection.css";
import Rocket from '../../assets/rocket.png';

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

            <section className="rebranding-section">
                {/* Starry Background Overlay */}
                <div className="stars"></div>

                {/* Moving Rocket */}
                <img
                    src={Rocket} /* Replace with a better rocket SVG */
                    alt="Rocket"
                    className="rocket"
                />

                {/* Rebranding Text (Now Floating) */}
                <div className="rebranding-text">
                    <h1 className="neon-text">🚀 Future Innovators Start Here!</h1>
                    <p>
                        AI | Space Science | Coding | Mathematics
                        <br />
                        <strong>Shaping the next-gen thinkers at GAPS!</strong>
                    </p>
                </div>
            </section>
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
            <OperationsSection />
            <AICodingHub />
            <div className="home-mobile-right-blogs">
                <BlogsSection />
            </div>
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
