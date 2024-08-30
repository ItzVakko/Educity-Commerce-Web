"use client";

import React, { useEffect, useState } from "react";
import ClothesCard from "./Components/GlobalComponents/ClothesCard";
import Link from "next/link";

import "./ClothesCategories.css";

const ClothesCategories = ({ category, categoryGeorgian }) => {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClothes = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/clothes?category=${category}`);
        if (!response.ok) {
          throw new Error("Failed to fetch clothes");
        }
        const data = await response.json();
        setClothes(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchClothes();
    }
  }, [category]);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="ClothesCategoriesContainer">
      <h1 className="ClothesCategoriesHead">
        <Link
          href={{ pathname: "/clothes", query: { category: category } }}
          passHref
        >
          {categoryGeorgian}ს ტანსაცმელი
        </Link>
      </h1>
      <div className="ClothesCategoriesContentContainer">
        {clothes.map((item, index) => (
          <ClothesCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ClothesCategories;
