import React from "react";
import { Routes, Route } from "react-router-dom";
import Intersection from "./pages/Intersection/Intersection";
import Llink from "./pages/llink/page";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/*" element={<Intersection />} />
        <Route path="/llink" element={<Llink />} />
      </Routes>
    </div>
  );
}

export default App;
