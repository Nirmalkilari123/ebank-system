import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";

function DashBoard() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Fetch users data from API
    const fetchUsersData = async () => {
      try {
        const response = await fetch("http://localhost:3000/getUsersData");
        if (response.ok) {
          const data = await response.json();
          setUsersData(data);
        } else {
          console.error("Failed to fetch users data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUsersData();
  }, []);

  return (
    <body>
      <Navbar />
      <div style={containerStyle}>
        <h2 style={headingStyle}>Registered Users</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Account Id</th>
              <th>Name</th>
              <th>Email</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* Display more user data columns */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer style={footerStyle} className="footer">
        <p className="footer-by">
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
    </body>
  );
}
const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
};

const headingStyle = {
  fontSize: "24px",
  marginBottom: "20px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const footerStyle = {
  textAlign: "center",
  marginTop: "40px",
};
export default DashBoard;
