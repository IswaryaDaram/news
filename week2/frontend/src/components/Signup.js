import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ onSignup }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful sign up
    onSignup(); // Trigger the signup state change in App.js
    navigate("/"); // Redirect to the home page (News page)
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>
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
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      <p className="mt-3">Already have an account? <a href="/signin">Sign in here</a></p>
    </div>
  );
};

export default SignUp;
