import React from 'react';
import './Gallery.css';

function Gallery({ images }) {
    return (
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.url} alt={image.alt} />
            <p>{image.caption}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Gallery;