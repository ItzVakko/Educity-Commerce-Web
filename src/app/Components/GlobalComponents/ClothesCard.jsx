import React, { useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CryptoJS from "crypto-js";

import "./ClothesCard.css";

const ClothesCard = ({ item, width, height, imageWidth, imageHeight }) => {
  const formattedPrice = useMemo(
    () => `${item.currency} ${item.price}`,
    [item.currency, item.price]
  );

  const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

  const hashId = (id) => {
    return encodeURIComponent(CryptoJS.AES.encrypt(id, SECRET_KEY).toString());
  };

  const router = useRouter();

  const handleClick = () => {
    const hashedId = hashId(item._id);
    router.push(`/product/${hashedId}`);
  };

  return (
    <div
      className="clothes-card-wrapper"
      style={{ width: width, height: height }}
    >
      <Image
        width={300}
        height={300}
        className="clothes-card-image"
        src={item.mainImage.image}
        alt="ClothesImage"
        style={{ width: imageWidth, height: imageHeight }}
        onClick={() => handleClick()}
      />

      <div className="clothes-card-details">
        <div className="clothes-card-details-flex">
          <h5 className="clothes-card-title">{item.model}</h5>
          <p className="clothes-card-price">{formattedPrice}</p>
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
