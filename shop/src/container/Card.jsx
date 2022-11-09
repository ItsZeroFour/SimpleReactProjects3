import React, { useEffect, useState } from "react";
import { cartList } from "../data";

const Card = (props) => {
  const [addItem, setAddItem] = useState({});
  const [clicked, setClicked] = useState(false);

  const CardOnClick = () => {
    setAddItem(props);
    setClicked(true);
  };

  useEffect(() => {
    // Добавление в массив новых элементов
    cartList.push(addItem);

    // Удаление пустых объектов из массива
    function removeEmpty(obj) {
      Object.keys(obj).forEach((k) => {
        if (
          obj[k] &&
          typeof obj[k] === "object" &&
          removeEmpty(obj[k]) === null
        ) {
          delete obj[k];
        }
      });

      if (!Object.keys(obj).length) {
        return null;
      }
    }

    removeEmpty(cartList);
  }, [addItem]);

  return (
    <div className="sneakers-item">
      <img src={props.img} alt={`${props.name} img`} />
      <h2>{props.name}</h2>
      <div className="sneakers-size">
        <span>SIZE:</span>

        <div className="sneakers-size-item">
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>
      </div>
      <p>
        <span>PRICE:</span> {props.price} $
      </p>

      <button
        className={clicked ? "sneakers-btn clicked" : "sneakers-btn"}
        onClick={CardOnClick}
      >
        {clicked ? <span className="in-cart">In cart</span> : "Add to Cart"}
      </button>
    </div>
  );
};

export default Card;
