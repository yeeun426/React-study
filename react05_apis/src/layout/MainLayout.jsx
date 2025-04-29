import React from "react";
import MenuList from "./MainList";
import { Outlet } from "react-router-dom";
// import css from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <>
      <MenuList />
      <Outlet />
    </>
  );
};

export default MainLayout;
