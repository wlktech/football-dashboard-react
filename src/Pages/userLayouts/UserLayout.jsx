import React from "react";
import Navbar from "./Navbar";
import "./UserLayout.css";
import Home from "../User/Home";
import { Outlet, useLocation } from "react-router-dom";
const UserLayout = () => {
  const location = useLocation();
  return (
    <div className="container-fluid" id="allBgColor">
      <div className="row">
        {location.pathname != "/" ? <Navbar /> : ""}
        <div
          className="col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-12"
          id="main"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
