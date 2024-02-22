import React from 'react';
import './index.css';
import logoImage from './lcc-logo.png';
const Home = () => {
  return (
    <>
          <div className="App">
        <nav className="navbar">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo" />
        </div>
        <div className="logout">LOG OUT</div>
      </nav>
        <div className="content">
          <div className="column">
            <div className="circle">Employee</div>
            <div className="box">Log Employee</div>
            <div className="box">CRUD Employee</div>
            <div className="box">View Employees Log</div>
          </div>
          <div className="column">
            <div className="circle">Rooms</div>
            <div className="box">Borrow Key</div>
            <div className="box">CRUD Rooms</div>
            <div className="box">View Borrowers Log</div>
          </div>
          <div className="column">
            <div className="circle">Visitors</div>
            <div className="box">Log Visitors</div>
            <div className="box">View Visitors Log</div>
          </div>
        </div>
      </div>
  </>
  );
};

export default Home;