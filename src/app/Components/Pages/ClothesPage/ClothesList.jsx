"use client";
import React, { useState } from "react";
import ClothesCard from "../../GlobalComponents/ClothesCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./ClothesList.css";

const ClothesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);
  const totalItems = ClothesInfo.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  // Page change button function

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // pagination numbers and dots render function

  const renderPageNumbers = () => {
    const items = [];
    const visiblePages = 3;

    let startPage, endPage;

    if (totalPages <= visiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= Math.ceil(visiblePages / 2)) {
        startPage = 1;
        endPage = visiblePages;
      } else if (currentPage + Math.floor(visiblePages / 2) >= totalPages) {
        startPage = totalPages - visiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(visiblePages / 2);
        endPage = currentPage + Math.floor(visiblePages / 2);
      }
    }

    if (startPage > 1) {
      items.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="pagination-number"
        >
          1
        </button>,
        <span key="ellipsis1">...</span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className="pagination-number"
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      items.push(
        <span key="ellipsis2">...</span>,
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="pagination-number"
        >
          {totalPages}
        </button>
      );
    }

    return items;
  };

  const cardsData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return ClothesInfo.slice(startIndex, endIndex);
  };

  const width = "224px";
  const height = "366px";

  const imageWidth = "224px";
  const imageHeight = "315px";

  return (
    <div>
      <section className="clothes-list">
        {cardsData().map((item, index) => (
          <ClothesCard
            key={index}
            item={item}
            width={width}
            height={height}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
          />
        ))}
      </section>

      <section className="clothes-pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="prev-button"
        >
          <ArrowBackIosNewIcon />
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="next-button"
        >
          <ArrowForwardIosIcon />
        </button>
      </section>
    </div>
  );
};

const ClothesInfo = [
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
  {
    brand: "Cotton T Shirt",
    model: "Full Sleeve Zipper",
    price: 199,
    currency: "$",
    size: ["S", "M", "L", "XL"],
  },
];

export default ClothesList;
