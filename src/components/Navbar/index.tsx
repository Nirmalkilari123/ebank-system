import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          <img src="https://res.cloudinary.com/de4euasql/image/upload/v1713066064/ebank-login-img_lnoldg.png" className="img" alt="Logo" />
        </Link>
        <nav
          className={`header__content__nav ${menuOpen && size.width < 768 ? "isMenu" : ""}`}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/creditcard">CreditCard</Link>
            </li>
            <li>
              <Link to="/loans">Loans</Link>
            </li>
            <li>
              <Link to="/contactus">ContactUs</Link>
            </li>

            <Link to="/register">
              <button className="btn">Register Account</button>
            </Link>
            <Link to="/login">
              <button className="btn btn__login">Login</button>
            </Link>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
