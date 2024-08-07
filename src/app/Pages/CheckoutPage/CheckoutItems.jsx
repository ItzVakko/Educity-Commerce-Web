"use client";

import React from "react";
import CartCard from "@/app/Components/GlobalComponents/CartCard";
import { useSelector } from "react-redux";

import "./CheckoutItems.css";

const CheckoutItems = () => {
  const product = useSelector((state) => state.cart.items);
  const priceSum = useSelector((state) =>
    state.cart.items.reduce((total, curlVal) => {
      return total + curlVal.price;
    }, 0)
  );

  return (
    <section className="checkout-items-wrapper">
      <h2>პროდუქტი</h2>
      <div className="line"></div>

      <div className="cart-cards-wrapper">
        {product.map((item, index) => (
          <CartCard key={index} item={item} index={index} />
        ))}
      </div>

      <div className="line"></div>

      <div className="prices-wrapper">
        <p>ფასდაკლება:</p>
        <span>0,00₾</span>
      </div>

      <div className="prices-wrapper">
        <p>ჯამში:</p>
        <span>{priceSum}₾</span>
      </div>
    </section>
  );
};

export default CheckoutItems;
