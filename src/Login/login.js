import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for tracking login status

  const submitForm = (e) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation regex
    const passwordRegex = /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

    // Check if email is valid
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Check if password meets the criteria
    if (!passwordRegex.test(password)) {
      setError("Password must contain at least one capital letter, one number, one special character, and be at least 8 characters long.");
      return;
    }

    // Set isLoggedIn to true to indicate successful login
    setIsLoggedIn(true);
    setError(""); // Reset error message
  };

  return (
    <>
      <div className="Login">
        <div className="Registration">
          <div style={{ border: "1px solid black", background: "rgb(84, 199, 222)", padding: "5px", display: "flex", justifyContent: "space-between" }}>
            <div><button type="submit" id="Bttn" style={{ padding: "5px", borderRadius: "50%", height: "30px", width: "30px" }}></button></div>
            <div><button type="submit" style={{ padding: "5px", background: "#e3f9ff", color: "black", height: "30px", borderRadius: "4px" }}><b><Link to="/registrationform">Register</Link></b></button></div>
          </div>

          <br />
          <div style={{ padding: "10px" }}>
            <h2>Login Form</h2> <br />
            <div style={{ background: "white", padding: "10px" }}>
              {isLoggedIn ? ( // Displaying success message if isLoggedIn is true
                <div>
                  <p>Login Successful!</p>
                </div>
              ) : (
                <form action="" onSubmit={submitForm}>
                  <div>
                    <label htmlFor="email"><b>Email</b></label><br />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="password"><b>Password</b></label><br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <br />
                  {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
                  <button type="submit" style={{ padding: "5px", background: "rgb(84, 199, 222)", color: "black", borderRadius: "4px" }}><b>Login</b></button>
                </form>
              )}
            </div>
          </div>
          <br />
          <p>
            <div style={{ padding: "10px" }}>
              Don't have an account? <Link to="/registrationform">Register</Link>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default BasicForm;
