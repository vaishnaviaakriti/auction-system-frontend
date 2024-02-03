import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
    // Your registration logic here
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-green-200 rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Register</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-green-500 bg-green-100"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-green-500 bg-green-100"
            required
          />
        </div>

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
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-green-500 bg-green-100"
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
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-green-500 bg-green-100"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Register
        </button>
      </form>

      <div className="mt-4 text-center">
        <p>Already have an account?</p>
        <Link to="/login">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
