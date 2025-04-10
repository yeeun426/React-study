import React from "react";
import card from "../css/Card.module.css";

const Card = ({ userTitle, choice, result, type }) => {
  console.log(result);
  console.log(choice);
  console.log(type);

  return (
    <div className={card.card}>
      <h1>{userTitle}</h1>
      {/* <img
        src={new URL(`../assets/${item.value}.png`, import.meta.url).href}
        alt={type}
      /> */}
      <p>{type}</p>
      <p>선택하세요.</p>
    </div>
  );
};

export default Card;
