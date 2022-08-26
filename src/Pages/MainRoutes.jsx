import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

import LendPage from "./LendPage";

import Donate from "./Donate";
import SingleDonate from "../Donate/SingleDonate";
import { SignUP } from "./SignUp";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/donate" element={<Donate />} />
      <Route path="/donate/:id" element={<SingleDonate />} />
      <Route path="/fund" element={<LendPage />} />
      <Route path="/users/sign-up" element={<SignUP />} />
    </Routes>
  );
};

export default MainRoutes;
