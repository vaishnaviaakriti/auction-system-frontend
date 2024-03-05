// TimerPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/exx.png";

const TimerPage = () => {
  const [timeRemainingList, setTimeRemainingList] = useState([]);
  const [bidEnded, setBidEnded] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:3000/getItem');
        if (response.ok) {
          const data = await response.json();
          console.log('Received items:', data);
          setTimeRemainingList(data.map(item => calculateTimeRemaining(item)));
        } else {
          console.error('Failed to fetch items');
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const calculateTimeRemaining = (item) => {
    const { startdate, enddate } = item;
    if (startdate && enddate) {
      const startDateTime = new Date(startdate);
      const endDateTime = new Date(enddate);

      const difference = endDateTime - new Date();
      if (difference <= 0) {
        setBidEnded(true);
        return 'Bid ended';
      } else {
        setBidEnded(false);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }
    return 'Invalid date';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
  <div className="max-w-md mx-auto p-6 bg-black rounded-md shadow-md text-white">
    <h1 className="text-4xl font-semibold mb-6 mx-auto text-center">Auction Countdown</h1>
    {timeRemainingList.map((timeRemaining, index) => (
      <div key={index} className="text-center mb-4 text-lg">
        Item {index + 1}: {timeRemaining}
      </div>
    ))}
    {/* Conditional rendering for Contact button */}
    <div className="text-center">
      {bidEnded ? (
        <Link to="/Contact">
          <button className="bg-rose-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Contact us
          </button>
        </Link>
      ) : (
        <button disabled className="bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed opacity-50">
          Contact us
        </button>
      )}
    </div>
  </div>
</div>

  );
};

export default TimerPage;
