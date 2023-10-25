import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import CardListing from './component/CardListing';
import ChatComponent from './component/ChatComponent';
import Cookies from './component/Cookies'



function App() {
  return (
    <div className="App">
      <Cookies/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  />
          <Route path="/card" element={<CardListing/>} />
          <Route path="/chat/:sellerContact" element={<ChatComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 






