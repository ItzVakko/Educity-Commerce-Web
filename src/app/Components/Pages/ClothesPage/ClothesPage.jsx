import React from "react";
import ClothesList from "./ClothesList";
import Filters from "./Filters";
import NavBar from "../../GlobalComponents/NavBar";

import "./ClothesPage.css";

const ClothesPage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="clothes-page-main">
        <Filters />
        <ClothesList />
      </main>
    </>
  );
};

export default ClothesPage;
