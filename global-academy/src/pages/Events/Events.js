import React, { useState, useEffect } from "react";
import "./Events.css";
import { getDatabase, ref, onValue } from "firebase/database";
import QueryForm from "../../components/QueryForm/QueryForm";
import PastProductions from "../../components/PastProductions/PastProductions";
import youtubeIcon from '../../assets/youtube.jpg';
import vimeoIcon from '../../assets/vimeo.png';
import ArtGallery from "../../components/ArtGallery/ArtGallery";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
const Events = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTab, setSelectedTab] = useState("Gallery");

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
    "Past Productions": (
      <div>
        <PastProductions />
      </div>
    ),
    "Livestream / Recordings": (
      <div>
        <h3>Livestream and Recordings</h3>
        <p>
          Watch livestreams and recordings of our events on Vimeo and YouTube.
        </p>
        <div className="stream-icons">
          <Link to="https://vimeo.com" target="_blank" rel="noopener noreferrer">
            <img style={{ height: '50px', width: '80px', border: '0.5px solid #333' }}
              src={vimeoIcon}
              alt="Vimeo"
            />
          </Link>
          <Link
            to="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={{ height: '50px', width: '80px', border: '0.5px solid #333' }}
              src={youtubeIcon}
              alt="YouTube"
            />
          </Link>
        </div>
      </div>
    ),
    "Gallery": (
      <div>
        <ArtGallery />
      </div>
    )
  };

  return (
    <div>
      <div className="incidents-page">
        <h3>Events</h3>

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
      <Footer/>
      <QueryForm />
    </div>
  );
};

export default Events;
