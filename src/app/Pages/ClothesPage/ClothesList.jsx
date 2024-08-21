"use client";
import React, { useState, useMemo, useCallback } from "react";
import ClothesCard from "../../Components/GlobalComponents/ClothesCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./ClothesList.css";

const ClothesList = React.memo(({ clothesData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const totalItems = clothesData.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = useCallback(
    (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

  const renderPageNumbers = useMemo(() => {
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
          className={`pagination-number ${i === currentPage ? "active" : ""}`}
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
  }, [currentPage, totalPages, handlePageChange]);

  const cardsData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return clothesData.slice(startIndex, endIndex);
  }, [currentPage, pageSize, clothesData]);

  return (
    <div>
      <section className="clothes-list">
        {clothesData.length > 0 ? (
          cardsData.map((item, index) => (
            <ClothesCard key={index} item={item} className="clothes-card" />
          ))
        ) : (
          <span className="clothes-list-not-found">
            ასეთი პროდუქტი ვერ მოიძებნა!
          </span>
        )}
      </section>
      <section className="clothes-pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="prev-button"
        >
          <ArrowBackIosNewIcon />
        </button>
        {renderPageNumbers}
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
});

export default ClothesList;
