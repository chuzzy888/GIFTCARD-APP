# giftcard app











































import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/chuzzy888/0326c576a9ef6929c9e6c8e9576b68f5/raw/0f2a2105c61b81ab592da19c0162c0095d2aff0d/electric.json")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <div className='App'>
      {data.map((category) => {
        const categoryName = Object.keys(category)[0]; // Get the category name
        const products = category[categoryName]; // Get the products array

        return (
          <div key={categoryName}>
            <h2>{categoryName}</h2>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>
                  <img src={product.image} alt={product.name} />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
