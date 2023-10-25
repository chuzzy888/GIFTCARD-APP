import React, { useState } from 'react';
import { FaWallet, FaAddressCard ,FaCreditCard,FaUpload} from "react-icons/fa";

function SellCard() {
  const [sellerName, setSellerName] = useState('');
  const [giftCardType, setGiftCardType] = useState('');
  const [giftCardImage, setGiftCardImage] = useState(null);
  const [giftCardValue, setGiftCardValue] = useState('');
  const [location, setLocation] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setGiftCardImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('sellerName', sellerName);
    formData.append('giftCardType', giftCardType);
    formData.append('giftCardImage', giftCardImage);
    formData.append('giftCardValue', giftCardValue);
    formData.append('location', location);
    formData.append('expiryDate', expiryDate);
    formData.append('description', description);

    // Now you can send this formData to your backend for processing

    // Reset the form fields
    setSellerName('');
    setGiftCardType('');
    setGiftCardImage(null);
    setGiftCardValue('');
    setLocation('');
    setExpiryDate('');
    setDescription('');
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white min-h-screen flex justify-center items-center animate__animated animate__jackInTheBox">
    <div className="container mx-auto mt-5">
      <div className='flex justify-around '>
      <h2 className="text-2xl mb-4 font-serif">Sell Gift Card</h2> 
   <div>
   <h1 className='text-yellow-300 '>  <FaWallet/></h1>
   </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <div className='flex'>
          <h1 className='text-green-400 mx-2.5 '> <FaAddressCard/></h1>
              <label className="block text-gray-700 text-sm font-bold mt-1">Seller Name:</label>
        

          </div>
        
         
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
       <div className='flex'>
       <h1 className=' mx-2.5 text-red-700'> <FaCreditCard/></h1>
          <label className="block text-gray-700 text-sm font-bold mb-2">Gift Card Type:</label>
       </div>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={giftCardType}
            onChange={(e) => setGiftCardType(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
       <div className='flex'>
       <h4 className=' mx-2.5 text-green-500'> <FaUpload/></h4>
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload Gift Card Image:</label>
       </div>
          <input
            type="file"
            className="block appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Gift Card Value:</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={giftCardValue}
            onChange={(e) => setGiftCardValue(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Expiry Date:</label>
          <input
            type="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Upload
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default SellCard; 


