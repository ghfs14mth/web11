import React from "react";
import "./Alumni.css";

const Alumni = () => {
  const stats = [
    { title: "National Exam Toppers", value: "50+" },
    { title: "Sports Medals", value: "120+" },
    { title: "Scholarship Winners", value: "200+" },
    { title: "University Placements", value: "500+" },
  ];

  const toppers = [
    {
      name: "Tanisha Bansal",
      year: "2023",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      name: "Shaurya Bansal",
      year: "2022",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      name: "Vansh Bansal",
      year: "2021",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
  ];

  return (
    <div className="alumni-container">
      {/* Section Header */}
      <h3 className="alumni-header">Our Alumni Achievements</h3>
      
      {/* Stats Section */}
      <div className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-title">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Alumni Overview */}
      <div className="alumni-overview">
        <p>
          Over the years, our students have set new benchmarks in academics, sports, and extracurricular activities.
          Our alumni have excelled in competitive exams, won international sports competitions, and achieved
          scholarships from prestigious universities worldwide.
        </p>
      </div>

      {/* Toppers Section */}
      <h3 className="toppers-header">Meet Our Toppers</h3>
      <div className="toppers-section">
        {toppers.map((topper, index) => (
          <div key={index} className="topper-card">
            <img
              src={topper.image}
              alt={`${topper.name}`}
              className="topper-image"
            />
            <h4 className="topper-name">{topper.name}</h4>
            <p className="topper-year">{topper.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
