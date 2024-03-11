import React, { useState } from 'react';
import backgroundImage from "../assets/ing.png";

const CustomerManagement = () => {
    const [formData, setFormData] = useState({
        Name: '',
        ProductId: '',
        PCategory: '',
        address: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/addCustomer", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to add customer.');
            }
            alert('Customer added successfully!');
            setFormData({ // Reset form after successful submission
                Name: '',
                ProductId: '',
                PCategory: '',
                address: '',
                phoneNumber: ''
            });
        } catch (error) {
            console.error('Error adding customer:', error);
            alert('Failed to add customer. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
            <div className="max-w-md mx-auto p-6 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4 mx-auto text-center italic text-amber-400">Customer Management</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 text-white">Name:</label>
                        <input
                            type="text"
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            className="w-full bg-white rounded-md px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-white">Product ID:</label>
                        <input
                            type="text"
                            name="ProductId"
                            value={formData.ProductId}
                            onChange={handleChange}
                            className="w-full bg-white rounded-md px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-white">Category:</label>
                        <input
                            type="text"
                            name="PCategory"
                            value={formData.PCategory}
                            onChange={handleChange}
                            className="w-full bg-white rounded-md px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-white">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full bg-white rounded-md px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-white">Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full bg-white rounded-md px-3 py-2"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-auto block">Add Customer</button>
                </form>
            </div>
        </div>
    );
};

export default CustomerManagement;
