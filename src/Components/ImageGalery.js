import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Mbimg from '../img/mb.jpeg'
import Apimg from '../img/ap.jpeg'
import Gbimg from '../img/gb.jpeg'
// Diğer resimleri buraya import edin

import '../App.css';

const images = [Mbimg, Apimg, Gbimg];

function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="App ">
      <Carousel selectedItem={selectedIndex} onChange={handleSelect} showThumbs={false} swipeable={true}>
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