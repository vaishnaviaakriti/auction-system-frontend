import React, { useState, useEffect } from 'react';
import clothes from '../assets/clothes.jpeg';
import backgroundImage from "../assets/exx.png";

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
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      {/* Main Content */}
      <div className="flex-grow p-8 text-center">
        {/* Auction Heading and Image */}
        <div className="bg-black p-8 rounded shadow-md">
          {/* Auction Image */}
          <img src={clothes} alt="Auction Item" className="max-h-[50vh] rounded-md mx-auto mb-6" />

          {/* Auction Details */}
          <p className="text-amber-400 mb-4 text-lg">
            Description: This dress, a true sartorial masterpiece, is not merely an outfit but a statement of grace and sophistication. Wear it to command attention at any elegant affair, where you'll undoubtedly leave an indelible impression of royal allure and timeless style.
          </p>
          <p className="text-white mb-4 text-lg">Starting Bid: {highestBid}</p>
          <p className="text-white mb-4 text-lg">Ending Bid: 1000</p>

          {/* Timer */}
          <p className="text-white mb-4 text-lg">Time Left: {formatTime(secondsLeft)}</p>

          {/* Bid Form */}
          {!auctionEnded && (
            <form className="flex flex-col max-w-md mx-auto" onSubmit={handleSubmit}>
              <label className="text-lg text-amber-400 mb-2" htmlFor="bidAmount">
                Your Bid:
              </label>
              <input
                type="number"
                id="bidAmount"
                name="bidAmount"
                className="border rounded py-2 px-3 mb-4"
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
                className="bg-rose-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Submit Bid
              </button>
            </form>
          )}

          {/* Winner Message */}
          {auctionEnded && winner && (
            <p className="text-green-500 mt-6">Auction ended. Winner: {winner}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardBid;
