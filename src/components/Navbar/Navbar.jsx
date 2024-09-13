import React,  {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBox,
  faShoppingCart,
  faSignInAlt,
  faUser,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ cartCount, size }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggles the dropdown open/close state
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Closes the dropdown on link click
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <nav className="navbar">
     <img src="https://img1.wsimg.com/isteam/ip/7ffb00db-210e-43d1-a8d6-23fe463127a3/logo.PNG/:/" alt="eCommerce Logo" class="navbar-logo mr-auto"></img>
     <div className="links">
        {/* Dropdown on the left (new position) */}
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faHome} />
          
            <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
          </button>

          {/* Dropdown menu content */}
          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            <Link className="d-flex justify-content-center" to="/" onClick={closeDropdown}>
              <FontAwesomeIcon icon={faHome} />
              <span className="spacing">Home</span>
            </Link>
            <Link  className="d-flex justify-content-center" to="/products" onClick={closeDropdown}>
              <FontAwesomeIcon icon={faBox} />
              <span className="spacing">Products</span>
            </Link>
            
            
            <Link  className="d-flex justify-content-center" to="/login" onClick={closeDropdown}>
              <FontAwesomeIcon icon={faSignInAlt} />
              <span className="spacing">Login</span>
            </Link>
            <Link  className="d-flex justify-content-center" to="/profile" onClick={closeDropdown}>
              <FontAwesomeIcon icon={faUser} />
              <span className="spacing">Profile</span>
            </Link>
            <Link   className="d-flex justify-content-center" to="/reviews" onClick={closeDropdown}>
              <FontAwesomeIcon icon={faUser} />
              <span className="spacing">Reviews</span>
            </Link>
          </div>
        </div>

        {/* Cart icon (new position) */}
        <div className="cart-container">
          <Link to="/cart_test">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            {/* Always display the count, even when it's 0 */}
            <span className="cart-count">{cartCount}</span>
          </Link>
          
        </div>
      </div>
      </nav>

  );
};

export default Navbar;
