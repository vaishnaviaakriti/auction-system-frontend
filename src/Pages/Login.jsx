import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/exx.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      // Handle the response, redirect, show a message, etc.
      if (response.ok) {
        // Login successful, you may want to save the token and redirect
        console.log('Login successful');
      } else {
        // Handle login failure, show error message, etc.
        console.error('Login failed', data.message);
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <div className="container mx-auto mt-8 p-4 bg-black rounded shadow-md max-w-md">
      <h1 className="text-3xl font-bold mb-4 text-center text-amber-400">Login</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <Link to="/Dashboardbid">
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Login
          </button>
          </div>
        </Link>
      </form>

      <div className="text-center">
        <p className="text-white">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
