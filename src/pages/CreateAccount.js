import React, { useState } from "react";
import "./App.css";

const CreateAccountPage = ({ onCreateAccount }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle account creation logic here
    onCreateAccount({ username, email, password });
  };

  return (
    <div className="create-account-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
