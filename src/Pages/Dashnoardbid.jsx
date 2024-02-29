import React, { useState, useEffect } from 'react';
import clothes from '../assets/clothes.jpeg';

const DashboardBid = () => {
  const [secondsLeft, setSecondsLeft] = useState(600); // Initial value for 10 minutes
  const [bidAmount, setBidAmount] = useState(0);
  const [highestBid, setHighestBid] = useState(500); // Initial highest bid
  const [auctionEnded, setAuctionEnded] = useState(false); // State to track if auction has ended
  const [winner, setWinner] = useState(null); // State to store the winner's name

  useEffect(() => {
    // Function to fetch the highest bid from the backend
    const fetchHighestBid = async () => {
      try {
        const response = await fetch('http://localhost:3000/getHighestBidAndWinner');
        const data = await response.json();
        setHighestBid(data.highestBid.bidAmount); // Set the highest bid state
      } catch (error) {
        console.error('Error fetching highest bid:', error);
      }
    };

    // Call the fetchHighestBid function when the component mounts
    fetchHighestBid();
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to update the timer every second
  const updateTimer = () => {
    setSecondsLeft((prevSeconds) => {
      if (prevSeconds > 0) {
        return prevSeconds - 1;
      } else {
        // If timer reaches 0, set auctionEnded to true
        setAuctionEnded(true);
        return 0;
      }
    });
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (bidAmount > highestBid && bidAmount <= 1000) {
      try {
        // Make a POST request to submit the bid
        const response = await fetch('http://localhost:3000/submitBid', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            bidAmount,
            bidDescription: 'Auction Bid', // You can customize the bid description if needed
          }),
        });
        const data = await response.json();
        console.log(data); // Log the response from the backend
        // Redirect to TimerPage upon successful bid
        if (response.ok) {
          window.location.href = '/TimerPage';
        }
      } catch (error) {
        console.error('Error submitting bid:', error);
      }
    }
  };

  // If auction has ended, fetch winner's name
  useEffect(() => {
    if (auctionEnded) {
      const fetchWinner = async () => {
        try {
          const response = await fetch("http://localhost:3000/getHighestBidAndWinner");
          const data = await response.json();
          setWinner(data.winner.name); // Set the winner state
        } catch (error) {
          console.error('Error fetching winner:', error);
        }
      };

      fetchWinner();
    }
  }, [auctionEnded]);

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      {/* Main Header */}
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-semibold">Auction App</h1>
      </header>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <h2 className="text-3xl font-semibold mb-4">Current Auction</h2>

        {/* Auction Heading and Image */}
        <div className="bg-white p-8 rounded shadow-md bg-teal-100"> {/* Added bg-teal-100 class */}
          <h3 className="text-2xl font-semibold mb-4">Auction Item Name</h3>

          {/* Auction Image */}
          <img src={clothes} alt="Auction Item" className="max-h-[20vh] rounded-m" />

          {/* Auction Details */}
          <p className="text-gray-700 mb-2">
            Description: “A gentleman’s choice of timepiece says as much about him as does his Saville Row suit.
          </p>
          <p className="text-gray-700 mb-2">Starting Bid: {highestBid}</p>
          <p className="text-gray-700 mb-2">Ending Bid: 1000</p>
          {/* Timer */}
          <p className="text-gray-700 mb-2">Time Left: {formatTime(secondsLeft)}</p>

          {/* Bid Form */}
          {!auctionEnded && (
            <form className="flex flex-col max-w-sm" onSubmit={handleSubmit}>
              <label className="text-sm text-gray-600 mb-1" htmlFor="bidAmount">
                Your Bid:
              </label>
              <input
                type="number"
                id="bidAmount"
                name="bidAmount"
                className="border rounded py-2 px-3 mb-2"
                placeholder="Enter your bid amount"
                value={bidAmount}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value)) {
                    setBidAmount(value);
                  } else {
                    setBidAmount(0); // or any default value you prefer
                  }
                }}
              />

              {/* Submit Bid Button */}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Submit Bid
              </button>
            </form>
          )}

          {/* Winner Message */}
          {auctionEnded && winner && (
            <p className="text-green-500 mt-4">Auction ended. Winner: {winner}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardBid;
