import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/exx.png";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [formsData, setFormsData] = useState([]);
  const [bidsData, setBidsData] = useState([]);
  const [itemsData, setItemsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('http://localhost:3000/users');
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await userResponse.json();
        setUserData(userData);

        const formsResponse = await fetch('http://localhost:3000/getforms');
        if (!formsResponse.ok) {
          throw new Error('Failed to fetch form data');
        }
        const formData = await formsResponse.json();
        setFormsData(formData);

        const bidsResponse = await fetch('http://localhost:3000/bids');
        if (!bidsResponse.ok) {
          throw new Error('Failed to fetch bid data');
        }
        const bidData = await bidsResponse.json();
        setBidsData(bidData);

        const itemsResponse = await fetch('http://localhost:3000/getCustomers');
        if (!itemsResponse.ok) {
          throw new Error('Failed to fetch item data');
        }
        const itemData = await itemsResponse.json();
        setItemsData(itemData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const toggleUserStatus = async (id, status) => {
    try {
      const updateUserResponse = await fetch(`http://localhost:3000/updateUser/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ active: status }),
      });

      if (!updateUserResponse.ok) {
        throw new Error('Failed to update user status');
      }

      const updatedUserData = userData.map(user => {
        if (user._id === id) {
          return { ...user, active: status };
        }
        return user;
      });

      setUserData(updatedUserData);
    } catch (error) {
      console.error('Error toggling user status:', error);
    }
  };

  const toggleItemStatus = async (id, status) => {
    try {
      const updateItemResponse = await fetch(`http://localhost:3000/updateCustomer/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!updateItemResponse.ok) {
        throw new Error('Failed to update item status');
      }

      const updatedItems = itemsData.map(item => {
        if (item._id === id) {
          return { ...item, status };
        }
        return item;
      });

      setItemsData(updatedItems);
    } catch (error) {
      console.error('Error toggling item status:', error);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto p-8 text-black">
        <h1 className="text-3xl font-bold mb-8 text-center italic text-rose-950">User's Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* User Information */}
          <div className="col-span-2 lg:col-span-1 bg-black p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center text-amber-400">User</h2>
            {userData.map(user => (
              <div key={user._id} className="text-white mb-4">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Status:</strong> {user.active ? 'Active' : 'Inactive'}</p>
                <div className="flex justify-center">
                  <button onClick={() => toggleUserStatus(user._id, !user.active)} className={`bg-${user.active ? 'red' : 'green'}-500 hover:bg-${user.active ? 'red' : 'green'}-700 text-white font-bold py-2 px-4 rounded`}>
                    {user.active ? 'Deactivate' : 'Activate'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Forms Information */}
          <div className="col-span-2 lg:col-span-1 mt-8 lg:mt-0 bg-black p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center text-amber-400">Forms</h2>
            {formsData.map((form, index) => (
              <div key={index} className="text-white mb-4">
                <p><strong>Name:</strong> {form.name}</p>
                <p><strong>Phone Number:</strong> {form.phoneNumber}</p>
                <p><strong>Email:</strong> {form.email}</p>
                <p><strong>Interest:</strong> {form.interest}</p>
                <p><strong>Message:</strong> {form.message}</p>
              </div>
            ))}
          </div>

          {/* Bids Information */}
          <div className="col-span-2 lg:col-span-1 mt-8 lg:mt-0 bg-black p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center text-amber-400">Bids</h2>
            {bidsData.map((bid, index) => (
              <div key={index} className="text-white mb-4">
                <p><strong>Bid Amount:</strong> {bid.bidAmount}</p>
                <p><strong>Bid Description:</strong> {bid.bidDescription}</p>
              </div>
            ))}
          </div>

          {/* Items Information */}
          <div className="col-span-2 lg:col-span-1 mt-8 lg:mt-0 bg-black p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center text-amber-400">Items</h2>
            {itemsData.map((item, index) => (
              <div key={index} className="text-white mb-4">
                <p><strong>Name:</strong> {item.Name}</p>
                <p><strong>ProductId:</strong> {item.ProductId}</p>
                <p><strong>PCategory:</strong> {item.PCategory}</p>
                <p><strong>Address:</strong> {item.address}</p>
                <p><strong>PhoneNumber:</strong> {item.phoneNumber}</p>
                <div className="flex items-center mt-4">
                  <button onClick={() => toggleItemStatus(item._id, 'accepted')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Accept
                  </button>
                  <button onClick={() => toggleItemStatus(item._id, 'rejected')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sell Item Button */}
        <div className="mt-8 text-center">
          <Link to="/sellitem">
            <button className="bg-rose-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sell Item
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
