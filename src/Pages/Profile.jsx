import React, { useState, useEffect } from 'react';
import backgroundImage from "../assets/exx.png";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [bids, setBids] = useState([]);
  const [forms, setForms] = useState([]);
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

        const bidResponse = await fetch('http://localhost:3000/bids');
        if (!bidResponse.ok) {
          throw new Error('Failed to fetch bid data');
        }
        const bidsData = await bidResponse.json();
        setBids(bidsData);

        const formResponse = await fetch('http://localhost:3000/getForms');
        if (!formResponse.ok) {
          throw new Error('Failed to fetch form data');
        }
        const formData = await formResponse.json();
        setForms(formData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto p-8 bg-black bg-opacity-50 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-amber-400">User Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 bg-opacity-75 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center text-white">Users</h2>
            {userData.map((user, index) => (
              <div key={index} className="text-white mb-4">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 bg-opacity-75 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center text-white">Bids</h2>
            {bids.map((bid, index) => (
              <div key={index} className="text-white mb-4">
                <p><strong>Bid Amount:</strong> {bid.bidAmount}</p>
                <p><strong>Bid Description:</strong> {bid.bidDescription}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 bg-opacity-75 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center text-white">Forms</h2>
            {forms.map((form, index) => (
              <div key={index} className="text-white mb-4">
                <p><strong>Name:</strong> {form.name}</p>
                <p><strong>Phone Number:</strong> {form.phoneNumber}</p>
                <p><strong>Email:</strong> {form.email}</p>
                <p><strong>Intrest:</strong> {form.interest}</p>
                <p><strong>Message:</strong> {form.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
