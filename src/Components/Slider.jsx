import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import xz from "../assets/s1.png";
import aa from "../assets/s2.png";
import Ab from "../assets/s3.png";
import ac from "../assets/s4.png";
import jj from "../assets/s5.png";

export default function Slider() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      stopOnHover={false}
      style={{ height: '100vh' }}
    >
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={xz} alt="Auction" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={aa} alt="Auction" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={Ab} alt="Auction" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={ac} alt="Auction" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={jj} alt="Auction" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
      </div>
    </Carousel>
  );
}
