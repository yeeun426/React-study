import React from "react";
import button from "../css/Buton.module.css";

const Button = ({ onClick, choice, result }) => {
  return (
    <div className={button.button}>
      {choice.map((item) => (
        <button
          key={item.value}
          className={item.value}
          onClick={() => onClick(item.name)}
        >
          <img
            src={new URL(`../assets/${item.value}.png`, import.meta.url).href}
            alt={item.name}
          />
          <p>{item.name}</p>
        </button>
      ))}
      <div>{result}</div>
    </div>
  );
};

export default Button;
