"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Logo from "../../Assets/Images/NavBar/Logo.png";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import CartMenu from "./CartMenu";
import { useRouter, useSearchParams } from "next/navigation";
import BurgerMenuResponsive from "./BurgerMenuResponsive";
import { logout } from "@/app/Store/Reducers/authReducer";

import "./NavBar.css";

const NavBar = () => {
  const [keyword, setKeyword] = useState("");
  const [hidden, setHidden] = useState(true);
  const [searchTransition, setSearchTransition] = useState("translateX(-100%)");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const { username, isAuthenticated } = useSelector((state) => state.auth);
  const itemNumber = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.qty, 0)
  );

  useEffect(() => {
    const handleResize = () => {
      setHidden(window.innerWidth > 1000);

      if (window.innerWidth > 1000) {
        setIsBurgerMenuOpen(false);
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

  const handleLogoClick = () => {
    router.push("/");
  };

  const getActiveClass = (key, value) => {
    return searchParams.get(key) === value ? "active" : "";
  };

  return (
    <>
      <div className="whole-navbar">
        <div className="navbar-wrapper">
          <div
            className="responsive-icons-wrapper"
            style={{ display: hidden ? "none" : "flex" }}
          >
            <button onClick={() => setIsBurgerMenuOpen(true)}>
              <MenuRoundedIcon className="responsive-burger-icon" />
            </button>
            <button onClick={() => setSearchTransition("translateX(0)")}>
              <SearchIcon className="responsive-search-icon" />
            </button>
          </div>
          <div className="HeaderLogoContainer" onClick={handleLogoClick}>
            <Image src={Logo} alt="Logo" priority />
          </div>
          <div
            className="HeaderMiddleContainer"
            style={{ display: hidden ? "flex" : "none" }}
          >
            <nav className="navbar">
              <ul className="navbar-buttons-wrapper">
                <li className={getActiveClass("category", "men")}>
                  <Link
                    href={{ pathname: "/clothes", query: { category: "men" } }}
                    passHref
                  >
                    კაცი
                  </Link>
                </li>
                <li className={getActiveClass("category", "women")}>
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
                <li className={getActiveClass("sale", "true")}>
                  <Link
                    href={{ pathname: "/clothes", query: { sale: "true" } }}
                    passHref
                  >
                    ფასდაკლება
                  </Link>
                </li>
                <li className={getActiveClass("new", "true")}>
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
                  placeholder="სიტყვებით ძიება..."
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
            {isAuthenticated ? (
              <div
                onClick={() => {
                  dispatch(logout());
                  router.push("/login");
                }}
              >
                <LogoutIcon />
                <h4 style={{ display: hidden ? "block" : "none" }}>
                  {username}
                </h4>
              </div>
            ) : (
              <Link href="/login">
                <PersonOutlineRoundedIcon />
                <h4 style={{ display: hidden ? "block" : "none" }}>
                  ავტორიზაცია
                </h4>
              </Link>
            )}
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
            placeholder="სიტყვებით ძიება..."
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
      {/* Burger menu slide default hidden! */}
      <BurgerMenuResponsive
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
      />
    </>
  );
};

export default NavBar;
