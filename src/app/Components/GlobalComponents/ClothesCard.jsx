import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CryptoJS from "crypto-js";

import "./ClothesCard.css";

const ClothesCard = ({ item }) => {
  const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

  const hashId = (id) => {
    return encodeURIComponent(CryptoJS.AES.encrypt(id, SECRET_KEY).toString());
  };

  const router = useRouter();

  const handleClick = () => {
    const hashedId = hashId(item._id);
    router.push(`/product/${hashedId}`);
  };

  const price = item.price - item.saleAmount;

  return (
    <div className="clothes-card-wrapper">
      <Image
        src={item.mainImage.image}
        alt="ClothesImage"
        width={224}
        height={285}
        className="clothes-card-image"
        onClick={() => handleClick()}
        priority
      />

      <div className="clothes-card-details">
        <div
          className="clothes-card-details-flex"
          style={{ alignItems: "flex-start" }}
        >
          <h5 className="clothes-card-title" onClick={() => handleClick()}>
            {item.model} For Christmas
          </h5>
          <p className="clothes-card-price">
            {item.saleAmount > 0 && <s>{item.price}</s>} {price} ₾
          </p>
        </div>
        <div className="clothes-card-details-flex">
          <p className="clothes-card-description">{item.brand}</p>

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
