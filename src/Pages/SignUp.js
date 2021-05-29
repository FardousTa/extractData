import React, { Component, useState } from "react";

import TextBorder from "../Components/TextBorder.js";

function SignUp(props) {
  const title = useState("SIGN UP");
  const p1 = useState(
    "Extract data from your paper files and keep it in your personal account and have full control over your data"
  );
  const p2 = useState(
    "Accurately provide your required personal information to be able to create an account on our website."
  );
  const [p3] = useState([]);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });
  //const registering = useSelector((state) => state.registration.registering);

  return (
    <main role="main" className="ml-sm-auto col-12">
      <div class="tm-section-wrap bg-white">
        <section id="talk" class="row tm-section">
          <TextBorder title={title} p1={p1} p2={p2} p3={p3} />
          <div className="col-xl-6 mb-5">
            <div className="tm-contact-form-wrap">
              <form className="tm-contact-form">
                <div className="form-group">
                  <input
                    name="username"
                    id="username"
                    placeholder="Username "
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                  />
                  <br />
                  <div className="error"></div>
                </div>
                <div className="form-group">
                  <input
                    name="Sign_email"
                    id="Sign_email"
                    placeholder="Your Email"
                    type="email"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                  />
                  <br />
                  <div className="error"></div>
                </div>
                <div className="form-group">
                  <input
                    name="Password"
                    id="Password"
                    placeholder="Password"
                    type="Password"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                  />
                  <br />
                  <div className="error"></div>
                </div>
                <div className="form-group">
                  <input
                    name="re_Password"
                    id="re_Password"
                    placeholder="Re_Password"
                    type="Password"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                  />
                  <br />
                  <div className="error"></div>
                </div>
                <div className="form-group mb-0">
                  <button
                    type="submit"
                    className="btn rounded-0 d-block ml-auto tm-btn-primary"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
export default SignUp;
