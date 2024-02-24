
import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const CongratulationPage = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  const handlePayment = () => {
    // Implement your payment logic here
    alert("Payment process initiated!");
    // You can redirect the user to a payment gateway or handle payment in some other way
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h2 className="text-2xl font-bold mb-4">Congratulations, {name}!</h2>
      <p className="text-lg mb-8">You Won this Bid.</p>
      <Link to="/PaymentPage">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePayment}
        >
          Make Payment
        </button>
      </Link>
    </div>
  );
};

export default CongratulationPage;
