"use client";

import React from "react";
import Image from "next/image";
import HeaderBannerGirlImg from "./Assets/Images/HeaderBanner/mainImgGirlImg.png";
import { useRouter } from "next/navigation";

import "./HeaderBanner.css";

const HeaderBanner = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/clothes");
  };

  return (
    <div className="HeaderBanner">
      <div className="HeaderBannerInfoWrapper">
        <h1>
          ერთად <br />
          გამოვიკვლიოთ უნიკალური პროდუქცია.
        </h1>
        <p>იცხოვრე გავლენიანი და ინოვაციური მოდისთვის!</p>
        <button onClick={handleButtonClick}>პროდუქციის შერჩევა</button>
      </div>
      <div className="MainPageBannerImgContainer">
        <Image src={HeaderBannerGirlImg} alt="MainPageBannerGirlImg" />
      </div>
    </div>
  );
};

export default HeaderBanner;
