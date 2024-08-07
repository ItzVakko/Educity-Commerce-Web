import React, { useMemo } from "react";
import Image from "next/image";
import MenImg from "../../Assets/Images/MensClothes/beautiful-male-model-holding-hand-hair 1.png";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch } from "react-redux";
import { delItem } from "@/app/Store/Reducers/cartReducer";

import "./CartCard.css";

const CartCard = ({ item, index }) => {
  const formattedPrice = useMemo(
    () => `${item.price}${item.currency}`,
    [item.currency, item.price]
  );

  const dispatch = useDispatch();

  return (
    <div className="cart-card-wrapper">
      <button
        className="delete-item-button"
        onClick={() => dispatch(delItem({ index }))}
      >
        <CloseRoundedIcon />
      </button>

      <Image src={MenImg} alt="product-image" className="cart-card-img" />

      <div className="cart-card-details-wrapper">
        <h4>{item.model}</h4>

        <p className="product-properties">
          ზომა: <span>{item.size}</span>
        </p>

        <div className="price-and-color-wrapper">
          <p className="product-properties">
            ფერი: <span> შავი</span>
          </p>

          <span className="product-price">{formattedPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
