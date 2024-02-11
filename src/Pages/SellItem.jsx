import React, { useState } from 'react';

const SellItem = () => {
    const [formData, setFormData] = useState({
        productid: '',
        sellerid: '',
        category: '',
        description: '',
        currentprice: '',
        startdate: '',
        enddate: '',
        status: 'active',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/additem", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to add item.');
            }
            alert('Item added successfully!');
        } catch (error) {
            console.error('Error adding item:', error);
            alert('Failed to add item. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 mx-auto text-center italic text-red-900">Sell your products with us!</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1">Product ID:</label>
                    <input
                        type="text"
                        name="productid"
                        value={formData.productid}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Seller ID:</label>
                    <input
                        type="text"
                        name="sellerid"
                        value={formData.sellerid}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Current Price:</label>
                    <input
                        type="number"
                        name="currentprice"
                        value={formData.currentprice}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
    <label className="block mb-1">Start Date (Timestamp):</label>
    <input
        type="number"
        name="startdate"
        value={formData.startdate}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-3 py-2"
        required
    />
</div>
<div className="mb-4">
    <label className="block mb-1">End Date (Timestamp):</label>
    <input
        type="number"
        name="enddate"
        value={formData.enddate}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-3 py-2"
        required
    />
</div>

                <div className="mb-4">
                    <label className="block mb-1">Status:</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-auto block">Submit</button>
            </form>
        </div>
    );
};

export default SellItem;
