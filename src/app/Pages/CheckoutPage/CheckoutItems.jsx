"use client";

import React, { useEffect, useState } from "react";
import CartCard from "@/app/Components/GlobalComponents/CartCard";
import { useSelector } from "react-redux";

import "./CheckoutItems.css";

const CheckoutItems = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const product = useSelector((state) => state.cart.items);

  const totalPrice = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.qty * item.price, 0)
  );

  const formattedTotalPrice = totalPrice.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  useEffect(() => {
    if (product.length == 0) {
      setIsEmpty(true);
    } else if (product.length > 0) {
      setIsEmpty(false);
    }
  }, [product]);

  return (
    <section className="checkout-items-wrapper">
      <h2>პროდუქტი</h2>
      <div className="line"></div>

      <div className="cart-cards-wrapper">
        {isEmpty ? (
          <p className="no-selected-product">
            თქვენ არ გაქვთ შერჩეული პროდუქტი!
          </p>
        ) : (
          product.map((item, index) => (
            <CartCard key={index} item={item} index={index} />
          ))
        )}
      </div>

      <div className="line"></div>

      <div className="prices-wrapper">
        <p>ფასდაკლება:</p>
        <span>0,00₾</span>
      </div>

      <div className="prices-wrapper">
        <p>ჯამში:</p>
        <span>{formattedTotalPrice}₾</span>
      </div>
    </section>
  );
};

export default CheckoutItems;
