import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo/logo.png'
import profile from '../../assets/img/team-3.jpg'

export default function Sidebar() {
  return (
    <>
        <aside
            className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark"
            id="sidenav-main"
        >
            <div className="sidenav-header">
            <i
                className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                aria-hidden="true"
                id="iconSidenav"
            />
            <NavLink to={'/'}
                className="navbar-brand m-0"
            >
                <img
                src={logo}
                className="navbar-brand-img h-100"
                alt="main_logo"
                />
                <span className="ms-1 font-weight-bold text-white">
                77 Sports - Dashboard
                </span>
            </NavLink>
            </div>
            <hr className="horizontal light mt-0 mb-2" />
            <div
            className="collapse navbar-collapse  w-auto h-auto"
            id="sidenav-collapse-main"
            >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link text-white"
                        to={'/profile'}
                        >
                        <img src={profile} className="avatar" />
                        <span className="nav-link-text ms-2 ps-1">Brooklyn Alice</span>
                    </NavLink>
                </li>
                <hr className="horizontal light mt-0" />
                <li className="nav-item">
                <a
                    data-bs-toggle="collapse"
                    href="#dashboardsExamples"
                    className="nav-link text-white "
                    aria-controls="dashboardsExamples"
                    role="button"
                    aria-expanded="false"
                >
                    <i className="material-icons-round opacity-10">dashboard</i>
                    <span className="nav-link-text ms-2 ps-1">Dashboards</span>
                </a>
                <div className="collapse " id="dashboardsExamples">
                    <ul className="nav ">
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./dashboards/analytics.html"
                        >
                        <span className="sidenav-mini-icon"> A </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Analytics </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./dashboards/discover.html"
                        >
                        <span className="sidenav-mini-icon"> D </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Discover </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./dashboards/sales.html"
                        >
                        <span className="sidenav-mini-icon"> S </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Sales </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./dashboards/automotive.html"
                        >
                        <span className="sidenav-mini-icon"> A </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Automotive </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./dashboards/smart-home.html"
                        >
                        <span className="sidenav-mini-icon"> S </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Smart Home </span>
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="nav-item mt-3">
                <h6 className="ps-4  ms-2 text-uppercase text-xs font-weight-bolder text-white">
                    PAGES
                </h6>
                </li>
                <li className="nav-item">
                <a
                    data-bs-toggle="collapse"
                    href="#pagesExamples"
                    className="nav-link text-white "
                    aria-controls="pagesExamples"
                    role="button"
                    aria-expanded="false"
                >
                    <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                    image
                    </i>
                    <span className="nav-link-text ms-2 ps-1">Pages</span>
                </a>
                <div className="collapse " id="pagesExamples">
                    <ul className="nav ">
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#profileExample"
                        >
                        <span className="sidenav-mini-icon"> P </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Profile <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="profileExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/profile/overview.html"
                            >
                                <span className="sidenav-mini-icon"> P </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Profile Overview{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/profile/projects.html"
                            >
                                <span className="sidenav-mini-icon"> A </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                All Projects{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/profile/messages.html"
                            >
                                <span className="sidenav-mini-icon"> M </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Messages{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#usersExample"
                        >
                        <span className="sidenav-mini-icon"> U </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Users <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="usersExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/users/reports.html"
                            >
                                <span className="sidenav-mini-icon"> R </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Reports{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/users/new-user.html"
                            >
                                <span className="sidenav-mini-icon"> N </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                New User{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#accountExample"
                        >
                        <span className="sidenav-mini-icon"> A </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Account <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="accountExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/account/settings.html"
                            >
                                <span className="sidenav-mini-icon"> S </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Settings{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/account/billing.html"
                            >
                                <span className="sidenav-mini-icon"> B </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Billing{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/account/invoice.html"
                            >
                                <span className="sidenav-mini-icon"> I </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Invoice{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/account/security.html"
                            >
                                <span className="sidenav-mini-icon"> S </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Security{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#projectsExample"
                        >
                        <span className="sidenav-mini-icon"> P </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Projects <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="projectsExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/projects/general.html"
                            >
                                <span className="sidenav-mini-icon"> G </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                General{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/projects/timeline.html"
                            >
                                <span className="sidenav-mini-icon"> T </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Timeline{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/projects/new-project.html"
                            >
                                <span className="sidenav-mini-icon"> N </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                New Project{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#vrExamples"
                        >
                        <span className="sidenav-mini-icon"> V </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Virtual Reality <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="vrExamples">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/vr/vr-default.html"
                            >
                                <span className="sidenav-mini-icon"> V </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                VR Default{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./pages/vr/vr-info.html"
                            >
                                <span className="sidenav-mini-icon"> V </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                VR Info{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./pages/pricing-page.html"
                        >
                        <span className="sidenav-mini-icon"> P </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Pricing Page{" "}
                        </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-white " href="./pages/rtl-page.html">
                        <span className="sidenav-mini-icon"> R </span>
                        <span className="sidenav-normal  ms-2  ps-1"> RTL </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-white " href="./pages/widgets.html">
                        <span className="sidenav-mini-icon"> W </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Widgets </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-white " href="./pages/charts.html">
                        <span className="sidenav-mini-icon"> C </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Charts </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./pages/sweet-alerts.html"
                        >
                        <span className="sidenav-mini-icon"> S </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Sweet Alerts{" "}
                        </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./pages/notifications.html"
                        >
                        <span className="sidenav-mini-icon"> N </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Notifications{" "}
                        </span>
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="nav-item">
                <a
                    data-bs-toggle="collapse"
                    href="#applicationsExamples"
                    className="nav-link text-white "
                    aria-controls="applicationsExamples"
                    role="button"
                    aria-expanded="false"
                >
                    <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                    apps
                    </i>
                    <span className="nav-link-text ms-2 ps-1">Applications</span>
                </a>
                <div className="collapse " id="applicationsExamples">
                    <ul className="nav ">
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./applications/crm.html"
                        >
                        <span className="sidenav-mini-icon"> C </span>
                        <span className="sidenav-normal  ms-2  ps-1"> CRM </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./applications/kanban.html"
                        >
                        <span className="sidenav-mini-icon"> K </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Kanban </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./applications/wizard.html"
                        >
                        <span className="sidenav-mini-icon"> W </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Wizard </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./applications/datatables.html"
                        >
                        <span className="sidenav-mini-icon"> D </span>
                        <span className="sidenav-normal  ms-2  ps-1"> DataTables </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./applications/calendar.html"
                        >
                        <span className="sidenav-mini-icon"> C </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Calendar </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./applications/stats.html"
                        >
                        <span className="sidenav-mini-icon"> S </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Stats </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./applications/validation.html"
                        >
                        <span className="sidenav-mini-icon"> V </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Validation </span>
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="nav-item">
                <a
                    data-bs-toggle="collapse"
                    href="#ecommerceExamples"
                    className="nav-link text-white "
                    aria-controls="ecommerceExamples"
                    role="button"
                    aria-expanded="false"
                >
                    <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                    shopping_basket
                    </i>
                    <span className="nav-link-text ms-2 ps-1">Ecommerce</span>
                </a>
                <div className="collapse " id="ecommerceExamples">
                    <ul className="nav ">
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#productsExample"
                        >
                        <span className="sidenav-mini-icon"> P </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Products <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="productsExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./ecommerce/products/new-product.html"
                            >
                                <span className="sidenav-mini-icon"> N </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                New Product{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./ecommerce/products/edit-product.html"
                            >
                                <span className="sidenav-mini-icon"> E </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Edit Product{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./ecommerce/products/product-page.html"
                            >
                                <span className="sidenav-mini-icon"> P </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Product Page{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./ecommerce/products/products-list.html"
                            >
                                <span className="sidenav-mini-icon"> P </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Products List{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#ordersExample"
                        >
                        <span className="sidenav-mini-icon"> O </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Orders <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="ordersExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./ecommerce/orders/list.html"
                            >
                                <span className="sidenav-mini-icon"> O </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Order List{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./ecommerce/orders/details.html"
                            >
                                <span className="sidenav-mini-icon"> O </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Order Details{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./ecommerce/referral.html"
                        >
                        <span className="sidenav-mini-icon"> R </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Referral </span>
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="nav-item">
                <a
                    data-bs-toggle="collapse"
                    href="#authExamples"
                    className="nav-link text-white "
                    aria-controls="authExamples"
                    role="button"
                    aria-expanded="false"
                >
                    <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                    content_paste
                    </i>
                    <span className="nav-link-text ms-2 ps-1">Authentication</span>
                </a>
                <div className="collapse " id="authExamples">
                    <ul className="nav ">
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#signinExample"
                        >
                        <span className="sidenav-mini-icon"> S </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Sign In <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="signinExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/signin/basic.html"
                            >
                                <span className="sidenav-mini-icon"> B </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Basic{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/signin/cover.html"
                            >
                                <span className="sidenav-mini-icon"> C </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Cover{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/signin/illustration.html"
                            >
                                <span className="sidenav-mini-icon"> I </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Illustration{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#signupExample"
                        >
                        <span className="sidenav-mini-icon"> S </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Sign Up <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="signupExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/signup/basic.html"
                            >
                                <span className="sidenav-mini-icon"> B </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Basic{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/signup/cover.html"
                            >
                                <span className="sidenav-mini-icon"> C </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Cover{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/signup/illustration.html"
                            >
                                <span className="sidenav-mini-icon"> I </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Illustration{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#resetExample"
                        >
                        <span className="sidenav-mini-icon"> R </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Reset Password <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="resetExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/reset/basic.html"
                            >
                                <span className="sidenav-mini-icon"> B </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Basic{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/reset/cover.html"
                            >
                                <span className="sidenav-mini-icon"> C </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Cover{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/reset/illustration.html"
                            >
                                <span className="sidenav-mini-icon"> I </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Illustration{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#lockExample"
                        >
                        <span className="sidenav-mini-icon"> L </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Lock <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="lockExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/lock/basic.html"
                            >
                                <span className="sidenav-mini-icon"> B </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Basic{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/lock/cover.html"
                            >
                                <span className="sidenav-mini-icon"> C </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Cover{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/lock/illustration.html"
                            >
                                <span className="sidenav-mini-icon"> I </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Illustration{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#StepExample"
                        >
                        <span className="sidenav-mini-icon"> 2 </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            2-Step Verification <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="StepExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/verification/basic.html"
                            >
                                <span className="sidenav-mini-icon"> B </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Basic{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/verification/cover.html"
                            >
                                <span className="sidenav-mini-icon"> C </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Cover{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/verification/illustration.html"
                            >
                                <span className="sidenav-mini-icon"> I </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Illustration{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#errorExample"
                        >
                        <span className="sidenav-mini-icon"> E </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Error <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="errorExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/error/404.html"
                            >
                                <span className="sidenav-mini-icon"> E </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Error 404{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="./authentication/error/500.html"
                            >
                                <span className="sidenav-mini-icon"> E </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Error 500{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="nav-item">
                <hr className="horizontal light" />
                <h6 className="ps-4  ms-2 text-uppercase text-xs font-weight-bolder text-white">
                    DOCS
                </h6>
                </li>
                <li className="nav-item">
                <a
                    data-bs-toggle="collapse"
                    href="#basicExamples"
                    className="nav-link text-white "
                    aria-controls="basicExamples"
                    role="button"
                    aria-expanded="false"
                >
                    <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                    upcoming
                    </i>
                    <span className="nav-link-text ms-2 ps-1">Basic</span>
                </a>
                <div className="collapse " id="basicExamples">
                    <ul className="nav ">
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#gettingStartedExample"
                        >
                        <span className="sidenav-mini-icon"> G </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Getting Started <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="gettingStartedExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="https://www.creative-tim.com/learning-lab/bootstrap/quick-start/material-dashboard"
                                target="_blank"
                            >
                                <span className="sidenav-mini-icon"> Q </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Quick Start{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="https://www.creative-tim.com/learning-lab/bootstrap/license/material-dashboard"
                                target="_blank"
                            >
                                <span className="sidenav-mini-icon"> L </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                License{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard"
                                target="_blank"
                            >
                                <span className="sidenav-mini-icon"> C </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Contents{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="https://www.creative-tim.com/learning-lab/bootstrap/build-tools/material-dashboard"
                                target="_blank"
                            >
                                <span className="sidenav-mini-icon"> B </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Build Tools{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        href="#foundationExample"
                        >
                        <span className="sidenav-mini-icon"> F </span>
                        <span className="sidenav-normal  ms-2  ps-1">
                            {" "}
                            Foundation <b className="caret" />
                        </span>
                        </a>
                        <div className="collapse " id="foundationExample">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="https://www.creative-tim.com/learning-lab/bootstrap/colors/material-dashboard"
                                target="_blank"
                            >
                                <span className="sidenav-mini-icon"> C </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Colors{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="https://www.creative-tim.com/learning-lab/bootstrap/grid/material-dashboard"
                                target="_blank"
                            >
                                <span className="sidenav-mini-icon"> G </span>
                                <span className="sidenav-normal  ms-2  ps-1"> Grid </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="https://www.creative-tim.com/learning-lab/bootstrap/typography/material-dashboard"
                                target="_blank"
                            >
                                <span className="sidenav-mini-icon"> T </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Typography{" "}
                                </span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link text-white "
                                href="https://www.creative-tim.com/learning-lab/bootstrap/icons/material-dashboard"
                                target="_blank"
                            >
                                <span className="sidenav-mini-icon"> I </span>
                                <span className="sidenav-normal  ms-2  ps-1">
                                {" "}
                                Icons{" "}
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="nav-item">
                <a
                    data-bs-toggle="collapse"
                    href="#componentsExamples"
                    className="nav-link text-white "
                    aria-controls="componentsExamples"
                    role="button"
                    aria-expanded="false"
                >
                    <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                    view_in_ar
                    </i>
                    <span className="nav-link-text ms-2 ps-1">Components</span>
                </a>
                <div className="collapse " id="componentsExamples">
                    <ul className="nav ">
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/alerts/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> A </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Alerts </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/badge/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> B </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Badge </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/buttons/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> B </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Buttons </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/cards/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> C </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Card </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/carousel/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> C </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Carousel </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/collapse/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> C </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Collapse </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/dropdowns/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> D </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Dropdowns </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/forms/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> F </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Forms </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/modal/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> M </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Modal </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/navs/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> N </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Navs </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/navbar/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> N </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Navbar </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/pagination/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> P </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Pagination </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/popovers/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> P </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Popovers </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/progress/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> P </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Progress </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/spinners/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> S </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Spinners </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/tables/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> T </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Tables </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/tooltips/material-dashboard"
                        target="_blank"
                        >
                        <span className="sidenav-mini-icon"> T </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Tooltips </span>
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="nav-item">
                <a
                    className="nav-link"
                    href="https://github.com/creativetimofficial/ct-material-dashboard-pro/blob/master/CHANGELOG.md"
                    target="_blank"
                >
                    <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                    receipt_long
                    </i>
                    <span className="nav-link-text ms-2 ps-1">Changelog</span>
                </a>
                </li>
            </ul>
            </div>
        </aside>
    </>
  )
}
