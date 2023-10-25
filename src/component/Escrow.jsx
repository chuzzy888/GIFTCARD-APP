import React, { useState } from 'react';

function Escrow() {
  const [transaction, setTransaction] = useState({
    buyerName: '',
    sellerName: '',
    amount: '',
    status: 'Pending',
  });

  const [transactionHistory, setTransactionHistory] = useState([]);

  const handleTransaction = () => {
    
    const randomStatus = Math.random() < 0.5 ? 'Completed' : 'Failed';

   
    setTransaction({ ...transaction, status: randomStatus });

  
    setTransactionHistory([...transactionHistory, { ...transaction, status: randomStatus }]);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white min-h-screen flex justify-center items-center" class="animate__animated animate__slideInDown">
      <div className="container mx-auto">
        <h2 className="text-2xl mb-4 font-serif">Escrow Service</h2>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Buyer Name:</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={transaction.buyerName}
              onChange={(e) => setTransaction({ ...transaction, buyerName: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Seller Name:</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={transaction.sellerName}
              onChange={(e) => setTransaction({ ...transaction, sellerName: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={transaction.amount}
              onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })}
              required
            />
          </div>
          <div className="mb-6">
            <button
              onClick={handleTransaction}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Perform Transaction
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Transaction Status:</label>
            <span className={`text-${transaction.status === 'Completed' ? 'green' : 'red'}-500 font-bold`}>
              {transaction.status}
            </span>
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h3 className="text-xl mb-4">Transaction History</h3>
          <ul>
            {transactionHistory.map((item, index) => (
              <li key={index} className="mb-2">
                <span className={`text-${item.status === 'Completed' ? 'green' : 'red'}-500 font-bold`}>
                  {item.status}
                </span>
                &nbsp;— {item.buyerName} paid {item.sellerName} ${item.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Escrow;

