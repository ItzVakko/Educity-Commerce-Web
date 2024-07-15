import React from "react";
import NavBar from "../../Components/GlobalComponents/NavBar";
import CheckoutItems from "./CheckoutItems";
import PaymentForm from "./PaymentForm";

import "./page.css";

const CheckoutPage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="checkout-page-main">
        <CheckoutItems />

        <PaymentForm />
      </main>
    </>
  );
};

export default CheckoutPage;
