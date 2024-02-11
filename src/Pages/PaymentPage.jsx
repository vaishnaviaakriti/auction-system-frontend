import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-1">Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Expiry Date:</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">CVV:</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Name on Card:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Amount:</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <Link to="/ThankYou">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Pay Now
        </button>
        </Link>
      </form>
      {/* <div className="mt-4">
        <Link to="/thankyou" className="text-blue-500">Back to Thank You Page</Link>
      </div> */}
    </div>
  );
};

export default PaymentPage;