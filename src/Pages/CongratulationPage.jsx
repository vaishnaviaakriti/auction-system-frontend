// CongratulationPage.js
import React from 'react';
import { useSearchParams } from 'react-router-dom';
const CongratulationPage = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
 const name =  searchParams.get("name")
  return (
    <div>
      <h2>Congratulations, {name}!</h2>
      <p>You Won this Bid.</p>
    </div>
  );
};

export default CongratulationPage;
