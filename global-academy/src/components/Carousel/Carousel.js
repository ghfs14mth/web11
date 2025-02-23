import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import "./Carousel.css";

const Carousel = ({ databaseName }) => {
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    const carouselRef = ref(database, databaseName);
    onValue(carouselRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCarouselImages(Object.values(data));
      }
    });
  }, [databaseName]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  };

  return (
    <div className="carousell-container">
      <Slider {...settings}>
        {carouselImages.map((item) => (
          <div className="carousell-slide" key={item.id}>
            <img src={item.image} alt={item.caption} className="carousell-image" />
            <div className="carousell-caption">{item.caption}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
