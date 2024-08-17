"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import "./Filters.css";

const Filters = ({ onFilterChange }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState(() => {
    const params = Object.fromEntries(searchParams.entries());
    return params;
  });

  const debounceTimeout = useRef(null);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    setFilters(params);
  }, [searchParams]);

  const handleFilterClick = useCallback(
    (filterType, value) => {
      setFilters((prevFilters) => {
        let updatedFilters = { ...prevFilters };

        if (filterType === "size") {
          if (updatedFilters[filterType] === value) {
            delete updatedFilters[filterType];
          } else {
            updatedFilters[filterType] = value;
          }
        } else {
          const currentValues = updatedFilters[filterType]
            ? updatedFilters[filterType].split(",")
            : [];
          if (currentValues.includes(value)) {
            updatedFilters[filterType] = currentValues
              .filter((item) => item !== value)
              .join(",");
            if (!updatedFilters[filterType]) {
              delete updatedFilters[filterType];
            }
          } else {
            updatedFilters[filterType] = [...currentValues, value].join(",");
          }
        }

        if (debounceTimeout.current) {
          clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
          const query = new URLSearchParams(updatedFilters).toString();
          router.push(`/clothes?${query}`);
          onFilterChange(updatedFilters);
        }, 300);

        return updatedFilters;
      });
    },
    [router, onFilterChange]
  );

  const isButtonActive = useCallback(
    (filterType, value) => {
      if (filterType === "size") {
        return filters[filterType] === value;
      }
      const currentValues = filters[filterType]
        ? filters[filterType].split(",")
        : [];
      return currentValues.includes(value);
    },
    [filters]
  );

  return (
    <aside className="filters-wrapper">
      <h4 className="filters-title">გაფილტვრა</h4>
      <section className="size-filter-section">
        <h5 className="size-filter-title">ზომები</h5>
        <div className="size-filter-buttons-wrapper">
          {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
            <button
              key={size}
              className={
                isButtonActive("size", size)
                  ? "size-filter-button clicked-btn"
                  : "size-filter-button"
              }
              onClick={() => handleFilterClick("size", size)}
            >
              {size}
            </button>
          ))}
        </div>
      </section>
      <section className="category-filter-section">
        <div
          className="category-filter-button"
          onClick={() => handleFilterClick("brand", "VAKO")}
        >
          ბრენდები
          <button>
            <KeyboardArrowRightRoundedIcon />
          </button>
        </div>
        <div
          className="category-filter-button"
          onClick={() => handleFilterClick("color", "ColorName")}
        >
          ფერი
          <button>
            <KeyboardArrowRightRoundedIcon />
          </button>
        </div>
        <div
          className="category-filter-button"
          onClick={() => handleFilterClick("price", "PriceRange")}
        >
          ფასი
          <button>
            <KeyboardArrowRightRoundedIcon />
          </button>
        </div>
        <div
          className="category-filter-button"
          onClick={() => handleFilterClick("discount", "DiscountValue")}
        >
          ფასდაკლება
          <button>
            <KeyboardArrowRightRoundedIcon />
          </button>
        </div>
        <div
          className="category-filter-button"
          onClick={() => handleFilterClick("style", "StyleName")}
        >
          სტილი
          <button>
            <KeyboardArrowRightRoundedIcon />
          </button>
        </div>
        <div
          className="category-filter-button"
          onClick={() => handleFilterClick("season", "SeasonName")}
        >
          სეზონი
          <button>
            <KeyboardArrowRightRoundedIcon />
          </button>
        </div>
      </section>
    </aside>
  );
};

export default Filters;
