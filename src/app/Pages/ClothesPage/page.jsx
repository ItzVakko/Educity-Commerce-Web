"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ClothesList from "./ClothesList";
import Filters from "./Filters";
import NavBar from "../../Components/GlobalComponents/NavBar";

import "./page.css";

const ClothesPage = () => {
  const [clothesData, setClothesData] = useState([]);
  const [filters, setFilters] = useState({});
  const router = useRouter();
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
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    setFilters(params);
  }, [searchParams]);

  const handleFilterChange = (newFilters) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
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
    </>
  );
};

export default ClothesPage;
