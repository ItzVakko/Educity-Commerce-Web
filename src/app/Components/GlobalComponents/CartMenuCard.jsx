import React, { useCallback } from "react";
import MenImg from "../../Assets/Images/MensClothes/beautiful-male-model-holding-hand-hair 1.png";
import Image from "next/image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  updateItemQuantity,
  delItem,
} from "@/app/Store/Reducers/cartReducer";
import "./CartMenuCard.css";

const CartMenuCard = ({ item }) => {
  const dispatch = useDispatch();

  const qty = useSelector(
    (state) =>
      state.cart.items.find((cartItem) => cartItem._id === item._id)?.qty || 0
  );

  const increment = useCallback(() => {
    dispatch(addItem({ ...item, qty: 1 }));
  }, [dispatch, item]);

  const decrement = useCallback(() => {
    if (qty > 1) {
      dispatch(updateItemQuantity({ _id: item._id, qty: qty - 1 }));
    }
  }, [dispatch, item._id, qty]);

  const handleRemove = useCallback(() => {
    dispatch(delItem({ _id: item._id }));
  }, [dispatch, item._id]);

  const formattedPrice = `${item.price} ${item.currency}`;

  return (
    <div className="cart-menu-card-wrapper">
      <Image src={MenImg} alt="product-img" />
      <div className="cart-menu-card-description">
        <div>
          <h3 className="cart-menu-card-model">{item.model}</h3>
          <p className="cart-menu-card-size">Size: {item.size}</p>
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
            {formattedPrice}
          </div>
          <DeleteForeverIcon
            onClick={handleRemove}
            className="remove-icon-cart"
          />
        </div>
      </div>
    </div>
  );
};

export default CartMenuCard;
