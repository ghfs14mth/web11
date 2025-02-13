import React, { useEffect, useState } from "react";
import "./SocialMediaSection.css";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";

const SocialMediaSection = () => {
  const [posts, setPosts] = useState([]);
  const [mediaTypes, setMediaTypes] = useState({});


  useEffect(() => {
    // Fetching Instagram posts from API
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=IGAAH5RdCSNAxBZAE5ETDN2RWh3aTJ3SGZAQdi1jLVFRNDFaUVhPNWdLUmZA6TnNNbW85YXN2V2YycmYxN3VYUFAxdFVWU3Vhb3hHdmF0R0NpQndWLVFZAYWM2ck5mSWo2QTF0TU9FUVowM0NXWjBHa00waUdMVk1aaXZAGWmFPQ29wQQZDZD`
        );
        const data = await response.json();
        if (data && data.data && mediaTypes) {
          const numberOfPosts = data.data.length;
          // Attaching media types fetched from Firebase
          const postsWithMediaType = data.data.map((post, index) => ({
            ...post,
            mediaType: mediaTypes[numberOfPosts - index] || "unknown", // Match post ID with media type from Firebase
          }));
          setPosts(postsWithMediaType);
        }
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchInstagramPosts();
  }, [mediaTypes]);

  useEffect(() => {
    // Fetching media types from Firebase
    const mediaTypesRef = ref(database, "instagramPosts/mediaTypes");
    onValue(mediaTypesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setMediaTypes(data);
    });
  }, []);

  return (
    <div className="social-media-section">
      <h2 className="section-title">Stay Connected</h2>
      <h3 className="social-title">Instagram</h3>
      <div className="posts">
        {posts.slice(0, 8).map((post, index) => (
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="post"
            key={index}
          >
            {post.mediaType === "image" ? (
              <img src={post.media_url} alt={post.caption} />
            ) : post.mediaType === "reel" ? (
              <video src={post.media_url} controls />
            ) : (
              <div className="placeholder">Media type not supported</div>
            )}
            {post.caption ? (post.caption.length > 40 ? post.caption.substring(0, 100) + "..." : post.caption) : "No caption available"}
          </a>
        ))}

      </div>
    </div>
  );
};

export default SocialMediaSection;
