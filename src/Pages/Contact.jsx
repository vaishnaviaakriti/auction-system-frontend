import React, { useState } from 'react';

const Contact = () => {
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
        
        // Handle successful form submission
        console.log('Form submitted successfully!');
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
    
    <form onSubmit={handleSubmit}>
  
      <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >
        Name:
        <input class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          
        />
      </label>
      <br />
      <label class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        Phone Number:
        <input
          type="Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label >
      <br />
      <label class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" >
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" >
        Intrest:
        <input
          type="text"
          name="intrest"
          value={formData.intrest}
          onChange={handleChange}
        />
      </label>
      <br />
      <label class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;