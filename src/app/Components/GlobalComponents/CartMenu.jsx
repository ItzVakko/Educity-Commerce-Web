import React, { useEffect, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CartMenuCard from "@/app/Components/GlobalComponents/CartMenuCard";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";

import "./CartMenu.css";
import Link from "next/link";

const CartMenu = ({ isCartOpen, setIsCartOpen }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const product = useSelector((state) => state.cart.items);

  const totalPrice = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.qty * item.price, 0)
  );

  const formattedTotalPrice = totalPrice.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.qty, 0)
  );

  useEffect(() => {
    if (product.length == 0) {
      setIsEmpty(true);
    } else if (product.length > 0) {
      setIsEmpty(false);
    }
  }, [product]);

  return (
    <aside
      className={`cart-menu-wrapper ${
        isCartOpen ? "cart-menu-wrapper-open" : ""
      }`}
    >
      <div className="cart-menu-head-wrapper">
        <div className="cart-menu-title-wrapper">
          <h2 className="cart-menu-h2">
            <ShoppingCartOutlinedIcon />
            თქვენი კალათა
          </h2>
          <button onClick={() => setIsCartOpen(false)}>
            <CloseRoundedIcon />
          </button>
        </div>

        <div className="cart-menu-main-line"></div>
        <div className="cart-menu-cards-wrapper">
          {isEmpty ? (
            <p className="empty-basket">კალათა ცარიელია!</p>
          ) : (
            product.map((item, index) => (
              <CartMenuCard key={index} item={item} index={index} />
            ))
          )}
        </div>
      </div>

      <div className="cart-menu-details-wrapper">
        <div className="cart-menu-line"></div>

        <p className="cart-menu-cards-amount">
          არჩეული პროდუქტებია: <span>{totalItems}</span>
        </p>
        <div className="cart-menu-main-line"></div>

        <h2 className="cart-menu-cards-priceSum cart-menu-h2">
          გადასახადი:
          <div>
            <s>100</s> <span>{formattedTotalPrice} ₾</span>
          </div>
        </h2>
        <Link href="/checkout">
          <button className="cart-menu-order-button">
            შეკვეთის გაგრძელება
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CartMenu;
