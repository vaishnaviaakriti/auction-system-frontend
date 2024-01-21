import React from 'react'
import Slider from '../Components/Slider'
import Card from '../Components/Card'
export default function Home
() {
  return (
    <div className='flex justify-center  flex-col items-center'>
      <div className='max-w-[70vw]'>
        <Slider>

        </Slider>
        </div>
        <div  className='bg-gray-500 w-full flex justify-center mt-10 h-48 items-center flex-col'>
            <p className='text-white font-display'>
                exciting Bids,big Wins
                
            </p>
            <button className='flex-col text-white inline-block py-[10px] px-[20px] text-[24px] font-bold text-center decoration-none bg-[#ff5252] border-black border-[2px] rounded-[10px]  shadow-[5px_5px_0px_black] duration-[0.3s]transition-all ease-in hover:bg-white hover:text-[#ff5252] hover:border-[#ff5252] hover:shadow-[#ff5252] active:shadow-none active:bg-[#fcf414] active:translate-y-[4px]'>Explore Now</button>
        </div>
<div className='flex flex-row'> 
  <Card title={"music"} image={"https://img.icons8.com/papercut/60/musical-notes.png"}/>
  <Card/>
  <Card/>
</div>
    </div>
  )
}
