import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/addlogin", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        navigate("/dashboard");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error logging in. Please try again later.");
    }
  };

  

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    loginUser(email, password);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="image">
          <img
            src="https://res.cloudinary.com/de4euasql/image/upload/v1713066064/ebank-login-img_lnoldg.png"
            className="img1"
            alt="Login"
          />
        </div>
        <form className="form" onSubmit={handleLogin}>
          <h1>Welcome Back!</h1>
          <div className="input">
            <label className="label">Enter Your Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <label className="label">Enter Your Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
        <footer className="footer">
          <p className="footer-by">
            A project by{" "}
            <a
              href="https://twitter.com/Nirmalkilari"
              rel="noopener"
              className="small-link"
            >
              Nirmalkilari
            </a>
            <a
              href="https://twitter.com/Nirmalkilari"
              rel="noopener"
              target="_blank"
              className="no-link icon-twitter"
              aria-label="Follow me on Twitter"
            ></a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Login;
