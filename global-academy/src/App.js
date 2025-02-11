import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AboutOption from "./pages/About/AboutOption";
import News from "./pages/News/News"; // Import News Component
import BlogDetails from "./pages/BlogDetails/BlogDetails"; // Import BlogDetails Component
import Academics from "./pages/Academics/Academics";
import AcademicsOption from "./pages/Academics/AcademicsOption";
import Events from "./pages/Events/Events";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Admissions from "./pages/Admissions/Admissions";
import AdmissionsOption from "./pages/Admissions/AdmissionsOption";
import Students from "./pages/Students/Students";
import StudentOption from "./pages/Students/StudentsOption";
import NotFoundPage from "./pages/NotFound/NotFound";
import Parents from "./pages/Parents/Parents";
import ParentsOption from "./pages/Parents/ParentsOption";
import AccessibilityPage from "./pages/Accessibility/Accessibility";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Section with Dynamic Routes */}
        <Route path="about" element={<About />}>
          <Route path=":option" element={<AboutOption />} />
        </Route>

        {/* News Section */}
        <Route path="about/news" element={<News />} />
        <Route path="about/news/:blogId" element={<BlogDetails />} />

        {/* Academics Section */}
        <Route path="academics" element={<Academics />}>
          <Route path=":option" element={<AcademicsOption />} />
        </Route>
        {/* Admissions Section */}
        <Route path="admissions" element={<Admissions />}>
          <Route path=":option" element={<AdmissionsOption />} />
        </Route>
        {/* Students Section */}
        <Route path="students" element={<Students />}>
          <Route path=":option" element={<StudentOption />} />
        </Route>
        {/* Parents Section */}
        <Route path="parents" element={<Parents />}>
          <Route path=":option" element={<ParentsOption />} />
        </Route>
        {/* Other Static Pages */}
        <Route path="/events" element={<Events />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
