import React from "react";
import FacebookIcon from "../../Assets/Images/SVGIcons/FacebookIcon.svg";
import InstagramIcon from "../../Assets/Images/SVGIcons/InstagramIcon.svg";
import GoogleIcon from "../../Assets/Images/SVGIcons/GoogleIcon.svg";

import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <form className="register-form">
      <h1>რეგისტრაცია</h1>

      <label htmlFor="username-register">მომხმარებლის სახელი</label>
      <input type="text" id="username-register" name="username-register" />

      <label htmlFor="mail-register">ელ.ფოსტა</label>
      <input type="mail" id="mail-register" name="mail-register" />

      <label htmlFor="password-register">პაროლი</label>
      <input type="text" id="password-register" name="password-register" />

      <label htmlFor="repeat-password-register">გაიმეორეთ პაროლი</label>
      <input
        type="text"
        id="repeat-password-register"
        name="repeat-password-register"
      />

      <div className="register-social-networks">
        <button>
          <FacebookIcon />
        </button>
        <button>
          <InstagramIcon />
        </button>
        <button>
          <GoogleIcon />
        </button>
      </div>

      <button className="register-button">დარეგისტრირება</button>
    </form>
  );
};

export default RegisterForm;
