import React, { Component, useContext, useState } from "react";
import { Link, Route } from "react-router-dom";

export default function ProfileMode() {
  let tab = "tab-pane fade ";
  let tabActive = "tab-pane fade show active";
  const [tabClicked, settabClicked] = useState({
    info: true,
    setting: false,
    files: false,
  });
  /*const [tabClicked2,settabClicked2]= useState(true);
const [tabClicked3,settabClicked3]= useState(true);
*/
  function logout() {

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
                            <div
                              className="d-flex justify-content-center align-items-center rounded"
                              style={{
                                height: "140px",
                                backgroundColor: "rgb(233, 236, 239)",
                              }}
                            >
                              <span
                                style={{
                                  color: "rgb(166, 168, 170)",
                                  font: "bold 8pt Arial",
                                }}
                              >
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                  style={{ height: "139px" }}
                                  alt="Maxwell Admin"
                                />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div class="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">
                              John Smith
                            </h4>
                            <p class="mb-0"> </p>

                            <div class="mt-2">
                              <button
                                class="btn btn-block btn d-block ml-auto tm-btn-primary"
                                style={{
                                  color: "#fff",
                                  backgroundColor: "rgba(0, 0, 0, 0.815)",
                                }}
                                type="button"
                              >
                                <i class="fa fa-fw fa-camera"></i>
                                <span>Change Photo</span>
                              </button>
                            </div>
                          </div>
                          <div class="text-center text-sm-right">
                            <div class="text-muted">
                              <small>
                                You logged in: 
                              </small>
                            </div>
                            <div class="text-muted">
                              <small>at :</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                          <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                                onClick={() =>
                                  settabClicked({
                                    ...tabClicked,
                                    info: true,
                                    setting: false,
                                    files: false,
                                  })
                                }
                              >
                                Personal Info
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                                onClick={() =>
                                  settabClicked({
                                    ...tabClicked,
                                    info: false,
                                    setting: true,
                                    files: false,
                                  })
                                }
                              >
                                Setting
                              </button>
                            </li>

                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link"
                                id="contact-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#contact"
                                type="button"
                                role="tab"
                                aria-controls="contact"
                                aria-selected="false"
                                onClick={() =>
                                  settabClicked({
                                    ...tabClicked,
                                    info: false,
                                    setting: false,
                                    files: true,
                                  })
                                }
                              >
                                Your Files
                              </button>
                            </li>
                          </ul>
                        </div>
                      </nav>

                      <div class="tab-content pt-3" id="nav-tabContent">
                        <div
                          className={tabClicked.info ? tabActive : tab}
                          id="nav-home"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                        >
                          <form class="form">
                            <div class="row">
                              <div class="col">
                                <div class="mb-2">
                                  <b>Personal Information :</b>
                                </div>
                                <div class="row">
                                  <div
                                    class="col form-group"
                                    style={{ textAlign: "center" }}
                                  >
                                    <label>Username:</label>
                                  </div>
                                  <div class="col">
                                    <input
                                      class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div class="row">
                                  <div
                                    class="col form-group"
                                    style={{ textAlign: "center" }}
                                  >
                                    <label> Your Email :</label>
                                  </div>
                                  <div class="col">
                                    <input
                                      class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                      type="email"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col d-flex justify-content-end">
                                <button
                                  class="btn rounded-0 d-block ml-auto tm-btn-primary"
                                  type="submit"
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div
                          className={tabClicked.setting ? tabActive : tab}
                          id="nav-profile"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                        >
                          <form class="form">
                            <div class="row">
                              <div class="col">
                                <div class="mb-2">
                                  <b>Change Password :</b>
                                </div>
                                <div class="row">
                                  <div
                                    class="col form-group"
                                    style={{ textAlign: "center" }}
                                  >
                                    <label>Current Password :</label>
                                  </div>
                                  <div class="col">
                                    <input
                                      class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                      type="password"
                                      placeholder="......"
                                    />
                                  </div>
                                </div>
                                <div class="row">
                                  <div
                                    class="col form-group"
                                    style={{ textAlign: "center" }}
                                  >
                                    <label>New Password :</label>
                                  </div>
                                  <div class="col">
                                    <input
                                      class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                      type="password"
                                      placeholder="......"
                                    />
                                  </div>
                                </div>
                                <div class="row">
                                  <div
                                    class="col form-group"
                                    style={{ textAlign: "center" }}
                                  >
                                    <label>Confirm Password:</label>
                                  </div>
                                  <div class="col">
                                    <input
                                      class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                      type="password"
                                      placeholder="......"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col d-flex justify-content-end">
                                <button
                                  class="btn rounded-0 d-block ml-auto tm-btn-primary"
                                  type="submit"
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div
                          className={tabClicked.files ? tabActive : tab}
                          id="nav-contact"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab"
                        >
                          the section for your file here
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-3 mb-3">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="px-xl-6">
                      <button
                        class="btn btn-block btn d-block ml-auto tm-btn-primary"
                        style={{
                          color: "#fff",
                          backgroundColor: "rgba(0, 0, 0, 0.815)",
                        }}
                        onClick={logout}
                      >
                        <i class="fa fa-sign-out"></i>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h6 class="card-title font-weight-bold">Support</h6>
                    <p class="card-text">
                      Get fast, free help from our friendly assistants.
                    </p>{" "}
                    <Link to="/contact">
                      <button
                        type="button"
                        class="btn btn-block btn d-block ml-auto tm-btn-primary"
                        style={{
                          color: "#fff",
                          backgroundColor: "rgba(0, 0, 0, 0.815)",
                        }}
                      >
                        Contact Us{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
