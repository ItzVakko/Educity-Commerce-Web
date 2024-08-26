import React from "react";
import Image from "next/image";

import New from "./Assets/Images/Section1/New.png";
import Sale from "./Assets/Images/Section1/Sale.png";
import Women from "./Assets/Images/Section1/Women.png";
import Men from "./Assets/Images/Section1/Men.png";

import "./CategorySection.css";

const CategorySection = () => {
  const images = [
    {
      text: "New",
      img: New,
    },
    {
      text: "Sale",
      img: Sale,
    },
    {
      text: "Women",
      img: Women,
    },
    {
      text: "Men",
      img: Men,
    },
  ];

  return (
    <div className="section1Container">
      {images.map((item, index) => (
        <div className="section1ContainerItem" key={index}>
          <Image src={item.img} alt="hg" />
          <div className="section1ContainerItemH1Container">
            <h1>{item.text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
