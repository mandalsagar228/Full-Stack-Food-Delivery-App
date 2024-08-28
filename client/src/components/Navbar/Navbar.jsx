import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt="logo" className="logo" />

        <ul className="navbar-menu">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("mobile_app")}
            className={menu === "mobile_app" ? "active" : ""}
          >
            Mobile App
          </li>
          <li
            onClick={() => setMenu("contact_us")}
            className={menu === "contact_us" ? "active" : ""}
          >
            Contact Us
          </li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="search_icon" />
          <div className="nav-search-icon">
            <img src={assets.basket_icon} alt="babasket_icon" />
            <div className="dot"></div>
          </div>
          <button>Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
