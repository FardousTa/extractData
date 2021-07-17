import React, { useState } from "react";
import validation from "../Components/validation.js";
import TextBorder from "../Components/TextBorder.js";
import axios from "axios";

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
  const [error, setError] = useState({});
  const handeInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const SignUp = (event) => {
    event.preventDefault(); 
     setError(validation(user))
    
    const data = user;
    
    axios
      .post("https://retoolapi.dev/nEViEc/testlog", data)
      .then((res) => {
        // const token =res.data.token;
         //localStorage.setItem('token',token)
        console.log(res);
        
      })
      .catch((err) => console.error(err)); 
  };

  return (
    <main role="main" className="ml-sm-auto col-12">
      <div className="tm-section-wrap bg-white">
        <section id="talk" className="row tm-section">
          <TextBorder title={title} p1={p1} p2={p2} p3={p3} />
          <div className="col-xl-6 mb-5">
            <div className="tm-contact-form-wrap">
              <form className="tm-contact-form">
                <div className="form-group">
                  <input
                    name="username"
                    id="username"
                    value={user.username}
                    placeholder="Username "
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    onChange={handeInput}
                  />
                  <br />
                  {error.username && (
                    <div className="error">{error.username}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={user.email}
                    type="email"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    onChange={handeInput}
                  />
                  <br />
                  {error.email && (
                    <div className="error">{error.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    id="Password"
                    value={user.password}
                    placeholder="Password"
                    type="Password"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    onChange={handeInput}
                  />
                  <br />
                  {error.password && (
                    <div className="error">{error.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    name="re_password"
                    id="re_Password"
                    value={user.re_password}
                    placeholder="Re_Password"
                    type="Password"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    onChange={handeInput}
                  />
                  <br />
                  {error.re_password && (
                    <div className="error">{error.re_password}</div>
                  )}
                </div>
                <div className="form-group mb-0">
                  <button
                    onClick={SignUp}
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
