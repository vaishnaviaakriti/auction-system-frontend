import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/exx.png";

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
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto py-8 text-amber-400">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(item => (
            <div key={item._id} className="bg-black rounded-lg p-4">
              {/* Render images if item.images is defined and not empty */}
              {item.images && item.images.length > 0 && (
                <div className="flex justify-center items-center">
                  {item.images.map((image, index) => (
                    <img key={index} src={image.url} alt={`Image ${index}`} className="max-h-40 mb-2"/>
                  ))}
                </div>
              )}
              <h2 className="text-xl text-center font-semibold mb-2">{item.productid}</h2>
              <p className="text-white text-center mb-2">Seller: {item.sellerid}</p>
              <p className="text-white text-center mb-2">Category: {item.category}</p>
              <p className="text-white text-center mb-2">Description: {item.description}</p>
              <p className="text-white text-center mb-2">Current Price: ${item.currentprice.toFixed(2)}</p>
              <p className="text-white text-center mb-2">Start Date: {new Date(item.startdate).toLocaleDateString()}</p>
              <p className="text-white text-center mb-2">End Date: {new Date(item.enddate).toLocaleDateString()}</p>
              <p className="text-white text-center mb-2">Status: {item.status}</p>
              <div className="flex justify-center items-center">
                {isBidAllowed(item.startdate, item.enddate) ? (
                  <Link to="/login">
                    <button onClick={() => handleBidNow(item._id)} className="bg-rose-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Bid Now
                    </button>
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
