import React from "react";
import NavBar from "../../Components/GlobalComponents/NavBar";
import LoginForm from "./LoginForm";
import Footer from "@/app/Components/GlobalComponents/Footer";

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

      <Footer />
    </>
  );
};

export default LoginPage;
