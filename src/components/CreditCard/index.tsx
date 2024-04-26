import React from "react";
import Navbar from "../Navbar";

function CreditCard() {
  return (
    <body>
      <Navbar />
      <h1>Credit Card</h1>
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
    </body>
  );
}

export default CreditCard;
