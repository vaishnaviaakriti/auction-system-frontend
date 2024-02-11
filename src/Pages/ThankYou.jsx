import React from 'react';

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg mb-8">Your payment has been successfully processed.</p>
      <div className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md">
        <p className="text-lg">Your order will be shipped shortly.</p>
      </div>
    </div>
  );
};

export default ThankYou;
