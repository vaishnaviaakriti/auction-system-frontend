import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/exx.png";

const PaymentPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: '',
    amount: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to process payment
    // You can use Stripe, PayPal, or any other payment service provider here
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      name: '',
      email: '',
      amount: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
        <div className="flex justify-center"> {/* Centering wrapper */}
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="mb-4">
              <label className="block mb-1 text-white">Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800"
                required
              />
            </div>
            {/* Rest of the form inputs */}
            <Link to="/ThankYou">
              <button type="submit" className="bg-rose-700 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Pay Now
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
