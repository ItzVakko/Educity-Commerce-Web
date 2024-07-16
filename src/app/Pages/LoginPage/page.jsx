import React from "react";
import NavBar from "../../Components/GlobalComponents/NavBar";
import LoginForm from "./LoginForm";

import "./page.css";

const LoginPage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <LoginForm />
      </main>
    </>
  );
};

export default LoginPage;
