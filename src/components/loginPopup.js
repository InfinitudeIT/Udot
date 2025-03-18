import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "../css/loginpopup.css"; // Ensure this file is imported for styling
import { color } from "framer-motion";

const LoginPopup = ({ setShowLoginPopup }) => {
  const [isSignup, setIsSignup] = useState(false); // Controls login/signup switch
  const [isCustomerLogin, setIsCustomerLogin] = useState(false); // Controls agent vs customer login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentMobile, setAgentMobile] = useState("");
  const [agentEmail, setAgentEmail] = useState("");
  const [agentSignupPassword, setAgentSignupPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login functionality to be implemented");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Agent Signup functionality to be implemented");
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
            <form onSubmit={handleLogin}>
              <label>Mobile Number</label>
              <input 
                type="tel" 
                value={mobile} 
                onChange={(e) => setMobile(e.target.value)} 
                required 
                placeholder="Enter your mobile number" 
              />
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
                  backgroundColor: "red", // Sets the background color to red
                  color: "white", // Sets the text color to white
                  borderRadius: "15px", // Rounds the corners with a 15px radius
                  width:"90%",
                }}
              >
                LOGIN
              </button>
            </form>
          )}

          {/* Agent Signup Form */}
          {isSignup && (
            <form onSubmit={handleSignup}>
              <label>Full Name</label>
              <input 
                type="text" 
                value={agentName} 
                onChange={(e) => setAgentName(e.target.value)} 
                required 
                placeholder="Enter your name" 
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