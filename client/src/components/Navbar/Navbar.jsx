import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { StoreContext } from "../../context/storeContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("");
  const { GetTotalCartItem } = useContext(StoreContext);
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="logo" />
        </Link>

        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile_app")}
            className={menu === "mobile_app" ? "active" : ""}
          >
            Mobile App
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact_us")}
            className={menu === "contact_us" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="search_icon" />
          <div className="nav-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="babasket_icon" />{" "}
            </Link>
            <div className={!GetTotalCartItem() ? "" : "dot"}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
      </div>
    </>
  );
};
// Prop validation
Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;
