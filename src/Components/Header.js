import { useState } from "react";
// import Login from "./Login";
// import { LOGO_URL } from "../utils/constants";
import logo from "../Assets/img.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <div className="header">
      <div className="Logo-style">
        <img className="logo-img" src={logo} />
      </div>

      <div className="nav-item">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLogedIn ? (
        <button onClick={() => setIsLogedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
