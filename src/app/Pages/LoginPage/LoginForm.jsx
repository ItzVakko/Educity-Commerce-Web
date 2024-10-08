"use client";

import React, { useEffect, useState } from "react";
import FacebookIcon from "../../Assets/Images/SVGIcons/FacebookIcon.svg";
import InstagramIcon from "../../Assets/Images/SVGIcons/InstagramIcon.svg";
import GoogleIcon from "../../Assets/Images/SVGIcons/GoogleIcon.svg";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setAuthenticated } from "@/app/Store/Reducers/authReducer";

import "./LoginForm.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const success = useSelector((state) => state.auth.success);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token) {
        dispatch(setAuthenticated(true));
        router.push("/");
      }
    }
  }, [dispatch, router]);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    router.push("/register");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser(formData));
    if (loginUser.fulfilled.match(resultAction)) {
      setFormData({ username: "", password: "" });
      dispatch(setAuthenticated(true));
      router.push("/");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>ავტორიზაცია</h1>

      <label htmlFor="username-login">მომხმარებლის სახელი</label>
      <input
        type="text"
        id="username-login"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <label htmlFor="password-login">პაროლი</label>
      <input
        type="password"
        id="password-login"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <span className="password-forgot">დაგავიწყდა პაროლი?</span>

      <div className="login-page-buttons">
        <button className="login-button" type="submit">
          შესვლა
        </button>
        <button onClick={handleRegisterClick}>რეგისტრაცია</button>
      </div>

      <div className="social-networks">
        <button type="button">
          <FacebookIcon />
          <span>Facebook ავტორიზაცია</span>
        </button>
        <button type="button">
          <InstagramIcon />
          <span>Instagram ავტორიზაცია</span>
        </button>
        <button type="button">
          <GoogleIcon />
          <span>Google ავტორიზაცია</span>
        </button>
      </div>

      {status === "failed" && <p className="error-message">{error}</p>}
      {status === "succeeded" && <p className="error-message">{success}</p>}
    </form>
  );
};

export default LoginForm;
