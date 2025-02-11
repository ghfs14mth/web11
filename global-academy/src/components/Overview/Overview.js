import React from "react";
import "./Overview.css"; // Optional CSS file for styling the overview section
import schoolImage from "../../assets/school-building.jpg";
import festivalImage from "../../assets/festival-celebration.jpg";
import techClassroomImage from "../../assets/tech-classroom.jpg";
import sportsImage from "../../assets/sports-event.jpg";

const Overview = () => {
  return (
    <div className="overview-container">
      <h1>About Global Academy</h1>
      
      <section className="overview-section">
        <h2>Our History</h2>
        <p>
          Global Academy was established in 2012 with the vision to provide students with a holistic education that inspires academic excellence and character building. Since its inception, the school has achieved numerous milestones in academics and sports, empowering students to excel in competitive exams and represent the school in national and international sporting events.
        </p>
        <img src={schoolImage} alt="School Building" className="overview-image" />
      </section>

      <section className="overview-section">
        <h2>Nurturing Talents</h2>
        <p>
          At Global Academy, we believe every student is unique, and we strive to support their creative, intellectual, and athletic talents. The school offers platforms such as science exhibitions, debate competitions, art and music festivals, and sports championships to encourage students to showcase their potential and develop their skills.
        </p>
        <img src={sportsImage} alt="Sports Event" className="overview-image" />
      </section>

      <section className="overview-section">
        <h2>Technology-Driven Education</h2>
        <p>
          From the very beginning, Global Academy has embraced technology to enhance the teaching and learning experience. Our classrooms are equipped with smart boards, and we use tech-driven teaching methods to make learning more interactive and engaging. In recent years, we’ve integrated artificial intelligence (AI) into our curriculum to prepare students for the challenges of the modern world.
        </p>
        <img src={techClassroomImage} alt="Technology-Driven Classroom" className="overview-image" />
      </section>

      <section className="overview-section">
        <h2>Cultural Learning</h2>
        <p>
          We believe in fostering a deep connection to cultural roots. The school celebrates various festivals and events, ensuring students appreciate and respect diversity while learning about traditions and customs.
        </p>
        <img src={festivalImage} alt="Festival Celebration" className="overview-image" />
      </section>

      <section className="overview-section">
        <h2>Equality and Inclusion</h2>
        <p>
          Global Academy provides an inclusive environment where every student is treated equally, irrespective of their caste, creed, or background. We aim to build a compassionate and united community, ensuring that every child feels valued and supported.
        </p>
      </section>
    </div>
  );
};

export default Overview;
