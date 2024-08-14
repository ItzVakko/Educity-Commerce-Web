import React, { useCallback } from "react";
import Image from "next/image";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch, useSelector } from "react-redux";
import { delItem } from "@/app/Store/Reducers/cartReducer";

import "./CartCard.css";

const CartCard = ({ item }) => {
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

  const handleRemove = useCallback(() => {
    dispatch(
      delItem({
        _id: item._id,
        selectedSize: item.selectedSize,
        selectedColor: item.selectedColor,
      })
    );
  }, [dispatch, item._id, item.selectedSize, item.selectedColor]);

  const totalPrice = item.price - item.saleAmount;

  return (
    <div className="cart-card-wrapper">
      <button className="delete-item-button" onClick={() => handleRemove()}>
        <CloseRoundedIcon />
      </button>

      <Image
        src={colorImage}
        width={100}
        height={100}
        alt="product-image"
        className="cart-card-img"
      />

      <div className="cart-card-details-wrapper">
        <h4>{item.model}</h4>

        <p className="product-properties">
          ზომა: <span>{item.selectedSize}</span>
        </p>

        <div className="price-and-color-wrapper">
          <p className="product-properties">
            ფერი: <span>{item.selectedColor}</span>
          </p>

          <span className="product-price">
            {qty} x {totalPrice} ₾
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
