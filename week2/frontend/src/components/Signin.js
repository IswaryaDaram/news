import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful login
    if (email === "user@example.com" && password === "password123") {
      onLogin(); // Trigger the login state change in App.js
      navigate("/"); // Redirect to the home page (News page)
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
      <p className="mt-3">Don't have an account? <a href="/signup">Sign up here</a></p>
    </div>
  );
};

export default SignIn;
