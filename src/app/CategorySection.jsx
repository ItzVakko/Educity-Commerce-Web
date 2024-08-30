import React from "react";
import Image from "next/image";
import Link from "next/link";

import New from "./Assets/Images/Section1/New.png";
import Sale from "./Assets/Images/Section1/Sale.png";
import Women from "./Assets/Images/Section1/Women.png";
import Men from "./Assets/Images/Section1/Men.png";

import "./CategorySection.css";

const CategorySection = () => {
  const images = [
    {
      text: "ახალი",
      img: New,
      href: "/clothes?new=true",
    },
    {
      text: "ფასდაკლება",
      img: Sale,
      href: "/clothes?sale=true",
    },
    {
      text: "ქალი",
      img: Women,
      href: "/clothes?category=women",
    },
    {
      text: "კაცი",
      img: Men,
      href: "/clothes?category=men",
    },
  ];

  return (
    <section className="section1Container">
      {images.map((item, index) => (
        <div className="section1ContainerItem" key={index}>
          <Image src={item.img} alt={item.text} />
          <Link href={item.href} passHref>
            <div className="section1ContainerItemH1Container">
              <h1>{item.text}</h1>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default CategorySection;
