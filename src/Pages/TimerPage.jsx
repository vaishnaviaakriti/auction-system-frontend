// TimerPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TimerPage = () => {
  const [timeRemainingList, setTimeRemainingList] = useState([]);
  const [bidEnded, setBidEnded] = useState(false);

  useEffect(() => {
    // Fetch items from backend
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
        // Bid has ended
        setBidEnded(true);
        return 'Bid ended';
      } else {
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
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-emerald-950 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 mx-auto text-center italic text-red-900">Timer Page</h2>
        {timeRemainingList.map((timeRemaining, index) => (
          <div key={index} className="text-center mb-4">Item {index + 1}: {timeRemaining}</div>
        ))}
        {/* Conditional rendering for Contact link */}
        {bidEnded && (
          <div className="text-center">
            <Link to="/Contact" className="text-blue-500 hover:underline">Contact us</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimerPage;
