import Footer from "@/app/Components/GlobalComponents/Footer";
import NavBar from "@/app/Components/GlobalComponents/NavBar";
import React from "react";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <RegisterForm />
      </main>

      <Footer />
    </>
  );
};

export default RegisterPage;
