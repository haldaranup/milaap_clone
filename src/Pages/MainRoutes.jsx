import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import LendPage from "./LendPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/fund" element={<LendPage />} />
    </Routes>
  );
};

export default MainRoutes;
