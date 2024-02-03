import React from 'react';
import { Link } from 'react-router-dom';
import auction from "../assets/auction.png";

const Dashboard = () => {
  const data = [
    { category: 'clothes', bidPrice: 100, currentPrice: 120, bidStartTime: '10:00 AM', bidEndTime: '11:00 AM', image: 'URL_to_clothes_image' },
    { category: 'shoes', bidPrice: 150, currentPrice: 180, bidStartTime: '11:30 AM', bidEndTime: '12:30 PM', image: 'URL_to_book_image' },
    { category: 'Book', bidPrice: 80, currentPrice: 90, bidStartTime: '1:00 PM', bidEndTime: '2:00 PM', image: 'URL_to_book_image' },
    { category: 'Watch', bidPrice: 120, currentPrice: 140, bidStartTime: '3:00 PM', bidEndTime: '4:00 PM', image: 'URL_to_watch_image' },
    // Add more data as needed
  ];

  const handleBidNow = (category) => {
    // Add logic to handle bid action for the specific category
    console.log(`Placing bid for ${category}`);
    // Example: Redirect to the Register page
    // This will work with react-router-dom's Link
    window.location.href = "/Register";
  };

  return (
    <div className="container mx-auto mt-8 bg-red-300">
      <h1 className="text-3xl font-bold mb-4">Bid Dashboard</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b bg-gray-200">Category</th>
            <th className="py-2 px-4 border-b bg-gray-200">Bid Price</th>
            <th className="py-2 px-4 border-b bg-gray-200">Current Price</th>
            <th className="py-2 px-4 border-b bg-gray-200">Bid Start Time</th>
            <th className="py-2 px-4 border-b bg-gray-200">Bid End Time</th>
            <th className="py-2 px-4 border-b bg-gray-200">Image</th>
            <th className="py-2 px-4 border-b bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b bg-red-300 ">{item.category}</td>
              <td className="py-2 px-4 border-b bg-red-300">{item.bidPrice}</td>
              <td className="py-2 px-4 border-b bg-red-300">{item.currentPrice}</td>
              <td className="py-2 px-4 border-b bg-red-300 ">{item.bidStartTime}</td>
              <td className="py-2 px-4 border-b bg-red-300">{item.bidEndTime}</td>
              <td className="py-2 px-4 border-b bg-red-300">
                <img src={auction} className='max-h-[20vh] rounded-m' alt={`Auction for ${item.clothes}`} />
              </td>
              <td className="py-2 px-4 border-b bg-red-900">
                {/* Use the to prop with a callback function */}
                <Link to={() => "/Register"}>
                  <button
                    onClick={() => handleBidNow(item.category)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Bid Now
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
