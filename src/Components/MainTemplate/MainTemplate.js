import React from "react";
import Navbar from "../../Pages/NavBar/Navbar";
import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return (
    <>
      <div className=" templateDiv">
        <Navbar />
      </div>

      <Outlet />
    </>
  );
};

export default MainTemplate;
