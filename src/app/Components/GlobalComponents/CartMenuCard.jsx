"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  updateItemQuantity,
  delItem,
} from "@/app/Store/Reducers/cartReducer";
import "./CartMenuCard.css";

const CartMenuCard = React.memo(({ item }) => {
  const dispatch = useDispatch();

  const colorImage =
    item.colorImages.find((colorImg) => colorImg.color === item.selectedColor)
      ?.image || item.mainImage.image;

  const qty = useSelector(
    (state) =>
      state.cart.items.find(
        (cartItem) =>
          cartItem._id === item._id &&
          cartItem.selectedSize === item.selectedSize &&
          cartItem.selectedColor === item.selectedColor
      )?.qty || 0
  );

  const increment = useCallback(() => {
    dispatch(
      addItem({
        ...item,
        qty: 1,
        selectedSize: item.selectedSize,
        selectedColor: item.selectedColor,
      })
    );
  }, [dispatch, item]);

  const decrement = useCallback(() => {
    if (qty > 1) {
      dispatch(
        updateItemQuantity({
          _id: item._id,
          selectedSize: item.selectedSize,
          selectedColor: item.selectedColor,
          qty: qty - 1,
        })
      );
    }
  }, [dispatch, item._id, item.selectedSize, item.selectedColor, qty]);

  const handleRemove = useCallback(() => {
    dispatch(
      delItem({
        _id: item._id,
        selectedSize: item.selectedSize,
        selectedColor: item.selectedColor,
      })
    );
  }, [dispatch, item._id, item.selectedSize, item.selectedColor]);

  const price = item.price - item.saleAmount;

  return (
    <div className="cart-menu-card-wrapper">
      <Image
        src={colorImage}
        alt={`Image of ${item.model}`}
        width={100}
        height={100}
      />
      <div className="cart-menu-card-description">
        <div>
          <h3 className="cart-menu-card-model">{item.model}</h3>
          <p className="cart-menu-card-size">
            ზომა: <span>{item.selectedSize}</span>
          </p>
          <p className="cart-menu-card-color">
            ფერი: <span>{item.selectedColor}</span>
          </p>
        </div>

        <div className="cart-menu-card-input-price">
          <div>
            <div className="input-number-container">
              <div className="input-number-flex">
                <button
                  type="button"
                  className="input-number-button"
                  onClick={decrement}
                  aria-label="Decrease"
                >
                  <svg
                    className="input-number-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
                <input
                  className="input-number-input"
                  type="number"
                  value={qty}
                  readOnly
                  aria-roledescription="Number field"
                />
                <button
                  type="button"
                  className="input-number-button"
                  onClick={increment}
                  aria-label="Increase"
                >
                  <svg
                    className="input-number-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              </div>
            </div>
            <span>x</span>
            {price} ₾
          </div>
          <DeleteForeverIcon
            onClick={handleRemove}
            className="remove-icon-cart"
          />
        </div>
      </div>
    </div>
  );
});

export default CartMenuCard;
