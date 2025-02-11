import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import "./TrendingSection.css";

const TrendingSection = () => {
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    const trendingRef = ref(database, "trendingSection");
    onValue(trendingRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const newsArray = Object.values(data);
        setTrendingNews(newsArray);
      }
    });
  }, []);

  return (
    <div className="trending-section">
      <div className="trending-header">Trending News</div>
      {trendingNews.map((item, index) => (
        <div className="news-item" key={index}>
          <div className="news-category">{item.category}</div>
          <div className="news-headline">{item.headline}</div>
        </div>
      ))}
    </div>
  );
};

export default TrendingSection;
