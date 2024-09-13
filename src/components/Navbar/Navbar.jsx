import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBox,
  faShoppingCart,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ cartCount, size }) => {
  return (
    <nav className="navbar">
     <img src="https://img1.wsimg.com/isteam/ip/7ffb00db-210e-43d1-a8d6-23fe463127a3/logo.PNG/:/" alt="eCommerce Logo" class="navbar-logo mr-auto"></img>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="links">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          <span className="spacing">Home</span>
        </Link>
        <Link to="/products">
          <FontAwesomeIcon icon={faBox} />
          <span className="spacing">Products</span>
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="spacing">Cart</span>
          {cartCount > 0 && <span className="cart-count ">{cartCount}</span>}
        </Link>
        <Link to="/login">
          <FontAwesomeIcon icon={faSignInAlt} />
          <span className="spacing">Login</span>
        </Link>
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
        </Link>
        <Link to="/reviews">
          <FontAwesomeIcon icon={faUser} /> <span>Reviews</span>
        </Link>
        
        <Link to="/cart_test">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">{size}</span>
        </Link>
        {/* <Link to="/single_page">
          <span className="spaceing">Single Page</span>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
