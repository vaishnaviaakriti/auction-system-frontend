// CongratulationPage.js
import React from 'react';

const CongratulationPage = ({ name }) => {
  return (
    <div>
      <h2>Congratulations, {name}!</h2>
      <p>You Won this Bid.</p>
    </div>
  );
};

export default CongratulationPage;
