import React from "react";
import Image from "next/image";

import part1 from "./Assets/Images/PartnerCompany/Rectangle 1.png";
import part2 from "./Assets/Images/PartnerCompany/Rectangle 2.png";
import part3 from "./Assets/Images/PartnerCompany/Rectangle 3.png";
import part4 from "./Assets/Images/PartnerCompany/Rectangle 4.png";
import part5 from "./Assets/Images/PartnerCompany/Rectangle 5.png";
import part6 from "./Assets/Images/PartnerCompany/Rectangle 6.png";
import part7 from "./Assets/Images/PartnerCompany/Rectangle 7.png";

import "./Partner.css";

const Partner = () => {
  const PartnerCompanyLogo = [
    part1,
    part1,
    part2,
    part3,
    part4,
    part2,
    part2,
    part2,
    part5,
    part6,
    part7,
  ];

  return (
    <div className="PartneryCompanyContainer">
      {PartnerCompanyLogo.map((item, index) => (
        <Image className="PartnerImg" key={index} src={item} alt="IMG" />
      ))}
    </div>
  );
};

export default Partner;
