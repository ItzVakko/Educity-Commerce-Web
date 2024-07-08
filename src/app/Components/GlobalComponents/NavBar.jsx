"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Logo from "../../Assets/Images/NavBar/Logo.png";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import "./NavBar.css";

export default function Header() {
  const [hidden, setHidden] = useState(true);
  const [searchTransition, setSearchTransition] = useState("translateX(-100%)");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="whole-navbar">
      <div className="navbar-wrapper">
        <div
          className="responsive-icons-wrapper"
          style={{ display: hidden ? "none" : "flex" }}
        >
          <button>
            <MenuRoundedIcon className="responsive-burger-icon" />
          </button>
          <button onClick={() => setSearchTransition("translateX(0)")}>
            <SearchIcon className="responsive-search-icon" />
          </button>
        </div>
        <div className="HeaderLogoContainer">
          <Image src={Logo} alt="Logo" />
        </div>
        <div
          className="HeaderMiddleContainer"
          style={{ display: hidden ? "flex" : "none" }}
        >
          <nav className="navbar">
            <ul className="navbar-buttons-wrapper">
              <li>Men</li>
              <li>Women</li>
              <li>Sale</li>
              <li>New</li>
            </ul>
          </nav>
          <div className="HeaderMiddleContainerInput">
            <SearchIcon />
            <input
              placeholder="Enter Keywords..."
              type="text"
              name="clothes-search"
            />
          </div>
        </div>
        <div className="HeaderLeftContainer">
          <div>
            <PersonOutlineRoundedIcon />
            <h4 style={{ display: hidden ? "block" : "none" }}>Sign in</h4>
          </div>
          <div>
            <ShoppingCartOutlinedIcon />
            <h4 style={{ display: hidden ? "block" : "none" }}>Cart</h4>
          </div>
        </div>
      </div>

      {/* responsive search and burgermenu parts. on desktop its hidden! */}
      <div
        className="responsive-search-bar"
        style={{
          display: hidden ? "none" : "flex",
          transform: searchTransition,
        }}
      >
        <button>
          <SearchIcon />
        </button>
        <input
          type="text"
          name="clothes-search-responsive"
          placeholder="Enter Keywords..."
        />
        <button onClick={() => setSearchTransition("translateX(-100%)")}>
          <CloseRoundedIcon />
        </button>
      </div>
    </div>
  );
}
