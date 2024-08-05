import React, { useState, useEffect, useCallback } from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import "./Filters.css";

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const handler = setTimeout(() => {
      onFilterChange(filters);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [filters, onFilterChange]);

  const handleFilterClick = useCallback((filterType, value) => {
    setFilters((prevFilters) => {
      const isActive = prevFilters[filterType] === value;
      const updatedFilters = isActive
        ? { ...prevFilters, [filterType]: undefined }
        : { ...prevFilters, [filterType]: value };

      if (updatedFilters[filterType] === undefined) {
        delete updatedFilters[filterType];
      }

      return updatedFilters;
    });
  }, []);

  const isButtonActive = useCallback(
    (filterType, value) => {
      return filters[filterType] === value;
    },
    [filters]
  );

  return (
    <aside>
      <h4 className="filters-title">Filters</h4>
      <section className="size-filter-section">
        <h5 className="size-filter-title">Size</h5>
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
