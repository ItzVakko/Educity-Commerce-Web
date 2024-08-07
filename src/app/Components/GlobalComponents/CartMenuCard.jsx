import React, { useState, useMemo } from "react";
import MenImg from "../../Assets/Images/MensClothes/beautiful-male-model-holding-hand-hair 1.png";
import Image from "next/image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { delItem } from "@/app/Store/Reducers/cartReducer";

import "./CartMenuCard.css";

const CartMenuCard = ({ item, index }) => {
  const [value, setValue] = useState(1);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const formattedPrice = useMemo(
    () => `${item.price} ${item.currency}`,
    [item.currency, item.price]
  );

  const dispatch = useDispatch();

  return (
    <div className="cart-menu-card-wrapper">
      <Image src={MenImg} alt="product-img" />
      <div className="cart-menu-card-description">
        <div>
          <h3 className="cart-menu-card-model">{item.model}</h3>
          <p className="cart-menu-card-size">ზომა: {item.size}</p>
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
                  value={value}
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
            {formattedPrice}
          </div>
          <DeleteForeverIcon
            onClick={() => dispatch(delItem({ index }))}
            className="remove-icon-cart"
          />
        </div>
      </div>
    </div>
  );
};

export default CartMenuCard;
