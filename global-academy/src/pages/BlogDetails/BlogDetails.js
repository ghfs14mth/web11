import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css"; // Add styles for full blog page
import { getDatabase, ref, onValue } from "firebase/database";
import QueryForm from "../../components/QueryForm/QueryForm";
import BlogsSection from "../../components/Blogs/BlogsSection";
import Footer from "../../components/Footer/Footer";
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
      <Footer/>
      <QueryForm />
    </div>
  );
};

export default BlogDetails;
