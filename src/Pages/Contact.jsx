import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
          // Display a success message or handle accordingly
          console.log(responseData.message);
          navigate(`/CongratulationPage?name=${formData.name}`);
        }

        if (responseData.formDetails) {
          // Display the retrieved details on the frontend
          console.log(responseData.formDetails);
          // For example, you might want to navigate to a new page with the details
          
        }
      } else {
        // Handle form submission failure
        console.error('Form submission failed.');
      }
    } catch (error) {
      // Handle fetch error
      console.error('Error during form submission:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="border p-4 mb-4 rounded">
        <label className="block text-gray-700 text-sm font-bold mb-2">
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
        <label className="block text-gray-700 text-sm font-bold mb-2">
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
        <label className="block text-gray-700 text-sm font-bold mb-2">
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
        <label className="block text-gray-700 text-sm font-bold mb-2">
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
        <label className="block text-gray-700 text-sm font-bold mb-2">
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
