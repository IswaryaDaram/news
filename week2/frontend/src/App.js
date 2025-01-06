import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Authentication state

  // Handle successful login or signup
  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Redirect to News if authenticated */}
          <Route path="/" element={isAuthenticated ? <News /> : <Navigate to="/signin" />} />
          
          {/* SignIn route */}
          <Route path="/signin" element={<SignIn onLogin={handleAuthentication} />} />
          
          {/* SignUp route */}
          <Route path="/signup" element={<SignUp onSignup={handleAuthentication} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
