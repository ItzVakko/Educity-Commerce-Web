import React from "react";
import Logo from "../../Assets/Images/NavBar/Logo.png";
import Image from "next/image";
import Link from "next/link";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import DiscountIcon from "@mui/icons-material/Discount";
import FeedIcon from "@mui/icons-material/Feed";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import "./BurgerMenuResponsive.css";

const BurgerMenuResponsive = ({ isBurgerMenuOpen, setIsBurgerMenuOpen }) => {
  const isActive = (queryKey, queryValue) => {
    const currentQuery = new URLSearchParams(window.location.search);
    return currentQuery.get(queryKey) === queryValue;
  };
  return (
    <div
      className="burger-menu-wrapper"
      style={{
        transform: isBurgerMenuOpen ? "translateX(0)" : "translateX(-320px)",
      }}
    >
      <div className="burger-menu-img-wrapper">
        <Image src={Logo} alt="company-logo" priority />
        <div onClick={() => setIsBurgerMenuOpen(false)}>
          <CloseRoundedIcon />
        </div>
      </div>
      <div className="burger-menu-line"></div>

      <ul className="burger-menu-buttons-wrapper">
        <Link
          href={{ pathname: "/clothes", query: { category: "men" } }}
          passHref
          className={isActive("category", "men") ? "active" : ""}
        >
          <li>
            <MaleIcon />
            კაცი
          </li>
        </Link>
        <Link
          href={{
            pathname: "/clothes",
            query: { category: "women" },
          }}
          passHref
          className={isActive("category", "women") ? "active" : ""}
        >
          <li>
            <FemaleIcon />
            ქალი
          </li>
        </Link>
        <Link
          href={{ pathname: "/clothes", query: { sale: "true" } }}
          passHref
          className={isActive("sale", "true") ? "active" : ""}
        >
          <li>
            <DiscountIcon />
            ფასდაკლება
          </li>
        </Link>
        <Link
          href={{ pathname: "/clothes", query: { new: "true" } }}
          passHref
          className={isActive("new", "true") ? "active" : ""}
        >
          <li>
            <FeedIcon />
            ახალი
          </li>
        </Link>
      </ul>

      <div className="burger-menu-line"></div>
    </div>
  );
};

export default BurgerMenuResponsive;
