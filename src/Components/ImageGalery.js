import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Mbimg from '../img/mb.jpeg';
import Apimg from '../img/ap.jpeg';
import Gbimg from '../img/gb.jpeg';
// Diğer resimleri buraya import edin

import '../App.css';

const images = [Mbimg, Apimg, Gbimg];

function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (selectedIndex + 1) % images.length;
      setSelectedIndex(newIndex);
    }, 3000); // 3 saniye

    return () => clearInterval(interval);
  }, [selectedIndex]);

  return (
    <div className="App">
      <Carousel selectedItem={selectedIndex} onChange={handleSelect} showIndicators={false} showArrows={false} showThumbs={false} swipeable={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img className='border rounded-3xl' src={image} alt={`Resim ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageGallery;
