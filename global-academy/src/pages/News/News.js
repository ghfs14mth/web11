import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./News.css"; // Add styles for the blog layout
import { getDatabase, ref, onValue } from "firebase/database";
import QueryForm from "../../components/QueryForm/QueryForm";
const News = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const blogsRef = ref(db, "news");
    onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const blogsArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setBlogs(blogsArray);
      }
    });
  }, []);

  return (
    <div>
      <div className="news-container">
        <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', fontWeight: '700' }}>News</p>
        <div className="news-grid">
          {blogs.map((blog) => (
            <div className="news-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} className="news-image" />
              <div className="news-content">
                <h3>{blog.title}</h3>
                <p>{blog.date}</p>
                <p>{blog.shortDescription}</p>
                <Link to={`/about/news/${blog.id}`} className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
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

export default News;
