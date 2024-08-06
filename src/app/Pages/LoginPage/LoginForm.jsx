import React from "react";
import FacebookIcon from "../../Assets/Images/SVGIcons/FacebookIcon.svg";
import InstagramIcon from "../../Assets/Images/SVGIcons/InstagramIcon.svg";
import GoogleIcon from "../../Assets/Images/SVGIcons/GoogleIcon.svg";

import "./LoginForm.css";

const LoginForm = () => {
  return (
    <form className="login-form">
      <h1>ავტორიზაცია</h1>

      <label htmlFor="username-login">სახელი</label>
      <input type="text" id="username-login" name="username-login" />

      <label htmlFor="password-login">პაროლი</label>
      <input type="text" id="password-login" name="password-login" />

      <span className="password-forgot">დაგავიწყდა პაროლი?</span>

      <div className="login-page-buttons">
        <button className="login-button">შესვლა</button>
        <button>რეგისტრაცია</button>
      </div>

      <div className="social-networks">
        <button>
          <FacebookIcon />
          <span>Facebook ავტორიზაცია</span>
        </button>
        <button>
          <InstagramIcon />
          <span>Instagram ავტორიზაცია</span>
        </button>
        <button>
          <GoogleIcon />
          <span>Google ავტორიზაცია</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
