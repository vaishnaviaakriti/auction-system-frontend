import React, { useState, useEffect } from 'react';
import backgroundImage from "../assets/exx.png";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [formsData, setFormsData] = useState([]);
  const [bidsData, setBidsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch('http://localhost:3000/users');
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await userResponse.json();
        setUserData(userData);

        // Fetch forms data
        const formsResponse = await fetch('http://localhost:3000/getForms');
        if (!formsResponse.ok) {
          throw new Error('Failed to fetch form data');
        }
        const formData = await formsResponse.json();
        setFormsData(formData);

        // Fetch bids data
        const bidsResponse = await fetch('http://localhost:3000/bids');
        if (!bidsResponse.ok) {
          throw new Error('Failed to fetch bid data');
        }
        const bidData = await bidsResponse.json();
        setBidsData(bidData);
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto p-8 bg-black bg-opacity-50 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-amber-400">User Profile</h1>
        <div className="grid grid-cols-1 gap-8">
          {userData.map(user => (
            <div key={user._id} className="bg-gray-900 bg-opacity-75 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-center text-white">User</h2>
              <div className="text-white mb-4">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Status:</strong> {user.active ? 'Active' : 'Inactive'}</p>
              </div>
              <div className="flex justify-center">
                <button onClick={() => toggleUserStatus(user._id, !user.active)} className={`bg-${user.active ? 'red' : 'green'}-500 hover:bg-${user.active ? 'red' : 'green'}-700 text-white font-bold py-2 px-4 rounded`}>
                  {user.active ? 'Deactivate' : 'Activate'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-center text-white">Forms</h2>
          <div className="text-white mb-4">
            {formsData.map((form, index) => (
              <div key={index}>
                <p><strong>Name:</strong> {form.name}</p>
                <p><strong>Phone Number:</strong> {form.phoneNumber}</p>
                <p><strong>Email:</strong> {form.email}</p>
                <p><strong>Interest:</strong> {form.interest}</p>
                <p><strong>Message:</strong> {form.message}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-center text-white">Bids</h2>
          <div className="text-white mb-4">
            {bidsData.map((bid, index) => (
              <div key={index}>
                <p><strong>Bid Amount:</strong> {bid.bidAmount}</p>
                <p><strong>Bid Description:</strong> {bid.bidDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
