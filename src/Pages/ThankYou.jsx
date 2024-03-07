import React from 'react';
import backgroundImage from "../assets/exx.png";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <h1 className="text-3xl font-bold mb-4 text-black">Thank You!</h1>
      <p className="text-lg mb-8 text-black">Your payment has been successfully processed.</p>
      <div className="bg-rose-950 text-white px-6 py-3 rounded-md shadow-md">
        <p className="text-lg">Your order will be shipped shortly!</p>
      </div>
  </div>
  );
};

export default ThankYou;
