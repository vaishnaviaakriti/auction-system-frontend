import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/ing.png";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    intrest: '',
    message: '',
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
      const response = await fetch('http://localhost:3000/addForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();

        if (responseData.message) {
          console.log(responseData.message);
          navigate(`/CongratulationPage?name=${formData.name}`);
        }

        if (responseData.formDetails) {
          console.log(responseData.formDetails);
        }
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-md mx-auto p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 mx-auto text-center italic text-amber-400">We are willing to hear from you! Please feel free to contact us and share your experience, we will get back to you as soon as possible!</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
          <div className="border p-4 mb-4 rounded">
            <label className="block text-white text-sm font-bold mb-2">
              Name:
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="border p-4 mb-4 rounded">
            <label className="block text-white text-sm font-bold mb-2">
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </label>
          </div>
          <div className="border p-4 mb-4 rounded">
            <label className="block text-white text-sm font-bold mb-2">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </label>
          </div>
          <div className="border p-4 mb-4 rounded">
            <label className="block text-white text-sm font-bold mb-2">
              Interest:
              <input
                type="text"
                name="intrest"
                value={formData.intrest}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </label>
          </div>
          <div className="border p-4 mb-4 rounded">
            <label className="block text-white text-sm font-bold mb-2">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </label>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-rose-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
