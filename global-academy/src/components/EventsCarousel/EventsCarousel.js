import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import "./EventsCarousel.css";

const EventsCarousel = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsRef = ref(database, "events");
    onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setEvents(Object.values(data));
      }
    });
  }, []);

  return (
    <div className="events-carousel">
      <div className="events-header">
        <div className="events-highlight">Upcoming Events</div>
        <p>Swipe to check out more--</p>
      </div>
      <div className="carousel-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={window.innerWidth > 768}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false
          }} // Disable navigation on mobile
          spaceBetween={10}
          slidesPerView={1} // Show only 1 card per view on mobile
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={event.id}>
              <div className={`event-dd-card ${index % 2 === 0 ? "dark-dd-card" : "light-card"}`}>
                <div className="event-date">{event.date}</div>
                <h3 className="event-title">{event.title}</h3>
                <div className="event-time-location">
                  <div className="event-time">🕒 {event.time}</div>
                  <div className="event-location">📍 {event.location}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventsCarousel;
