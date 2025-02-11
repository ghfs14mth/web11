import React, { useState, useEffect } from "react";
import "./ArtGallery.css";
import { getDatabase, ref, onValue } from "firebase/database";

const ArtGallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    // Fetch gallery images from Firebase Realtime Database
    const db = getDatabase();
    const galleryRef = ref(db, "incidents/artGallery");
    onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      setGalleryImages(data || []);
    });
  }, []);

  return (
    <div className="art-gallery-container">
      <h2 style={{fontSize:'24px'}}>Art Gallery</h2>
      <div className="art-gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            className="art-gallery-item"
            key={index}
            onClick={() => setZoomedImage(image.url)}
          >
            <img
              src={image.url || "https://via.placeholder.com/150"}
              alt={image.title || "Artwork"}
            />
          </div>
        ))}
      </div>

      {/* Zoomed Image View */}
      {zoomedImage && (
        <div className="art-gallery-zoom" onClick={() => setZoomedImage(null)}>
          <div className="art-gallery-zoom-image">
            <img src={zoomedImage} alt="Zoomed Artwork" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtGallery;
