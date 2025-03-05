import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import "./Carousel.css";
import image1 from '../../assets/pahadi_kids_2024.jpeg';
import image2 from '../../assets/mass_sitting_2024.jpeg';
import image3 from '../../assets/dusshera_2024.jpeg';
import image4 from '../../assets/Karate_begins_2024.jpeg';
const Carousel = ({ databaseName }) => {
  const carouselSavedImages =
    [
      {
        "4": "",
        "caption": "Welcome to Global Academy",
        "id": 1,
        "image": image1
      },
      {
        "caption": "Empowering Students for the Future",
        "id": 2,
        "image": image2
      },
      {
        "caption": "Dusshera",
        "id": 3,
        "image": image3
      },
      {
        "caption": "Karate Practice Match",
        "id": 4,
        "image": image4
      }
    ]
  const [carouselImages, setCarouselImages] = useState(carouselSavedImages);



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
            <img loading="lazy" src={item.image} alt={item.caption} className="carousell-image" />
            <div className="carousell-caption">{item.caption}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
