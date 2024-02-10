import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    
            
        
        <nav className='w-full h-auto bg-blue-500 flex flex-row justify-between  p-8 rounded-full'>
        
        <div className='flex flex-row self-center items-center'>
        <img src="../src/assets/Auction-Bidding.jpeg" alt="logo" className='h-5 w-5'/>
        
         <p className='text-white text-center ms-4 md:font-bold text-2xl'>ONLINE AUCTION SYSTEM</p>   
        </div>
        <div className='h-14 bg-gradient-to-r from-sky-500 to-indigo-500'></div>
        <div className='flex flex-row self-center'>
        
        <Link to={"/Home"}>
          <p className='text-white mr-4'>Home</p>

          
        </Link>
        
        <Link to={"/About"}>
          <p className='text-white mr-4'>About</p>
        </Link>
          <Link to={"/Contact"}>
          <p className='text-white mr-4'>Contact</p>
          
          </Link>  
          <Link to={"/SellItem"}>
          <p className='text-white'>SellItem</p>
          
          
          
          </Link>
        </div>

    </nav>
  )
}
