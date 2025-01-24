import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import PropTypes from "prop-types";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <>
      <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="login-popup-inputs">
            {currState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="your Name" required />
            )}
            <input type="text" placeholder="your Email" required />
            <input type="text" placeholder="your Password" required />
          </div>
          <button>
            {currState === "Sign Up" ? "Create account" : "Login"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" className="checkbox" required />
            <p>By continuing, I agree the terms of use and privacy policy</p>
          </div>
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span
                onClick={() => {
                  setCurrState("Sign Up");
                }}
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

// Add prop validation
LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default LoginPopup;
