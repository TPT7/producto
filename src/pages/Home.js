import React from "react";
import { Link } from "react-router-dom";
import "./App.css";


const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our E-commerce Store</h1>
      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/create-account">Create Account</Link>
      </div>
    </div>
  );
};

export default HomePage;
