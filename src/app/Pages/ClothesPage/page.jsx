"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ClothesList from "./ClothesList";
import Filters from "./Filters";
import NavBar from "../../Components/GlobalComponents/NavBar";
import Footer from "@/app/Components/GlobalComponents/Footer";

import "./page.css";

const ClothesPage = React.memo(() => {
  const [clothesData, setClothesData] = useState([]);
  const [filters, setFilters] = useState({});
  const searchParams = useSearchParams();

  const fetchData = useCallback(async () => {
    try {
      const query = new URLSearchParams(filters).toString();
      const res = await fetch(`/api/clothes?${query}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setClothesData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [filters]);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    setFilters(params);
  }, [searchParams]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    const query = new URLSearchParams(newFilters).toString();
    window.history.pushState(null, "", `/clothes?${query}`);
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="clothes-page-main">
        <Filters onFilterChange={handleFilterChange} />
        <ClothesList clothesData={clothesData} />
      </main>
      <Footer />
    </>
  );
});

export default ClothesPage;
