import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

import LendPage from "./LendPage";

import Donate from "./Donate";
import SingleDonate from "../Donate/SingleDonate";
import ContactUs from "./ContactUs";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/donate" element={<Donate/>} />
      <Route path="/donate/:id" element={<SingleDonate/>} />
      <Route path="/fund" element={<LendPage />} />
      <Route path="/contactUs" element={<ContactUs/>}/>

    </Routes>
  );
};

export default MainRoutes;
