import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Auction from "../assets/Auction.jpg"
import auction from "../assets/auction.png"
export default function Slider() {
  return (
    <Carousel autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={false} showArrows={false} stopOnHover={false}>
   
    <div>
        <img src={auction} className='max-h-[80vh] rounded-2xl'/>
     
    </div>
    <div>
        <img src={Auction} className='max-h-[80vh] rounded-2xl' />
        
    </div>
</Carousel>
  )
}
