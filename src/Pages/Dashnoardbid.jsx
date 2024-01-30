// DashboardBid.js

import React from 'react';
import { Link } from 'react-router-dom';
import clothes from "../assets/clothes.jpeg"
const DashboardBid = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Main Header */}
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-semibold">Auction App</h1>
      </header>

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-8">
        <h2 className="text-3xl font-semibold mb-4">Current Auction</h2>

        {/* Auction Heading and Image */}
        <div className="bg-white p-8 rounded shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Auction Item Name</h3>

          {/* Auction Image */}
          <img
            src={clothes}  // Replace with your image source
            alt="Auction Item"
            className='max-h-[20vh] rounded-m' 
          />

          {/* Auction Details */}
          <p className="text-gray-700 mb-2">
            Description: “A gentleman’s choice of timepiece says as much about him as does his Saville Row suit.
          </p>
          <p className="text-gray-700 mb-2">Starting Bid: 500</p>
          <p className="text-gray-700 mb-2">ending Bid: 1000</p>
          {/* Bid Form */}
          <form className="flex flex-col max-w-sm">
            <label className="text-sm text-gray-600 mb-1" htmlFor="bidAmount">
              Your Bid:
            </label>
            <input
              type="number"
              id="bidAmount"
              name="bidAmount"
              className="border rounded py-2 px-3 mb-2"
              placeholder="Enter your bid amount"
            />

            {/* Submit Bid Button */}
            <Link to="/Contact">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit Bid
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardBid;
