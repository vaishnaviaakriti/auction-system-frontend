import React from 'react';

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-200">
      <h1 className="text-3xl font-bold mb-4 text-purple-800">Thank You!</h1>
      <p className="text-lg mb-8 text-purple-600">Your payment has been successfully processed.</p>
      <div className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md">
        <p className="text-lg">Your order will be shipped shortly.</p>
      </div>
    </div>
  );
};

export default ThankYou;
