import React from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import "./Filters.css";

const Filters = () => {
  return (
    <aside>
      <h4 className="filters-title">Filters</h4>

      <section className="size-filter-section">
        <h5 className="size-filter-title">Size</h5>

        <div className="size-filter-buttons-wrapper">
          <button className="size-filter-button">XS</button>
          <button className="size-filter-button">S</button>
          <button className="size-filter-button">M</button>
          <button className="size-filter-button">L</button>
          <button className="size-filter-button">XL</button>
          <button className="size-filter-button">2XL</button>
        </div>
      </section>

      <section className="category-filter-section">
        <div className="category-filter-button">
          ბრენდები
          <button>
            <KeyboardArrowRightRoundedIcon />
          </button>
        </div>
        <div className="category-filter-button">
          ფერი
          <button>
            <KeyboardArrowRightRoundedIcon />
          </button>
        </div>
        <div className="category-filter-button">
          ფასი
          <button>
            <KeyboardArrowRightRoundedIcon />
          </button>
        </div>
        <div className="category-filter-button">
          ფასდაკლება
          <button>
            <KeyboardArrowRightRoundedIcon />
          </button>
        </div>
        <div className="category-filter-button">
          სტილი
          <button>
            <KeyboardArrowRightRoundedIcon />
          </button>
        </div>
        <div className="category-filter-button">
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
