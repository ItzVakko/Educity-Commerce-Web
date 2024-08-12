"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Logo from "../../Assets/Images/NavBar/Logo.png";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useSelector } from "react-redux";
import Link from "next/link";
import CartMenu from "./CartMenu";
import { useRouter } from "next/navigation";

import "./NavBar.css";

export default function NavBar() {
  const [keyword, setKeyword] = useState("");
  const [hidden, setHidden] = useState(true);
  const [searchTransition, setSearchTransition] = useState("translateX(-100%)");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const itemNumber = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.qty, 0)
  );

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

  const handleSearch = (event) => {
    event.preventDefault();
    if (keyword.trim()) {
      router.push(`/clothes?search=${encodeURIComponent(keyword)}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <>
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
                <li>
                  <Link
                    href={{ pathname: "/clothes", query: { category: "men" } }}
                    passHref
                  >
                    კაცი
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/clothes",
                      query: { category: "women" },
                    }}
                    passHref
                  >
                    ქალი
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: "/clothes", query: { sale: "true" } }}
                    passHref
                  >
                    ფასდაკლება
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: "/clothes", query: { new: "true" } }}
                    passHref
                  >
                    ახალი
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="HeaderMiddleContainerInput">
              <form onSubmit={handleSearch}>
                <button type="submit">
                  <SearchIcon />
                </button>
                <input
                  placeholder="Search..."
                  type="text"
                  name="clothes-search"
                  onChange={(e) => setKeyword(e.target.value)}
                  value={keyword}
                  onKeyDown={handleKeyDown}
                />
              </form>
            </div>
          </div>
          <div className="HeaderLeftContainer">
            <Link href="/login">
              <PersonOutlineRoundedIcon />
              <h4 style={{ display: hidden ? "block" : "none" }}>
                ავტორიზაცია
              </h4>
            </Link>
            <div onClick={() => setIsCartOpen(true)}>
              {itemNumber > 0 ? (
                <span className="cart-items-number">{itemNumber}</span>
              ) : (
                <></>
              )}
              <ShoppingCartOutlinedIcon />
              <h4 style={{ display: hidden ? "block" : "none" }}>კალათა</h4>
            </div>
          </div>
        </div>

        {/* responsive search and burgermenu parts. on desktop its hidden! */}
        <form
          onSubmit={handleSearch}
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
            placeholder="Search..."
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            onKeyDown={handleKeyDown}
          />
          <button onClick={() => setSearchTransition("translateX(-100%)")}>
            <CloseRoundedIcon />
          </button>
        </form>
      </div>

      {/* Cart menu slide default hidden! */}
      <CartMenu isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
}
