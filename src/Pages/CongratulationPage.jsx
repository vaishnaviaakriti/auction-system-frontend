
import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import backgroundImage from "../assets/exx.png";

const CongratulationPage = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  const handlePayment = () => {
    // Implement your payment logic here
    alert("Payment process initiated!");
    // You can redirect the user to a payment gateway or handle payment in some other way
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <h2 className="text-2xl font-bold mb-4 text-black">Congratulations, {name}!</h2>
      <p className="text-lg mb-8 text-black">You won this Bid!</p>
      <Link to="/PaymentPage">
        <button 
          className="bg-rose-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePayment}
        >
          Make Payment
        </button>
      </Link>
    </div>
  );
};

export default CongratulationPage;
