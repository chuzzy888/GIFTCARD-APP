import React, { useState } from 'react';
import { FaTriangleExclamation } from "react-icons/fa6";

function Report() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    report: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
    console.log('Form Data:', formData);
    // You can send the form data to your backend or perform any other action
    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      message: '',
      report: '',
    });
  };

  return (
    <div  className="bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500 text-white flex justify-center items-center animate__animated animate__slideInDown" >
      <div className="container mx-auto">
        <div className='flex'>
        <h2 className="text-2xl mb-4">Report an Issue</h2>
        <h4 className='mx-2.5 text-yellow-300 mt-2'> <FaTriangleExclamation/></h4>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your message here"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Report:</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your report here"
                value={formData.report}
                onChange={(e) => setFormData({ ...formData, report: e.target.value })}
                required
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Report;



