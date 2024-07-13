import React from "react";
import ClothesList from "./ClothesList";
import Filters from "./Filters";
import NavBar from "../../Components/GlobalComponents/NavBar";

import "./page.css";

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
