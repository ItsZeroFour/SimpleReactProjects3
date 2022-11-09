import React, { useState } from "react";
import { cartList } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Drawer = () => {
  let allPrices = [0];

  // Добавление в массив цены товара, который мы положили в корзину
  cartList.map(({ price }) => {
    allPrices.push(price);

    return price;
  });

  console.log(allPrices);

  // Складывание всех чисел в массиве
  const result = allPrices.reduce(function (sum, item) {
    return (sum += item);
  });

  return (
    <div>
      <div className="cart-wrapper">
        {cartList.map((data) => (
          <div className="cart-item" key={data.img}>
            <img src={data.img} alt={data.name} />
            <h1>{data.name}</h1>
            <div className="cart-item-bottom">
              <p>
                <span>PRICE:</span> {data.price} $
              </p>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        ))}
      </div>

      <div className="total-price">
        <button
          onMouseOver={(event) => (event.target.innerHTML = "Buy Now!")}
          onMouseLeave={(event) =>
            (event.target.innerHTML = `Total: <span>${result} $</span>`)
          }
        >
          Total: <span>{result} $</span>
        </button>
      </div>
    </div>
  );
};

export default Drawer;
