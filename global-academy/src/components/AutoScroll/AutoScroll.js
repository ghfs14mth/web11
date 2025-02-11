import React, { useEffect, useRef } from "react";
import "./AutoScroll.css";

const AutoScroll = ({ children }) => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    const container = scrollContainer.current;
    let scrollDirection = 1; // 1 for downward, -1 for upward

    const scrollInterval = setInterval(() => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        scrollDirection = -1; // Reverse direction when the bottom is reached
      } else if (container.scrollTop <= 0) {
        scrollDirection = 1; // Reverse direction when the top is reached
      }
      container.scrollTop += scrollDirection; // Scroll up or down based on direction
    }, 30); // Adjust the interval time for smoother or faster scrolling

    return () => clearInterval(scrollInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="auto-scroll-container" ref={scrollContainer}>
      <div className="auto-scroll-content">{children}</div>
    </div>
  );
};

export default AutoScroll;
