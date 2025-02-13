import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css"; // Add styles for full blog page
import { getDatabase, ref, onValue } from "firebase/database";
import QueryForm from "../../components/QueryForm/QueryForm";
import { Link } from "react-router-dom";
import BlogsSection from "../../components/Blogs/BlogsSection";
const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const blogRef = ref(db, `news/${blogId}`);
    onValue(blogRef, (snapshot) => {
      setBlog(snapshot.val());
    });
  }, [blogId]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <div className="blog-details-mainbox">
        <div className="blog-details-blog-section">
          <BlogsSection/>
        </div>
        <div className="blog-details-container">
          <h1>{blog.title}</h1>
          <p>{blog.date}</p>
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <p>{blog.fullDescription}</p>
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

export default BlogDetails;
