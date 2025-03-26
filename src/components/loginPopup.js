import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "../css/loginpopup.css"; // Ensure this file is imported for styling
import { color } from "framer-motion";
import {sendOTP, apiRequest} from "../apiService";


const LoginPopup = ({ setShowLoginPopup }) => {
  const [isSignup, setIsSignup] = useState(false); // Controls login/signup switch
  const [isCustomerLogin, setIsCustomerLogin] = useState(false); // Controls agent vs customer login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [agentFirstName, setAgentFirstName] = useState("");
  const [agentLastName, setAgentLastName] = useState("");
  const [agentMobile, setAgentMobile] = useState("");
  const [agentEmail, setAgentEmail] = useState("");
  const [agentSignupPassword, setAgentSignupPassword] = useState("");
  const [agentPassword, setAgentPassword] = useState("");
  const [agentReEnterPassword, setAgentReEnterPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);

 const handleLogin = async (e) => {
  e.preventDefault();

  // Call FastAPI login endpoint
  const response = await apiRequest("/agent/login/", "POST", {
    email: email,
    password: password,
  });

  if (response.success) {
    alert("Login successful!");

    // Store token in localStorage (if applicable)
    localStorage.setItem("token", response.data.token);

    // Close login popup after successful login
    setShowLoginPopup(false);
  } else {
    alert("Login failed: " + response.error);
  }
};


  // ✅ Handle Customer Login via OTP
  const handleCustomerLogin = async (e) => {
    e.preventDefault();
    const response = await apiRequest("/user/verify-otp/", "POST", { phone_number: mobile, otp });

    if (response.success) {
      alert("Login successful!");
      localStorage.setItem("token", response.data.token);
      setShowLoginPopup(false);
    } else {
      alert("OTP verification failed: " + response.error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
  
    console.log("Password:", agentSignupPassword);
    console.log("Re-enter Password:", agentReEnterPassword);
  
    if (agentSignupPassword !== agentReEnterPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    const response = await apiRequest("/agent/register/", "POST", {
      first_name: agentFirstName,
      last_name: agentLastName,
      email: agentEmail,
      phone_number: agentMobile,
      password: agentSignupPassword,
      re_enter_password: agentReEnterPassword,
    });
  
    if (response.success) {
      alert("Signup successful! Please log in.");
      setIsSignup(false);
    } else {
      alert("Signup failed: " + response.error);
    }
  };
  
  const handleSendOTP = async () => {
    if (!mobile) {
      alert("Please enter a valid mobile number.");
      return;
    }
  
    const response = await sendOTP(mobile);
    
    if (response.success) {
      alert("OTP sent successfully!");
      setOtpSent(true);
    } else {
      alert("Error sending OTP: " + response.error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content scrollable">
        <button className="close-btn" onClick={() => setShowLoginPopup(false)}>
          <FaTimes />
        </button>
        
        {/* Header */}
        <h2 className="popup-title">{isSignup ? "Create an Account" : "Welcome Back"}</h2>
        <p className="popup-subtitle">{isSignup ? "Join as an agent" : "Login to your account"}</p>
        
        {!isSignup && (
          <div className="tabs">
            <button 
              className={!isCustomerLogin ? "active" : ""} 
              onClick={() => setIsCustomerLogin(false)}
            >Agent Login</button>
            <button 
              className={isCustomerLogin ? "active" : ""} 
              onClick={() => setIsCustomerLogin(true)}
            >Customer Login</button>
          </div>
        )}

        <div className="popup-body"> {/* Scrollable area */}
          {/* Agent Login Form */}
          {!isSignup && !isCustomerLogin && (
            <form onSubmit={handleLogin}>
              <label>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                placeholder="Enter your email" 
              />
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder="Enter your password" 
              />
              <a href="#" className="forgot-password">Forgot Password?</a>
              <button 
                type="submit" 
                className="login-btn" 
                style={{
                  backgroundColor: "red", // Sets the background color to red
                  color: "white", // Sets the text color to white
                  borderRadius: "15px", // Rounds the corners with a 15px radius
                  width:"90%",
                }}
              >
                LOGIN
              </button>

              <p className="switch-form">Don't have an account? <span onClick={() => setIsSignup(true)}>Sign Up</span></p>
            </form>
          )}

                    {/* Customer Login Form */}
          {!isSignup && isCustomerLogin && (
            <form onSubmit={handleCustomerLogin}>
              {/* Step 1: Enter Mobile Number & Send OTP */}
              <label>Mobile Number</label>
              <input 
                type="tel" 
                value={mobile} 
                onChange={(e) => setMobile(e.target.value)} 
                required 
                placeholder="Enter your mobile number" 
              />
              
              {!otpSent ? (
                <button 
                  type="button" 
                  onClick={handleSendOTP}  // New function to send OTP
                  className="login-btn"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "15px",
                    width: "95%",
                  }}
                >
                  Send OTP
                </button>
              ) : (
                <>
                  {/* Step 2: Enter OTP & Verify */}
                  <label>OTP</label>
                  <input 
                    type="text" 
                    value={otp} 
                    onChange={(e) => setOtp(e.target.value)} 
                    required 
                    placeholder="Enter OTP" 
                  />
                  <a href="#" className="forgot-password">Resend OTP?</a>

                  <button 
                    type="submit" 
                    className="login-btn"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "15px",
                      width: "90%",
                    }}
                  >
                    LOGIN
                  </button>
                </>
              )}
            </form>
          )}


          {/* Agent Signup Form */}
          {isSignup && (
            <form onSubmit={handleSignup}>
              <label>First Name</label>
                <input 
                  type="text" 
                  value={agentFirstName} 
                  onChange={(e) => setAgentFirstName(e.target.value)} 
                  required 
                  placeholder="Enter your first name" 
                />

                <label>Last Name</label>
                <input 
                  type="text" 
                  value={agentLastName} 
                  onChange={(e) => setAgentLastName(e.target.value)} 
                  required 
                  placeholder="Enter your last name" 
                />

              <label>Email</label>
              <input 
                type="email" 
                value={agentEmail} 
                onChange={(e) => setAgentEmail(e.target.value)} 
                required 
                placeholder="Enter your Gmail ID" 
              />
              <label>Mobile Number</label>
              <input 
                type="tel" 
                value={agentMobile} 
                onChange={(e) => setAgentMobile(e.target.value)} 
                required 
                placeholder="Enter your mobile number" 
              />
              <label>Password</label>
              <input 
                type="password" 
                value={agentSignupPassword} 
                onChange={(e) => setAgentSignupPassword(e.target.value)} 
                required 
                placeholder="Create a password" 
              />

                <label>Re-enter Password</label>
                <input 
                  type="password" 
                  value={agentReEnterPassword} 
                  onChange={(e) => setAgentReEnterPassword(e.target.value)} 
                  required 
                  placeholder="Re-enter your password" 
                />
              <button 
                type="submit" 
                className="login-btn" 
                style={{
                  backgroundColor: "red", // Sets the background color to red
                  color: "white", // Sets the text color to white
                  borderRadius: "15px", // Rounds the corners with a 15px radius
                  width:"90%",
                }}
              >
                LOGIN
              </button>
              <p className="switch-form">Already have an account? <span onClick={() => setIsSignup(false)}>Login</span></p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;