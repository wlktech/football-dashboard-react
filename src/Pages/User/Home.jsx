import React from "react";
import "../userLayouts/UserLayout.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="container-fluid py-4">
      <h5 className="text-center text-white mt-4">
        နည်းနည်းလောင်း များများနိုင်
      </h5>
      <marquee behavior="" className="mt-3 text-white" direction="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        numquam.
      </marquee>
      <div className="card px-3 pb-3 fs-5 fw-bold ">
        Balance
        <h5 className="mt-1  fw-bold">246.76 Ks</h5>
      </div>
      <div className="d-flex justify-content-around mt-2 align-items-center text-center">
        <NavLink to={'/maung'} className="card w-100 text-decoration-none me-1">
          <img
            src="img/football/pitch.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">မောင်း</p>
        </NavLink>
        <a href="body-goal.html" className="card w-100 text-decoration-none">
          <img
            src="img/football/football.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">ဘော်ဒီ/ဂိုးပေါင်း</p>
        </a>
      </div>
      <div className="d-flex justify-content-around mt-2 align-items-center text-center">
        <a href="#" className="card w-100 text-decoration-none me-1">
          <img
            src="img/football/history.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">လောင်းထားသောပွဲစဉ်</p>
        </a>
        <a href="/match" className="card w-100 text-decoration-none">
          <img
            src="img/football/schedule.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">ပွဲစဉ်ဟောင်းများ</p>
        </a>
      </div>
      <div className="d-flex justify-content-around mt-2 align-items-center text-center">
        <a href="#" className="card w-100 text-decoration-none me-1">
          <img
            src="img/football/coins.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">ငွေစာရင်း</p>
        </a>
        <a
          href="./goal-result.html"
          className="card w-100 text-decoration-none"
        >
          <img
            src="img/football/medical-result.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">ပွဲပြီးရလဒ်များ</p>
        </a>
      </div>
      <div className="d-flex justify-content-around mt-2 align-items-center text-center">
        <a href="#" className="card w-100 text-decoration-none me-1">
          <img
            src="img/football/pitch.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">3D/4D</p>
        </a>
        <a
          href="./money-change.html"
          className="card w-100 text-decoration-none"
        >
          <img
            src="img/football/cash-flow.png"
            className="mx-auto mt-2"
            width="40px"
            height="40px"
            alt=""
          />
          <p className="text-dark">ငွေ/အကြောင်းကြား</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
