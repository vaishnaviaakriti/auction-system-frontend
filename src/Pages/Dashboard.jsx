import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import aa from "../assets/aa.jpg"
const Dashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/getItem");
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleBidNow = (itemId) => {
    // Implement bid now functionality here
    console.log('Bid Now for item:', itemId);
  };

  const isBidAllowed = (startDate, endDate) => {
    const currentTimeStamp = Date.now();
    return currentTimeStamp >= startDate && currentTimeStamp <= endDate;
  };

  return (
    <div className="bg-gradient-to-br from-purple-400 to-indigo-500 min-h-screen">
      <div className="container mx-auto py-8 text-orange-950">
       
      {/* <img src={aa} alt="Aa" style={{ maxHeight: '100%', objectFit: 'cover' }} />  */}
        <h1 className="text-3xl font-bold text-orange-950 mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(item => (
            <div key={item._id} className="bg-gray-100 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{item.productid}</h2>
              <p className="text-lime-800 mb-2">Seller: {item.sellerid}</p>
              <p className="text-lime-800 mb-2">Category: {item.category}</p>
              <p className="text-lime-800 mb-2">Description: {item.description}</p>
              <p className="text-lime-800 mb-2">Current Price: ${item.currentprice.toFixed(2)}</p>
              <p className="text-lime-800 mb-2">Start Date: {new Date(item.startdate).toLocaleDateString()}</p>
              <p className="text-lime-800 mb-2">End Date: {new Date(item.enddate).toLocaleDateString()}</p>
              <p className="text-lime-800 mb-2">Status: {item.status}</p>
              <div className="mt-4">
                {isBidAllowed(item.startdate, item.enddate) ? (
                  <Link to="/Register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Bid Now
                  </Link>
                ) : (
                  <button disabled className="bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded cursor-not-allowed">
                    Bid Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
