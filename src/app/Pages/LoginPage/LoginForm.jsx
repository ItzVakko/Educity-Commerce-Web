import React from "react";
import FacebookIcon from "../../Assets/Images/SVGIcons/FacebookIcon.svg";
import InstagramIcon from "../../Assets/Images/SVGIcons/InstagramIcon.svg";
import GoogleIcon from "../../Assets/Images/SVGIcons/GoogleIcon.svg";

import "./LoginForm.css";

const LoginForm = () => {
  return (
    <form className="login-form">
      <h1>WELCOME</h1>

      <label htmlFor="username-login">User name</label>
      <input type="text" id="username-login" name="username-login" />

      <label htmlFor="password-login">Password</label>
      <input type="text" id="password-login" name="password-login" />

      <span className="password-forgot">Forgot password?</span>

      <div className="login-page-buttons">
        <button className="login-button">Log in</button>
        <button>Create account</button>
      </div>

      <div className="social-networks">
        <button>
          <FacebookIcon />
          <span>Continue with Facebook</span>
        </button>
        <button>
          <InstagramIcon />
          <span>Continue with Instagram</span>
        </button>
        <button>
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
