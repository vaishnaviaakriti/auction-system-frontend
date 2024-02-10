import React from 'react'
import { Link } from 'react-router-dom'
import a from "../assets/laptop-mallet-table.jpg"

export default function Navbar() {
  return (
    
            
        
        <nav className='w-full h-20 bg-black flex items-center justify-between  p-4'>
        
        <div className='flex items-center'>
          <div className="h-10 w-10 rouned full overflow-hidden">
        <img src={a} alt="logo" className='h-full w-full object-cover'/>
        </div>
         <p className='text-white text-center ml-4 font-bold text-2xl italic'>ONLINE AUCTION SYSTEM</p>   
        </div>
        <div className="flex items-center space-x-4">
        <Link to="/Home" className="text-white">
          Home
        </Link>
        <Link to="/About" className="text-white">
          About
        </Link>
        <Link to="/Contact" className="text-white">
          Contact
        </Link>
        <Link to="/Sellitem" className="text-white">
          Sell 
        </Link>
      </div>
    </nav>
  );
}
