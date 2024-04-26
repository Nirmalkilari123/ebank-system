import React, { useState } from "react";
import Navbar from "../Navbar";

const Register = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    dateofbirth: "",
    dateofjoin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    try {
      const response = await fetch("http://localhost:3000/addregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Registration successful!");
        // Redirect or show a success message
        setFormData({
          id: "",
          name: "",
          email: "",
          password: "",
          dateofbirth: "",
          dateofjoin: "",
        });
      } else {
        console.error("Failed to register:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2>Register for eBank</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "10px" }}>
            <label htmlFor="id" style={{ margin: "10px" }}>
              Account Id:
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label htmlFor="name" style={{ margin: "10px" }}>
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label htmlFor="email" style={{ margin: "10px" }}>
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label htmlFor="password" style={{ margin: "10px" }}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label htmlFor="dateofbirth" style={{ margin: "10px" }}>
              Date Of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dateofbirth"
              value={formData.dateofbirth}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label htmlFor="dateofjoin" style={{ margin: "10px" }}>
              Date Of Join:
            </label>
            <input
              type="date"
              id="doj"
              name="dateofjoin"
              value={formData.dateofjoin}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      {/* Footer */}
      <footer className="footers">
        <p className="footerby">
          A project by{" "}
          <a
            href="https://twitter.com/Nirmalkilari"
            rel="noopener noreferrer"
            className="small-link"
          >
            Nirmalkilari
          </a>
          <a
            href="https://twitter.com/Nirmalkilari"
            rel="noopener noreferrer"
            target="_blank"
            className="no-link icon-twitter"
            aria-label="Follow me on Twitter"
          ></a>
        </p>
      </footer>
    </div>
  );
};

export default Register;
