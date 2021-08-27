import React, { Component, useState, useContext, useEffect } from "react";

import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home.js";
import NotFound from "../Pages/NotFound.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Contact from "../Pages/Contact.js";
import Footer from "./Footer.js";
import Login from "../Pages/Login.js";
import Show from "../Pages/Show.js";
import Extract from "../Pages/Extract.js";

import SignUp from "../Pages/SignUp.js";
import logo from "../img/logo/logo.png";
import Profile from "./Profile.js";
export default function NaV() {
  let c = "tm-bg-black-transparent tm-sidebar ";
  let cc = "tm-bg-black-transparent tm-sidebar show";
  let showIcon = "showIcon styleIcon ";
  let hideIcon = "hideIcon styleIcon";
  const userid=localStorage.getItem('userid');
  const url=`/user/${userid}/`;
  const [open, setopen] = useState(true); // for responsive navbar

 
  function logout() {
localStorage.removeItem('userid');
localStorage.setItem('logeed','false');

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
            <img src={logo} className="logo" />
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
                { localStorage.getItem('logeed')=='true' ? (
                  <span className="d-inline-block mr-3" onClick={logout}>
                    LogOut{" "}
                  </span>
                ) : (
                  <span className="d-inline-block mr-3">Log In </span>
                )}
                <span className="d-inline-block tm-white-rect"></span>
              </Link>
            </li>

            <li className="nav-item"> {localStorage.getItem('logeed')=='true' ?
            <Link to={url} className="nav-link active">
            <span className="d-inline-block mr-3"> Your Profile</span>
            <span className="d-inline-block tm-white-rect"></span>
          </Link>:
              <Link to="/contact" className="nav-link active">
                <span className="d-inline-block mr-3">LET'S TALK</span>
                <span className="d-inline-block tm-white-rect"></span>
              </Link>}
            </li>
          </ul>

          <Footer />
        </nav>
      </div>
      <Switch>
        <Route path="/extractData" exact component={Home}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        { localStorage.getItem('logeed')=='true' ? (
          <Route path="/extract" exact component={Extract}></Route>
        ) : (
          <Route path="/extract" exact component={Login}></Route>
        )}
        <Route path="/login" exact component={Login}></Route>
        <Route path="/show" exact component={Show}></Route>
        <Route path="/SignUp" exact component={SignUp}></Route>
<Route path='/user/:id' exact component={Profile} ></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}
