import React from 'react';
import { useParams } from 'react-router-dom';

export default function Dynamic() {
  // Use the useParams hook to access dynamic parameters
  const { id } = useParams();

  return (
    <div>
      <h1>Dynamic</h1>
      {/* Use curly braces for dynamic content in JSX */}
      {"You are asking for " + id}
    </div>
  );
}
