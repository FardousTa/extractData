import React, { Component } from "react";
import { Field, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import TextBorder from "../Components/TextBorder.js";
import { Link } from "react-router-dom";
class Login extends Component {
  state = {
    title: "Log In",
    p1: "You can organize all your files with us , start by loging in...",
    p2: (
      <span>
        <p class="text-black ">
          {" "}
          Don't have an account?
          <Link to="SignUp"> Go here to SignUp...</Link> <br />{" "}
        </p>
      </span>
    ),
    p3: [],
    userId: "",
  };

  OnSubmit = (values) => {
    console.log(values);
    const config = {
      headers: { "content-type": "application/json" }, //enables web frameworks to automatically parse the data.
    };
    const username = values.username;
    const password1 = values.password1;
    const email = values.email;

    try {
      axios
        .post(
          "http://127.0.0.1:8000/api/v1/user/authenticate/",
          {
            username: username,
            password: password1,
            email: email,
          },
          config
        )
        .then((res) => {
          console.log(res.data.id);
          if (res.status === 200 || res.status === 201) {
            this.setState({
              userId: res.data.id,
            });
            localStorage.setItem("logeed", 'true');
            console.log("loggin!!");
            console.log(this.state.userId);
            localStorage.setItem("userid", this.state.userId);

            this.props.history.push(`/user/${this.state.userId}/`);
          } else {
            alert(
              "SomeThing was wrong..check if your username,email and password is correct..!!"
            );
          }
        })
        .catch((error) => {
          alert(
            "Somthing was Wrong.. Check if your username,email or password are correct...! "
          );
        });
    } catch (error) {
      console.error(error.response.data);
    }
  };
  form = (props) => {
    return (
      <form onSubmit={props.handleSubmit} className="tm-contact-form">
        <div className="form-group">
          <Field
            name="username"
            id="username"
            placeholder="username"
            className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
          />
          <br />
          <div className="error">
            <ErrorMessage name="username" />
          </div>
        </div>
        <div className="form-group">
          <Field
            name="email"
            id="email"
            placeholder="Your Email"
            type="email"
            className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
          />
          <br />
          <div className="error">
            <ErrorMessage name="email" />
          </div>
        </div>
        <div className="form-group">
          <Field
            name="password1"
            id="password1"
            placeholder="password"
            type="password"
            className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
          />
          <br />
          <div className="error">
            <ErrorMessage name="password1" />
          </div>
        </div>

        <div className="form-group mb-0">
          <button
            type="submit"
            className="btn rounded-0 d-block ml-auto tm-btn-primary"
          >
            Log In
          </button>
        </div>
      </form>
    );
  };
  Schema = () => {
    const Schema = yup.object().shape({
      username: yup.string().required("Your Name is important for us"),
      email: yup.string().required("Your Email is important for us"),
    });
    return Schema;
  };
  render() {
    return (
      <main role="main" className="ml-sm-auto col-12">
        <div className="tm-section-wrap bg-white">
          <section id="talk" className="row tm-section">
            <TextBorder
              title={this.state.title}
              p1={this.state.p1}
              p2={this.state.p2}
              p3={this.state.p3}
            />{" "}
            <div className="col-xl-6 mb-5">
              <div className="tm-contact-form-wrap">
                <Formik
                  initialValues={{
                    username: "",
                    email: "",
                    password1: "",
                  }}
                  onSubmit={this.OnSubmit}
                  render={this.form}
                  validationSchema={this.Schema()}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
export default Login;
