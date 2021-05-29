import React, { Component, useState, useContext } from "react";

import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home.js";
import NotFound from "../Pages/NotFound.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Contact from "../Pages/Contact.js";
import { AuthContext } from "../store/AuthContext.js";
import Extract from "../Pages/Extract.js";
import Footer from "./Footer.js";
import Login from "../Pages/Login.js";
import Show from "../Pages/Show.js";
import SignUp from "../Pages/SignUp.js";

export default function NavLog() {
  let c = "tm-bg-black-transparent tm-sidebar ";
  let cc = "tm-bg-black-transparent tm-sidebar show";
  let showIcon = "showIcon styleIcon ";
  let hideIcon = "hideIcon styleIcon";
  const [open, setopen] = useState(true); // for responsive navbar
  const authContext = useContext(AuthContext);
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    authContext.setAuth({});
  }

  return (
    <BrowserRouter>
      <div className="row">
        <nav id="tmSidebar" className={open ? c : cc}>
          <button
            className="navbar-toggler"
            type="button"
            style={{ background: "rgba(255, 255, 255, 0.3)" }}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={faBars}
              className={open ? showIcon : hideIcon}
              onClick={() => setopen(!open)}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={open ? hideIcon : showIcon}
              onClick={() => setopen(!open)}
            />
          </button>
          <div className="tm-sidebar-sticky" onClick={() => setopen(!open)}>
            <div className="tm-brand-box">
              <div className="tm-double-border-1">
                <div className="tm-double-border-2">
                  <h1 className="tm-brand text-uppercase">Extract Data</h1>
                </div>
              </div>
            </div>
          </div>
          <ul
            id="tmMainNav"
            className="nav flex-column text-uppercase text-right tm-main-nav"
            onClick={() => setopen(!open)}
          >
            <li className="nav-item">
              <Link to="/extractData" className="nav-link active" href="#intro">
                <span className="d-inline-block mr-3">Home</span>
                <span className="d-inline-block tm-white-rect"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/extract" className="nav-link active" href="#intro">
                <span className="d-inline-block mr-3">Extract Data </span>
                <span className="d-inline-block tm-white-rect"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link active" href="#intro">
                <span className="d-inline-block mr-3" onClick={logout}>
                  LogOut{" "}
                </span>
                <span className="d-inline-block tm-white-rect"></span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/login" className="nav-link active">
                <span className="d-inline-block mr-3"> Your Profile</span>
                <span className="d-inline-block tm-white-rect"></span>
              </Link>
            </li>
          </ul>

          <Footer />
        </nav>
      </div>
      <Switch>
        <Route path="/extractData" exact component={Home}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/extract" exact component={Extract}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/show" exact component={Show}></Route>
        <Route path="/SignUp" exact component={SignUp}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}
