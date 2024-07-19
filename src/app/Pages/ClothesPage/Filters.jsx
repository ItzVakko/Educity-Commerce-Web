import React from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import "./Filters.css";

const Filters = ({ onFilterChange }) => {
  const handleFilterClick = (filterType, value) => {
    onFilterChange({ [filterType]: value });
  };

  return (
    <aside>
      <h4 className="filters-title">Filters</h4>
      <section className="size-filter-section">
        <h5 className="size-filter-title">Size</h5>
        <div className="size-filter-buttons-wrapper">
          <button
            className="size-filter-button"
            onClick={() => handleFilterClick("size", "XS")}
          >
            XS
          </button>
          <button
            className="size-filter-button"
            onClick={() => handleFilterClick("size", "S")}
          >
            S
          </button>
          <button
            className="size-filter-button"
            onClick={() => handleFilterClick("size", "M")}
          >
            M
          </button>
          <button
            className="size-filter-button"
            onClick={() => handleFilterClick("size", "L")}
          >
            L
          </button>
          <button
            className="size-filter-button"
            onClick={() => handleFilterClick("size", "XL")}
          >
            XL
          </button>
          <button
            className="size-filter-button"
            onClick={() => handleFilterClick("size", "2XL")}
          >
            2XL
          </button>
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
