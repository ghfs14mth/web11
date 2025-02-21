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
            <Footer/>
            <QueryForm />
        </div>
    );
};

export default Home;
