import React from "react";
import Image from "next/image";
import HeaderBannerGirlImg from "./Assets/Images/HeaderBanner/mainImgGirlImg.png";

import "./HeaderBanner.css";

const HeaderBanner = () => {
  return (
    <div className="HeaderBanner">
      <div className="HeaderBannerInfoWrapper">
        <h1>
          LET’S
          <br />
          EXPLORE UNIQUE CLOTHES.
        </h1>
        <p>Live for Influential and Innovative fashion!</p>
        <button>SHOP NOW</button>
      </div>
      <div className="MainPageBannerImgContainer">
        <Image src={HeaderBannerGirlImg} alt="MainPageBannerGirlImg" />
      </div>
    </div>
  );
};

export default HeaderBanner;
