import React, {
  Component,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { Field, Formik, ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import TextBorder from "../Components/TextBorder.js";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import ProfileMode from "../Components/ProfileMode.js";
import { AuthContext } from "../store/AuthContext.js";


export default function Login() {
  const [title] = useState("Log In");
  const [p1] = useState(
    "You can organize all your files with us , start by loging in..."
  );
  const [p2] = useState(
    <span>
      <p class="text-black ">
        {" "}
        Don't have an account?
        <Link to="SignUp"> Go here to SignUp...</Link> <br />{" "}
      </p>
    </span>
  );
  const [p3] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  function login(e) {
    e.preventDefault();

    // @todo: send api request to validate data and get token

    if (password === "12345") {
      const token = "abc";

      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      authContext.setAuth({ token, email }); // important step for check if log in
    } else {
      alert("wrong details");
    }
  }
  return (
    <main role="main" className="ml-sm-auto col-12">
      {authContext.auth.email ? (
        <ProfileMode />
      ) : (
        <div class="tm-section-wrap bg-white">
          <section id="talk" class="row tm-section">
            <TextBorder title={title} p1={p1} p2={p2} p3={p3} />
            <div className="col-xl-6 mb-5">
              <div className="tm-contact-form-wrap">
                <form className="tm-contact-form">
                  <div className="form-group">
                    <input
                      name="Log_email"
                      id="Log_email"
                      placeholder=" Email"
                      type="email"
                      value={email}
                      className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                  </div>
                  <div className="form-group">
                    <input
                      name="Log_Pass"
                      id="Log_pass"
                      placeholder="Password"
                      type="password"
                      value={password}
                      className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                  </div>

                  <div className="form-group mb-0">
                    <button
                      className="btn rounded-0 d-block ml-auto tm-btn-primary"
                      onClick={login}
                    >
                      LOG IN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
