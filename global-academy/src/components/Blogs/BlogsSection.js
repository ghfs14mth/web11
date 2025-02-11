import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import { Link } from "react-router-dom";
import "./BlogsSection.css";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogsRef = ref(database, "blogsSection");
    onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const blogsArray = Object.values(data);
        setBlogs(blogsArray);
      }
    });
  }, []);

  return (
    <div className="blogs-section">
      <h2 className="blogs-heading">Most Popular</h2>
      {blogs.map((blog, index) => (
        <Link to={blog.link} key={index} className="blog-item">
          <div className="blog-image">
            <img src={blog.image} alt={blog.title} />
          </div>
          <div className="blog-details">
            <div className="blog-title">{blog.title}</div>
            <div className="blog-date">{blog.date}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogsSection;
