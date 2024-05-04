import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Places from "../pages/Places";
import Home from "../pages/Home";
import AddCityForm from "../pages/AddCityForm";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}/>
          
          
      
      </Routes>
    </div>
  );
};

export default MainRoutes;
