import React, { useState, useEffect } from "react";
import { getDatabase, ref, push, get } from "firebase/database";
import "./Volunteer.css";
import volunteerImg from "../../assets/vounteer-banner.jpg"; // Placeholder image

const Volunteer = () => {
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials from Firebase
    const fetchTestimonials = async () => {
      const db = getDatabase();
      const testimonialsRef = ref(db, "testimonials");
      const snapshot = await get(testimonialsRef);
      if (snapshot.exists()) {
        setTestimonials(Object.values(snapshot.val()));
      }
    };
    fetchTestimonials();
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase();
    push(ref(db, "volunteers"), volunteerData);
    setSubmitted(true);
  };

  // Handle input changes
  const handleChange = (e) => {
    setVolunteerData({ ...volunteerData, [e.target.name]: e.target.value });
  };

  return (
    <div className="volunteer-container">
      {/* Banner Section */}
      <div className="volunteer-banner">
        <img src={volunteerImg} alt="Volunteer" />
        <div className="banner-text">
          <h1>🌟 Become a Volunteer!</h1>
          <p>Help us organize school events, fundraisers, and mentorship programs.</p>
        </div>
      </div>

      {/* Volunteer Opportunities */}
      <div className="volunteer-opportunities">
        <h2>📌 Volunteer Opportunities</h2>
        <div className="opportunity-grid">
          <div className="opportunity-card">🎭 Event Planning</div>
          <div className="opportunity-card">📚 Student Tutoring</div>
          <div className="opportunity-card">🏆 Sports Coaching</div>
          <div className="opportunity-card">💡 Tech Support</div>
          <div className="opportunity-card">💖 Community Service</div>
          <div className="opportunity-card">💰 Fundraising</div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="volunteer-testimonials">
        <h2>⭐ What Our Volunteers Say</h2>
        <div className="testimonial-container">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <p>"{testimonial.feedback}"</p>
                <h4>- {testimonial.name}</h4>
              </div>
            ))
          ) : (
            <p>No testimonials yet. Be the first to share your experience!</p>
          )}
        </div>
      </div>

      {/* Volunteer Sign-Up Form */}
      <div className="volunteer-form">
        <h2>✍️ Sign Up to Volunteer</h2>
        {submitted ? (
          <p className="thank-you-msg">🎉 Thank you for signing up! We'll be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
            <select name="interest" onChange={handleChange} required>
              <option value="">Select an area of interest</option>
              <option value="Event Planning">Event Planning</option>
              <option value="Student Tutoring">Student Tutoring</option>
              <option value="Sports Coaching">Sports Coaching</option>
              <option value="Tech Support">Tech Support</option>
              <option value="Community Service">Community Service</option>
              <option value="Fundraising">Fundraising</option>
            </select>
            <button type="submit" className="volunteer-btn">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Volunteer;
