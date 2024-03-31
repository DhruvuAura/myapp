import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Mobile validation
    if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Password validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // If all validations pass, display success message
    setSuccessMessage("Registration successful!");
    setError(""); // Clear any previous error message
  };

  return (
    <>
    <div className="Login">
      <div className="Registration">
        <div style={{ border: "1px solid black",background:" rgb(84, 199, 222)" ,padding:"5px",textAlign:"right"}}>
          <div><button type="submit"  style={{padding:'5px',background:"#e3f9ff",color:"black",height: "30px",
                  borderRadius: "4px"}}><b><Link to="/login">Login</Link></b></button></div>
        </div>
        <div style={{padding:"10px"}}> 
          <h2>Registration Form</h2>
          <br />
          <div style={{background:'white',padding:"10px"}}>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name"><b>Name</b></label> <br />
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div><br />
              <div>
                <label htmlFor="email"><b>Email</b></label> <br />
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div><br />
              <div>
                <label htmlFor="mobile"><b>Mobile</b></label> <br />
                <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </div><br />
              <div>
                <label htmlFor="password"><b>Password</b></label> <br />
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div><br />
              <div>
                <label htmlFor="confirmPassword"><b>Confirm Password</b></label> <br />
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <br />
              {error && <p style={{ color: "red" }}>{error}</p>}
              {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
              <br />
              <button type="submit" style={{padding:'5px',background:" rgb(84, 199, 222)",color:"black",borderRadius: "4px"}}><b>Register</b></button>
            </form>
          </div>
          <br/>
          <p>
            <div style={{padding:"10px"}}>
            Already have an account? <Link to="/login">Login</Link>
            </div>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegistrationForm;
