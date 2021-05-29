import React, { Component, useContext } from 'react';
import { Link, Route } from "react-router-dom";

import { AuthContext } from "../store/AuthContext.js";
export default function ProfileMode() {
  const authContext = useContext(AuthContext);

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    authContext.setAuth({});
  }
  // to access to the email    {authContext.auth.email }


  return (
    <main role="main" className="ml-sm-auto col-12">
      <div className="tm-section-wrap bg-white">
        <section id="talk" className="row tm-section">
          <div class="col">
            <div class="row">
              <div class="col mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="e-profile">
                      <div class="row">
                        <div class="col-12 col-sm-auto mb-3">
                          <div className="mx-auto" style={{ width: "140px" }}>
                            <div className="d-flex justify-content-center align-items-center rounded"
                              style={{ height: "140px", backgroundColor: "rgb(233, 236, 239)" }}>
                              <span style={{ color: "rgb(166, 168, 170)", font: "bold 8pt Arial" }}>
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                  style={{ height: "139px" }} alt="Maxwell Admin" /></span>
                            </div></div></div>

                        <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div class="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                            <p class="mb-0"> {authContext.auth.email}</p>

                            <div class="mt-2">
                              <button class="btn btn-block btn d-block ml-auto tm-btn-primary"
                                style={{ color: '#fff', backgroundColor: "rgba(0, 0, 0, 0.815)" }} type="button">
                                <i class="fa fa-fw fa-camera"></i>
                                <span>Change Photo</span>
                              </button>
                            </div>

                          </div>
                          <div class="text-center text-sm-right">

                            <div class="text-muted"><small>You logged in: {authContext.auth.date2}</small></div>
                            <div class="text-muted"><small>at : {authContext.auth.date1}</small></div>

                          </div>
                        </div>
                      </div>

                      <ul class="nav nav-tabs">
                        <li class="nav-item"><a href="#setting" class="active nav-link">Settings</a></li>
                        <li class="nav-item"><a href="" class=" nav-link">Your Files</a></li>
                      </ul>

                      <div class="tab-content pt-3" id='setting'>
                        <div class="tab-pane active">
                          <form class="form">

                            <div class="row"> <div class="col">
                              <div class="mb-2"><b>Profile Settings</b></div>
                              <div class="row">

                              

                              </div>
                              <div class="row">

                                <div class="col form-group" style={{ textAlign: "center" }}>
                                  <label>Username:</label>
                                </div>
                                <div class="col">
                                  <input class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                    type="text" placeholder={authContext.auth.name} />
                                </div>
                              </div>
                              <div class="row">

                                <div class="col form-group" style={{ textAlign: "center" }}>
                                  <label> Your Email :</label>
                                </div>
                                <div class="col">
                                  <input class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                    type="email" placeholder={authContext.auth.email}
                                  />
                                </div>

                              </div>
                            </div></div>

                            <div class="row">
                              <div class="col-12 col-sm-12 mb-5">
                                <div class="mb-2"><b>Change Password</b></div>

                                <div class="row">

                                  <div class="col form-group" style={{ textAlign: "center" }}>
                                    <label>Current Password :</label>
                                  </div>
                                  <div class="col">
                                    <input class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                      type="password" placeholder='......' />
                                  </div>
                                </div>
                                <div class="row">

                                  <div class="col form-group" style={{ textAlign: "center" }}>
                                    <label>New Password :</label>
                                  </div>
                                  <div class="col">
                                    <input class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                      type="password" placeholder='......' />
                                  </div>
                                </div>
                                <div class="row">

                                  <div class="col form-group" style={{ textAlign: "center" }}>
                                    <label>Confirm Password:</label>
                                  </div>
                                  <div class="col">
                                    <input class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                      type="password" placeholder='......' />
                                  </div>
                                </div>
                              </div></div>
                            <div class="row">
                              <div class="col d-flex justify-content-end">
                                <button class="btn rounded-0 d-block ml-auto tm-btn-primary" type="submit">
                                  Save Changes</button>
                              </div>
                            </div>
                          </form>
                        </div></div>

                    </div></div>

                </div></div>
              <div class="col-12 col-md-3 mb-3" >
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="px-xl-6">
                      <button class="btn btn-block btn d-block ml-auto tm-btn-primary" style={{ color: '#fff', backgroundColor: "rgba(0, 0, 0, 0.815)" }} onClick={logout}>
                        <i class="fa fa-sign-out"></i>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h6 class="card-title font-weight-bold">Support</h6>
                    <p class="card-text">Get fast, free help from our friendly assistants.</p> <Link to='/contact'>
                      <button type="button" class="btn btn-block btn d-block ml-auto tm-btn-primary"
                        style={{ color: '#fff', backgroundColor: "rgba(0, 0, 0, 0.815)" }}>

                        Contact Us </button></Link>
                  </div>
                </div>
              </div>

            </div></div>























        </section>
      </div>
    </main>
  );
}

