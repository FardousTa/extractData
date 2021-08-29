import React, { Component } from "react";
import BasicForm from "./BasicForm.js";
import RightProfile from "./RightProfile.js";
import { getuser, getprofile, updatUser, updatprofile } from "./ApiUser.js";
import ImgForm from "./ImgForm.js";
import DocForm from "./DocForm.js";
import VoicForm from "./VoicForm.js";
class Profile extends Component {
  state = {
    tabClicked: {
      info: true,
      img: false,
      doc: false,
      voc: false,
    },
    profile: {},
    user: {},
 };
  updateUserData = (values) => {
    const id = this.state.user.id;
    updatUser(id, values).then((response) => {
      console.log(response.data);
      if (response.status === 200 || response.status === 201) {
        alert("Edit Done!! Update the page to see the changes ");
      }
    });
  };
  componentDidMount = () => {
    const profileId = this.props.match.params.id;
    const userid = localStorage.getItem("userid");
    getprofile(profileId)
      .then((response) => {
        console.log(response.data);
        this.setState({
          profile: response.data,
        });
        getuser(userid).then((response) => {
          console.log(response.data);
          this.setState({
            user: response.data,
          });
        });
      })
      .catch((error) => {
        alert("Somthing was Wrong.. so cannot  show your profile");
      });
  };
  render() {
    let tab = "tab-pane fade ";
    let tabActive = "tab-pane fade show active";
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
                                    src=""
                                    style={{ height: "139px" }}
                                    alt="add photo"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                            <div class="text-center text-sm-left mb-2 mb-sm-0">
                              <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">
                                {this.state.user.username}
                              </h4>
                              <p class="mb-0">{this.state.user.email}</p>
                              <div class="mt-2">
                                <button
                                  class="btn btn-block btn d-block ml-auto tm-btn-primary"
                                  style={{
                                    color: "#fff",
                                    backgroundColor: "rgba(1, 7, 56, 0.815)",
                                  }}
                                  type="button"
                                >
                                  <i class="fa fa-fw fa-camera"></i>

                                  <label htmlFor="actual-btn">
                                    Change Photo
                                  </label>
                                </button>{" "}
                                <input
                                  type="file"
                                  id="actual-btn"
                                  hidden
                                  multiple
                                />
                              </div>
                            </div>
                            <div class="text-center text-sm-right">
                              <div class="text-muted">
                                <small></small>
                              </div>
                              <div class="text-muted">
                                <small></small>
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
                                    this.setState({
                                      tabClicked: {
                                        info: true,
                                        img: false,
                                        doc: false,
                                      },
                                    })
                                  }
                                >
                                  Information
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
                                    this.setState({
                                      tabClicked: {
                                        info: false,

                                        img: true,
                                        doc: false,
                                      },
                                    })
                                  }
                                >
                                  Your Photos
                                </button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button
                                  class="nav-link "
                                  id="doc"
                                  data-bs-toggle="tab"
                                  data-bs-target="#doc"
                                  type="button"
                                  role="tab"
                                  aria-controls="contact"
                                  aria-selected="false"
                                  onClick={() =>
                                    this.setState({
                                      tabClicked: {
                                        info: false,
                                        img: false,
                                        doc: true,
                                      },
                                    })
                                  }
                                >
                                  Documents
                                </button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button
                                  class="nav-link "
                                  id="voc"
                                  data-bs-toggle="tab"
                                  data-bs-target="#voc"
                                  type="button"
                                  role="tab"
                                  aria-controls="contact"
                                  aria-selected="false"
                                  onClick={() =>
                                    this.setState({
                                      tabClicked: {
                                        info: false,
                                        img: false,
                                        doc: false,
                                        voc: true,
                                      },
                                    })
                                  }
                                >
                                  Voices
                                </button>
                              </li>
                            </ul>
                          </div>
                        </nav>
                        <div class="tab-content pt-3" id="nav-tabContent">
                          <div
                            className={
                              this.state.tabClicked.info ? tabActive : tab
                            }
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <BasicForm
                              values={this.state.user}
                              OnSubmit={this.updateUserData}
                            />
                          </div>

                          <div
                            className={
                              this.state.tabClicked.img ? tabActive : tab
                            }
                            id="nav-contact"
                            role="tabpanel"
                            aria-labelledby="nav-contact-tab"
                          >
                            <ImgForm />
                          </div>
                          <div
                            className={
                              this.state.tabClicked.doc ? tabActive : tab
                            }
                            id="nav-doc"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <DocForm />
                          </div>
                          <div
                            className={
                              this.state.tabClicked.voc ? tabActive : tab
                            }
                            id="nav-voc"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <VoicForm />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <RightProfile />
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
export default Profile;
