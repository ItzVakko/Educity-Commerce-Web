import React from "react";
import ClothesList from "./ClothesList";
import Filters from "./Filters";

import "./ClothesPage.css";

const ClothesPage = () => {
  return (
    <div>
      <main className="clothes-page-main">
        <Filters />
        <ClothesList />
      </main>
    </div>
  );
};

export default ClothesPage;
