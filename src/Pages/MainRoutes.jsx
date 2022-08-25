import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

import LendPage from "./LendPage";

import Donate from "./Donate";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/fund" element={<LendPage />} />

      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
};

export default MainRoutes;
