import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/zz.jpg";
import backgroundImage from "../assets/plss.png";


export default function Navbar() {
  return (
    <nav className='w-full h-40 bg-black flex items-center justify-between p-4' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
      <div className='flex items-center'>
        {/* <div className="h-10 w-10 rounded-full overflow-hidden">
          <img src={logo} alt="logo" className='h-full w-full object-cover rounded-full' />
        </div>
        <p className='text-white text-center ml-4 font-MySoul text-3xl italic'>ONLINE AUCTION SYSTEM</p> */}
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/Home" className="text-white hover:text-red-900">
          Home
        </Link>
        <Link to="/About" className="text-white hover:text-red-900">
          About
        </Link>
        <Link to="/Contact" className="text-white hover:text-red-900">
          Contact
        </Link>
        <Link to="/CustomerManagement" className="text-white hover:text-red-900">
          Customer 
         </Link>
        <Link to="/AdminLogin"className='text-white hover:text-red-900'>Admin</Link>
      </div>
    </nav>
  );
}
