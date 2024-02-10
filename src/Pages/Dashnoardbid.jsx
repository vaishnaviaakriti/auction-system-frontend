import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clothes from '../assets/clothes.jpeg';

const DashboardBid = () => {
  const [secondsLeft, setSecondsLeft] = useState(600); // Initial value for 10 minutes
  const [highestBid, setHighestBid] = useState(0);
  const [highestBidder, setHighestBidder] = useState('');

  // Function to update the timer every second
  const updateTimer = () => {
    setSecondsLeft((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
  };

  useEffect(() => {
    // Set up the interval to update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to format seconds into minutes and seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Function to handle bid submission
  const handleBidSubmit = (event) => {
    event.preventDefault();
    const bidAmount = event.target.elements.bidAmount.value;
    if (bidAmount > highestBid) {
      setHighestBid(parseInt(bidAmount));
      setHighestBidder('User'); // Replace 'User' with actual user name or identifier
    } else {
      // Handle if bid is not higher than current highest bid
      alert('Your bid must be higher than the current highest bid.');
    }
  };

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
          <img src={clothes} alt="Auction Item" className="max-h-[20vh] rounded-m" />

          {/* Auction Details */}
          <p className="text-gray-700 mb-2">
            Description: “A gentleman’s choice of timepiece says as much about him as does his Saville Row suit.
          </p>
          <p className="text-gray-700 mb-2">Starting Bid: 500</p>
          <p className="text-gray-700 mb-2">Ending Bid: 1000</p>
          {/* Timer */}
          <p className="text-gray-700 mb-2">Time Left: {formatTime(secondsLeft)}</p>

          {/* Bid Form */}
          <form className="flex flex-col max-w-sm" onSubmit={handleBidSubmit}>
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
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Submit Bid
            </button>
          </form>
        </div>
        
        {/* Redirect to Congratulation Page if the highest bid */}
        {highestBidder && (
          <div className="mt-4">
            <p>Congratulations, {highestBidder}! You have the highest bid!</p>
            <Link to="/Congratulation" className="text-blue-500 hover:underline">
              Go to congratulation page
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardBid;


