import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import { getDatabase, ref, onValue } from "firebase/database";
import QueryForm from "../../components/QueryForm/QueryForm";
import IncidentCalendar from "../../components/IncidentCalendar/IncidentCalendar";
import PastProductions from "../../components/PastProductions/PastProductions";
import youtubeIcon from '../../assets/youtube.jpg';
import vimeoIcon from '../../assets/vimeo.png';
import ArtGallery from "../../components/ArtGallery/ArtGallery";
const Events = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTab, setSelectedTab] = useState("Calendar");

  useEffect(() => {
    // Fetch carousel images from Firebase Realtime Database
    const db = getDatabase();
    const carouselRef = ref(db, "incidents/carousel");
    onValue(carouselRef, (snapshot) => {
      const data = snapshot.val();
      setCarouselImages(data || []);
    });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselImages.length - 1 : prevSlide - 1
    );
  };

  const tabsContent = {
    Calendar: (
      <div>
        <IncidentCalendar />
      </div>
    ),
    "Past Productions": (
      <div>
        <PastProductions />
      </div>
    ),
    "Livestream/Recordings": (
      <div>
        <h3>Livestream and Recordings</h3>
        <p>
          Watch livestreams and recordings of our events on Vimeo and YouTube.
        </p>
        <div className="stream-icons">
          <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
            <img style={{ height: '50px', width: '80px', border: '0.5px solid #333' }}
              src={vimeoIcon}
              alt="Vimeo"
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={{ height: '50px', width: '80px', border: '0.5px solid #333' }}
              src={youtubeIcon}
              alt="YouTube"
            />
          </a>
        </div>
      </div>
    ),
    "Visiting Artist Gallery": (
      <div>
        <ArtGallery />
      </div>
    )
  };

  return (
    <div>
      <div className="incidents-page">
        <h1>Events</h1>

        {/* Carousel */}
        <div className="incidents-carousel-container">
          {carouselImages.length > 0 ? (
            <div className="incidents-carousel">
              <button className="incidents-carousel-control prev" onClick={prevSlide}>
                &#10094;
              </button>
              <div className="incidents-carousel-slide">
                {carouselImages[currentSlide] ? (
                  <>
                    <img
                      src={carouselImages[currentSlide].url}
                      alt={`Slide ${currentSlide}`}
                    />
                    <p className="incidents-carousel-description">
                      {carouselImages[currentSlide].description}
                    </p>
                  </>
                ) : (
                  <div className="carousel-placeholder">
                    <p>No image available</p>
                  </div>
                )}
              </div>
              <button className="incidents-carousel-control next" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          ) : (
            <p>Loading carousel...</p>
          )}
        </div>

        {/* Tabs */}
        <div className="incidents-tabs">
          {Object.keys(tabsContent).map((tab) => (
            <button
              key={tab}
              className={`tab-button ${selectedTab === tab ? "active-tab" : ""}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="tab-content">{tabsContent[selectedTab]}</div>
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

export default Events;
