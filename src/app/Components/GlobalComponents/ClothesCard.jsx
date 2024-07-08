import React, { useMemo } from "react";
import Image from "next/image";

import MenImg from "../../Assets/Images/MensClothes/beautiful-male-model-holding-hand-hair 1.png";

import "./ClothesCard.css";

const ClothesCard = ({ item, width, height, imageWidth, imageHeight }) => {
  const formattedPrice = useMemo(
    () => `${item.currency} ${item.price}`,
    [item.currency, item.price]
  );

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
      />

      <div className="clothes-card-details">
        <div className="clothes-card-details-flex">
          <h5 className="clothes-card-title">{item.brand}</h5>
          <p className="clothes-card-price">{formattedPrice}</p>
        </div>
        <div className="clothes-card-details-flex">
          <p className="clothes-card-description">{item.model}</p>

          <div className="clothes-card-sizes">
            {item.size.map((item, index) => (
              <h5 key={index}>{item}</h5>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ClothesCard);
