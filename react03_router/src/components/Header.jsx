import React from "react";
import { Link, NavLink } from "react-router-dom";
import Shelly from "../assets/Shelly.svg";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.hd}>
      <h1>
        <NavLink to={"/"}>
          <img src={Shelly} alt="로고" />
        </NavLink>
      </h1>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : "")}
          to={"/about"}
        >
          회사소개
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : "")}
          to={"/shop"}
        >
          쇼핑
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : "")}
          to={"/"}
        >
          링크
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
