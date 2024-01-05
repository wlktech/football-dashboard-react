import React from "react";
import "./UserLayout.css";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navbar">
      <div class="row">
        <div
          class="col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-12 py-3 nav-border-purple"
          id="top-nav"
        >
          <div class="d-flex justify-content-between px-3">
            <Link to={'/'} class="text-decoration-none">
              <h5 class="text-white mt-2">Delight 2D | 3D</h5>
            </Link>
            <div>
              <i class="fas text-white fa-bell me-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
