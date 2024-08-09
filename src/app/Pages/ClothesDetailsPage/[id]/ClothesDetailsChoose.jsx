import React, { useState } from "react";
import Image from "next/image";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import "./ClothesDetailsChoose.css";

const ClothesDetailsChoose = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.mainImage.image);

  const handleColorClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <div className="container">
      <div className="clothes-details-wrapper">
        <div className="clothes-details-main-image-wrapper">
          <Image
            width={500}
            height={500}
            className="clothes-details-main-image"
            alt="clothes-image"
            src={mainImage}
            priority
          />
        </div>

        <div className="clothes-details-info-wrapper">
          <div className="clothes-details-line"></div>
          <h1 className="clothes-details-model">{product.model}</h1>
          <h2 className="clothes-details-brand">{product.brand}</h2>
          <p className="clothes-details-price">
            ფასი <span>199 ₾</span>
          </p>

          <p className="clothes-details-color">ფერი</p>
          <div className="clothes-details-color-options">
            <div
              className="color-option"
              onClick={() => handleColorClick(product.mainImage.image)}
              style={{ cursor: "pointer" }}
            >
              <Image
                width={80}
                height={85}
                alt="Main Color"
                src={product.mainImage.image}
              />
            </div>
            {product.colorImages.map((colorImage) => (
              <div
                key={colorImage.color}
                className="color-option"
                onClick={() => handleColorClick(colorImage.image)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  width={80}
                  height={85}
                  alt={colorImage.color}
                  src={colorImage.image}
                />
              </div>
            ))}
          </div>

          <p className="clothes-details-size">ზომა</p>
          <div className="clothes-details-sizes-wrapper">
            {product.size.map((size, index) => (
              <button className="clothes-details-size-button" key={index}>
                {size}
              </button>
            ))}
          </div>

          <p className="clothes-details-qty">რაოდენობა</p>

          <div className="clothes-details-qty-input-wrapper">
            <input
              type="number"
              id="clothes-details-qty-input"
              readOnly
              value="1"
            />
            <div className="clothes-details-qty-buttons-wrapper">
              <button className="first-button">
                <KeyboardArrowUpRoundedIcon />
              </button>
              <button className="second-button">
                <KeyboardArrowDownRoundedIcon />
              </button>
            </div>
          </div>

          <div className="clothes-details-basket-wrapper">
            <button className="clothes-details-heart-button">
              <FavoriteBorderRoundedIcon />
            </button>
            <button className="clothes-details-add-basket-button">
              კალათაში დამატება
            </button>
          </div>

          <button className="clothes-details-virtual-button">
            ვირტუალური მოზომვა
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClothesDetailsChoose;
