import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../router/Home.js";
import Detail from "../router/Detail.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
