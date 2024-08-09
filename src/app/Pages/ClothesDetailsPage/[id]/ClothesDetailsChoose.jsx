import React from "react";
import Image from "next/image";

import "./ClothesDetailsChoose.css";

const ClothesDetailsChoose = () => {
  return (
    <div>
      <Image
        width={100}
        height={100}
        className="clothes-details-main-image"
        alt="clothes-image"
        src="https://drive.google.com/uc?id=1sZXcnhKN3pfJZ_1wLoFPKGm7FOeJnwow"
      />

      <div>
        <div className="clothes-details-line"></div>
      </div>
    </div>
  );
};

export default ClothesDetailsChoose;
