import React from "react";
import { NavLink } from "react-router-dom";
import css from "./MenuList.module.css";

const MainList = () => {
  return (
    <ul>
      <li>
        <NavLink
          to={"/weather"}
          className={(isActive) => (isActive ? `${css.active}` : "")}
        >
          날씨API 활용
        </NavLink>
      </li>
    </ul>
  );
};

export default MainList;
