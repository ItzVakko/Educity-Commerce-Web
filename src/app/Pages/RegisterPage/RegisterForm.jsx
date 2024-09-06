"use client";

import React, { useState } from "react";
import FacebookIcon from "../../Assets/Images/SVGIcons/FacebookIcon.svg";
import InstagramIcon from "../../Assets/Images/SVGIcons/InstagramIcon.svg";
import GoogleIcon from "../../Assets/Images/SVGIcons/GoogleIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/app/Store/Reducers/authReducer";

import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    dispatch(
      registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
    );
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h1>რეგისტრაცია</h1>

      <label htmlFor="username-register">მომხმარებლის სახელი</label>
      <input
        type="text"
        id="username-register"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <label htmlFor="mail-register">ელ.ფოსტა</label>
      <input
        type="email"
        id="mail-register"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password-register">პაროლი</label>
      <input
        type="password"
        id="password-register"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <label htmlFor="repeat-password-register">გაიმეორეთ პაროლი</label>
      <input
        type="password"
        id="repeat-password-register"
        name="repeatPassword"
        value={formData.repeatPassword}
        onChange={handleChange}
        required
      />

      <div className="register-social-networks">
        <button type="button">
          <FacebookIcon />
        </button>
        <button type="button">
          <InstagramIcon />
        </button>
        <button type="button">
          <GoogleIcon />
        </button>
      </div>

      <button className="register-button" type="submit">
        დარეგისტრირება
      </button>

      {status === "failed" && <p className="error-message">{error}</p>}
    </form>
  );
};

export default RegisterForm;
