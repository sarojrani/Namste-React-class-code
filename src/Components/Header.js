import { useState,useContext } from "react";
// import Login from "./Login";
// import { LOGO_URL } from "../utils/constants";
import logo from "../Assets/img.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  const isOnline = useOnline();

const {user}=useContext(UserContext)

const cartItems=useSelector(store=>store.cart.items)

  return (
    <div className="flex justify-between bg-pink-300 shadow-lg sm:bg-blue-300">
      <div className="Logo-style">
        <img className="h-24 p-2" src={logo} />
      </div>

      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
        
          <Link to="/instamart">
            <li className="px-2">instamart</li>
          </Link>

          <Link to="/cart">
          <li className="px-2">cart-{cartItems.length}items</li>
          </Link>
          
          <div>
          <h1>{isOnline?"👌":"😒"}</h1>
         <h1>{user.name}</h1> 
          </div>
          
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
