// Gallery.js

import React, { useState, useEffect } from 'react';
import './Gallery.css';

function Gallery({ images }) {
  const [lightboxOuvert, setLightboxOuvert] = useState(false);
  const [imageSelectionnee, setImageSelectionnee] = useState(null);
  const [likes, setLikes] = useState(Array(images.length).fill(0));
  const [isLiked, setIsLiked] = useState(Array(images.length).fill(false));

  const ouvrirLightbox = (index) => {
    setImageSelectionnee(index);
    setLightboxOuvert(true);
  };

  const fermerLightbox = () => {
    setLightboxOuvert(false);
    setImageSelectionnee(null);
  };

  const handleLike = (index) => {
    const newLikes = [...likes];
    const newIsLiked = [...isLiked];

    newLikes[index] += newIsLiked[index] ? 1 : 1;
    newIsLiked[index] = !newIsLiked[index];

    setLikes(newLikes);
    setIsLiked(newIsLiked);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (lightboxOuvert && e.key === 'Escape') {
        fermerLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [lightboxOuvert]);

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index} onClick={() => ouvrirLightbox(index)}>
          <button className={`like-button ${isLiked[index] ? 'liked' : ''}`} onClick={(e) => { e.stopPropagation(); handleLike(index); }}>
            ❤️ {likes[index]}
          </button>
          <img src={image.url} alt={image.alt} loading="lazy" />
          <p>{image.caption}</p>
        </div>
      ))}

      {lightboxOuvert && (
        <div className="lightbox" onClick={fermerLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={fermerLightbox}>×</span>
            <img src={images[imageSelectionnee].url} alt={images[imageSelectionnee].alt} />
            <p>{images[imageSelectionnee].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
