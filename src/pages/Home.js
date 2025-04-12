import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = [
    "/videolar/video1.mp4",  // public klasöründen erişim
    "/videolar/video2.mp4"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Son videoya geldiğinde tekrar ilk videoya dön
        return (prevIndex + 1) % videos.length;
      });
    }, 5000); // 5 saniyede bir video değişecek

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="profile-card">
        <div className="image-section">
          <img
            src="/profile.jpg"
            alt="Mehmet Çetin Karabaş"
            className="profile-image"
          />
        </div>
        <div>
          <p className="name">Mehmet Çetin KARABAŞ</p>
          <p className="title">Grafik Tasarımcı & Sosyal Medya Uzmanı</p>
        </div>
      </div>

      {/* Kaydırmalı Video Galerisi */}
      <div className="video-gallery">
        <div className="gallery-container" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
          {videos.map((video, index) => (
            <video key={index} className="gallery-video" autoPlay loop muted>
              <source src={video} type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
