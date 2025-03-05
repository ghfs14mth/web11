import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css"; // Add styles for full blog page
import { getDatabase, ref, onValue } from "firebase/database";
import QueryForm from "../../components/QueryForm/QueryForm";
import BlogsSection from "../../components/Blogs/BlogsSection";
import Footer from "../../components/Footer/Footer";
import BlogTemplate from '../../assets/template-Blog.jpg';
const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const db = getDatabase();
    const blogRef = ref(db, `news/${blogId}`);
    onValue(blogRef, (snapshot) => {
      setBlog(snapshot.val());
    });
  }, [blogId]);

  if (!blog) return (<div>
    <div className="blog-details-container">
      <h1>Loading</h1>
      <div className="blog-details-contentbox-main">
        <img
          loading="eager"
          src={BlogTemplate}
          alt={"template-blog-image"}
          className={`blog-image-base`}
          type="jpg" />
      </div>
    </div>
  </div>)

  return (
    <div>
      <div className="blog-details-container">
        <h1>{blog.title}</h1>
        <p>{blog.date}</p>
        <div className="blog-details-contentbox-main">
          <img
            loading="eager"
            src={imageLoaded ? blog.image : BlogTemplate}
            alt={blog.title}
            className={`blog-image-base`}
            onLoad={() => setImageLoaded(true)}
            type="avif" />
          <div className="blog-details-blog-section">
            <BlogsSection />
          </div>
        </div>
        <div className="blog-details-contentbox">
          <div className="blog-details-blog-section-mobile">
            <BlogsSection />
          </div>
          <div className="blog-details-content">
            {blog.fullDescription.split("\n\n").map((block, index) => {
              // Convert "## " to <h2>
              if (block.startsWith("## ")) {
                return <h2 key={index}>{block.replace("## ", "")}</h2>;
              }
              // Convert "### " to <h3>
              if (block.startsWith("### ")) {
                return <h3 key={index}>{block.replace("### ", "")}</h3>;
              }
              // Convert **bold text** into <strong> tags
              const formattedText = block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
              return <p key={index} dangerouslySetInnerHTML={{ __html: formattedText }}></p>;
            })}
          </div>
        </div>
      </div>

      <Footer />
      <QueryForm />
    </div>
  );
};

export default BlogDetails;
