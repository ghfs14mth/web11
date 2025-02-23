import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./News.css"; // Add styles for the blog layout
import { getDatabase, ref, onValue } from "firebase/database";
import QueryForm from "../../components/QueryForm/QueryForm";
import Footer from "../../components/Footer/Footer";
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
        <h3 >News</h3>
        <div className="news-grid">
          {blogs.map((blog) => (
            <div className="news-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} className="news-image" />
              <div className="news-content">
                <h3>{blog.title}</h3>
                <p>{blog.date}</p>
                <p>{blog.shortDescription.length > 60 ? blog.shortDescription.substring(0, 60) + "..." : blog.shortDescription}</p>
                <Link to={`/about/news/${blog.id}`} className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
      <QueryForm />
    </div>
  );
};

export default News;
