import React, { Component } from "react";
import BasicForm from "./BasicForm.js";
import RightProfile from "./RightProfile.js";
import { getuser, getprofile, updatUser } from "./ApiUser.js";
import FilesForm from "./FilesForm.js";
class Profile extends Component {
  state = {
    tabClicked: {
      info: true,

      files: false,
    },
    userId: "",
    profileId: "",
    profile: {},
    user: {},
  };

  updateUserData = (values) => {
    const id = this.state.user.id;
    updatUser(id, values).then((response) => {
      console.log(response.data);
      //alert("Edit Done!!");
      if (response.status === 200 || response.status === 201) {
        this.props.history.push(`/user/${this.state.userId}/`);

      }
    });
  };

  componentDidMount = () => {
    const profileId = this.props.match.params.id;
    getprofile(profileId)
      .then((response) => {
        console.log(response.data);
        this.setState({
          profile: response.data,
          userId: response.data.user,
        });
        getuser(this.state.userId).then((response) => {
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
                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
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
                                  <span>Change Photo</span>
                                </button>
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

                                        files: false,
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

                                        files: true,
                                      },
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
                              this.state.tabClicked.files ? tabActive : tab
                            }
                            id="nav-contact"
                            role="tabpanel"
                            aria-labelledby="nav-contact-tab"
                          >
                            <FilesForm />
                            the section for your file here
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
