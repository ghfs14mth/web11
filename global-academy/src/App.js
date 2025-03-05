import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// Lazy-loaded Components
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const AboutOption = lazy(() => import("./pages/About/AboutOption"));
const News = lazy(() => import("./pages/News/News"));
const BlogDetails = lazy(() => import("./pages/BlogDetails/BlogDetails"));
const Academics = lazy(() => import("./pages/Academics/Academics"));
const AcademicsOption = lazy(() => import("./pages/Academics/AcademicsOption"));
const Events = lazy(() => import("./pages/Events/Events"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const Admissions = lazy(() => import("./pages/Admissions/Admissions"));
const AdmissionsOption = lazy(() => import("./pages/Admissions/AdmissionsOption"));
const Students = lazy(() => import("./pages/Students/Students"));
const StudentOption = lazy(() => import("./pages/Students/StudentsOption"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));
const Parents = lazy(() => import("./pages/Parents/Parents"));
const ParentsOption = lazy(() => import("./pages/Parents/ParentsOption"));
const AccessibilityPage = lazy(() => import("./pages/Accessibility/Accessibility"));
const Volunteer = lazy(() => import("./pages/Volunteer/Volunteer"));

const LoadingFallback = () => <div className="spinner-container">
  <div className="spinner"></div>
</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path=":option" element={<AboutOption />} />
          </Route>
          <Route path="about/news" element={<News />} />
          <Route path="about/news/:blogId" element={<BlogDetails />} />
          <Route path="academics" element={<Academics />}>
            <Route path=":option" element={<AcademicsOption />} />
          </Route>
          <Route path="admissions" element={<Admissions />}>
            <Route path=":option" element={<AdmissionsOption />} />
          </Route>
          <Route path="students" element={<Students />}>
            <Route path=":option" element={<StudentOption />} />
          </Route>
          <Route path="parents" element={<Parents />}>
            <Route path=":option" element={<ParentsOption />} />
          </Route>
          <Route path="/events" element={<Events />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
