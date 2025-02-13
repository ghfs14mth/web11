import React, { useEffect, useState } from "react";
import { ref, onValue, getDatabase } from "firebase/database";

import { Link } from "react-router-dom";
import "./BlogsSection.css";

const BlogsSection = () => {
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
    <div className="blogs-section">
      <h2 className="blogs-heading">Recently</h2>
      {blogs.map((blog, index) => (
        <Link to={`/about/news/${blog.id}`} className="blog-item" key={index}>
          <div className="blog-image">
            <img src={blog.image} alt={blog.title} />
          </div>
          <div className="blog-details">
            <div className="blog-title">
              {blog.title.length > 40 ? blog.title.substring(0, 40) + "..." : blog.title}
            </div>
            <div className="blog-date">{blog.date}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogsSection;
