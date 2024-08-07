import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CartMenuCard from "@/app/Components/GlobalComponents/CartMenuCard";
import { useSelector } from "react-redux";

import "./CartMenu.css";

const CartMenu = ({ isCartOpen, setIsCartOpen }) => {
  const product = useSelector((state) => state.cart.items);
  const priceSum = useSelector((state) =>
    state.cart.items.reduce((total, curlVal) => {
      return total + curlVal.price;
    }, 0)
  );

  return (
    <aside
      className={`cart-menu-wrapper ${
        isCartOpen ? "cart-menu-wrapper-open" : ""
      }`}
    >
      <div className="cart-menu-title-wrapper">
        <h2>თქვენი კალათა</h2>
        <button onClick={() => setIsCartOpen(false)}>
          <CloseRoundedIcon />
        </button>
      </div>

      <div className="cart-menu-main-line"></div>
      {product.map((item, index) => (
        <CartMenuCard key={index} item={item} index={index} />
      ))}
      <div className="cart-menu-line"></div>
    </aside>
  );
};

export default CartMenu;
