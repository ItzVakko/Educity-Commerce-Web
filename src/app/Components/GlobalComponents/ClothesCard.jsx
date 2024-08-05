import React, { useMemo } from "react";
import Image from "next/image";

import MenImg from "../../Assets/Images/MensClothes/beautiful-male-model-holding-hand-hair 1.png";

import "./ClothesCard.css";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/Store/Reducers/cartReducer";

const ClothesCard = ({ item, width, height, imageWidth, imageHeight }) => {
  const formattedPrice = useMemo(
    () => `${item.currency} ${item.price}`,
    [item.currency, item.price]
  );

  const dispatch = useDispatch();

  return (
    <div
      className="clothes-card-wrapper"
      style={{ width: width, height: height }}
    >
      <Image
        className="clothes-card-image"
        src={MenImg}
        alt="ClothesImage"
        style={{ width: imageWidth, height: imageHeight }}
        onClick={() => {
          dispatch(addItem(item));
        }}
      />

      <div className="clothes-card-details">
        <div className="clothes-card-details-flex">
          <h5 className="clothes-card-title">{item.brand}</h5>
          <p className="clothes-card-price">{formattedPrice}</p>
        </div>
        <div className="clothes-card-details-flex">
          <p className="clothes-card-description">{item.model}</p>

          <div className="clothes-card-sizes">
            <h5>XS</h5>
            <h5>S</h5>
            <h5>M</h5>
            <h5>L</h5>
            <h5>XL</h5>
            <h5>2XL</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ClothesCard);
