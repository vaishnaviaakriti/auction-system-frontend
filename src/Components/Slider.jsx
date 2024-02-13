import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import xz from "../assets/xz.jpg"
import auction from "../assets/auction.png"
import aa from "../assets/aa.jpg"
import Ab from "../assets/Ab.jpg"
import ac from "../assets/john-schnobrich-2FPjlAyMQTA-unsplash.jpg"
import jj from "../assets/laptop-mallet-table.jpg"
export default function Slider() {
  return (
    <Carousel autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={false} showArrows={false} stopOnHover={false} style={{ height: '100vh' }}>
      <div style={{ height: '100%' }}>
        <img src={ac} alt="Auction" style={{ maxHeight: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ height: '100%' }}>
        <img src={aa} alt="Auction" style={{ maxHeight: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ height: '100%' }}>
        <img src={Ab} alt="Auction" style={{ maxHeight: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ height: '100%' }}>
        <img src={xz} alt="Auction" style={{ maxHeight: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ height: '100%' }}>
        <img src={jj} alt="Auction" style={{ maxHeight: '100%', objectFit: 'cover' }} />
      </div>
    </Carousel>
  );
}