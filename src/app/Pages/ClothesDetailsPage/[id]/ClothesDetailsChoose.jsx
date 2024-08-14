import React, { useState, useEffect } from "react";
import Image from "next/image";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/Store/Reducers/cartReducer";

import "./ClothesDetailsChoose.css";

const ClothesDetailsChoose = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.mainImage.image);
  const [selectedColor, setSelectedColor] = useState(product.mainImage.color);
  const [selectedSize, setSelectedSize] = useState(product.size[0] || "");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setMainImage(product.mainImage.image);
    setSelectedColor(product.mainImage.color);
  }, [product]);

  const handleColorClick = (color, imageUrl) => {
    setSelectedColor(color);
    setMainImage(imageUrl);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    const item = {
      ...product,
      selectedColor,
      selectedSize,
      qty: quantity,
    };
    dispatch(addItem(item));
  };

  const price = product.price - product.saleAmount;

  const formattedSalePrice = product.price.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formattedPrice = price.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="container">
      <div className="clothes-details-wrapper">
        <div className="clothes-details-main-image-wrapper">
          <Image
            width={500}
            height={600}
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
            ფასი{"    "}
            <span>
              {product.saleAmount > 0 && <s> {formattedSalePrice}</s>}{" "}
              {formattedPrice} ₾
            </span>
          </p>

          <p className="clothes-details-color">ფერი</p>
          <div className="clothes-details-color-options">
            <div
              className="color-option"
              onClick={() =>
                handleColorClick(
                  product.mainImage.color,
                  product.mainImage.image
                )
              }
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
                onClick={() =>
                  handleColorClick(colorImage.color, colorImage.image)
                }
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
              <button
                className="clothes-details-size-button"
                key={index}
                onClick={() => handleSizeClick(size)}
                style={{
                  backgroundColor:
                    selectedSize === size ? "lightgrey" : "transparent",
                }}
              >
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
              value={quantity}
            />
            <div className="clothes-details-qty-buttons-wrapper">
              <button
                className="first-button"
                onClick={() => handleQuantityChange(1)}
                aria-label="Increase quantity"
              >
                <KeyboardArrowUpRoundedIcon />
              </button>
              <button
                className="second-button"
                onClick={() => handleQuantityChange(-1)}
                aria-label="Decrease quantity"
              >
                <KeyboardArrowDownRoundedIcon />
              </button>
            </div>
          </div>

          <div className="clothes-details-basket-wrapper">
            <button className="clothes-details-heart-button">
              <FavoriteBorderRoundedIcon />
            </button>
            <button
              className="clothes-details-add-basket-button"
              onClick={handleAddToBasket}
            >
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
