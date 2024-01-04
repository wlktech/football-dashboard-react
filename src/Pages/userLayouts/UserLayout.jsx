import React from "react";
import Navbar from "./Navbar";
import "./UserLayout.css";
import Home from "../User/Home";
import { Outlet } from "react-router-dom";
const UserLayout = () => {
  return (
    <div className="container-fluid" id="allBgColor">
      <Navbar />
      <div class="row">
        <div class="col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-12" id="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
