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
      <div className="max-w-md mx-auto p-6 bg-black rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-amber-400">Auction Countdown</h2>
        {timeRemainingList.map((timeRemaining, index) => (
          <div key={index} className="text-center mb-4 text-xl text-white font-semibold">
            Item {index + 1}: {timeRemaining}
          </div>
        ))}
        <div className="text-center mt-8">
          {bidEnded ? (
            <Link to="/Contact">
              <button className="bg-rose-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </Link>
          ) : (
            <button disabled className="bg-rose-950 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
              Contact Us
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimerPage;
