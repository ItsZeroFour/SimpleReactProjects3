import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Drawer from "./Drawer";
import { cartList } from "../data";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);

  // Удаление пустыъ значений в массиве
  const filtered = cartList.filter((el) => {
    return el !== null;
  });

  return (
    <div className="navbar">
      <div className="wrapper">
        <a href="#" className="logo">
          <h1>
            Steps<span>.</span>
          </h1>
        </a>

        <div className="cart-icon">
          <FontAwesomeIcon
            icon={faShoppingCart}
            onClick={() => setOpenCart(!openCart)}
          />

          <span className="cart-counter">{filtered.length}</span>
        </div>
      </div>

      {openCart && (
        <div className="cart">
          <Drawer />
        </div>
      )}
    </div>
  );
};

export default Navbar;
