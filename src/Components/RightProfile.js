import React, { Component } from "react";
import { Link } from "react-router-dom";
import {logout} from './ApiUser.js';

class RightProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        <div class="col-12 col-md-3 mb-3">
        <div class="card mb-3">
          <div class="card-body">
            <div class="px-xl-6">
              <Link to="/" className="nav-link active">
                <button
                  class="btn btn-block btn d-block ml-auto tm-btn-primary"
                  style={{
                    color: "#fff",
                    backgroundColor: "rgba(1, 7, 56, 0.815)",
                  }}
                  onClick={logout}
                >
                  <i class="fa fa-sign-out"></i>
                  <span>Logout</span>
                </button>{" "}
              </Link>
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
                  backgroundColor: "rgba(1, 7, 56, 0.815)",
                }}
              >
                Contact Us{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>


    )}

}
  export default RightProfile;
