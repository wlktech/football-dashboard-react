import React from "react";
import "./UserLayout.css";
import Footer from "../layouts/Footer";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo/logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div id="navbar">
      <div class="row">
        <div
          class="col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-12 py-3 nav-border-purple fixed-top"
          id="top-nav"
        >
          <div class="d-flex justify-content-between px-3">
            <button onClick={() => navigate(-1)} className="btn">
              <i
                class="fa-solid fa-arrow-left"
                style={{ fontSize: "25px" }}
              ></i>
            </button>
            <Link to={"/"} class="text-decoration-none">
              <img
                src={logo}
                alt="logo"
                style={{ width: "50px", height: "50px" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
