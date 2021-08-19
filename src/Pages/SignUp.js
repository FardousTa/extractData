import React, { Component } from "react";
import { Field, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import TextBorder from "../Components/TextBorder.js";
class SignUp extends Component {
  state = {
    title: "SIGN UP",
    p1: "Extract data from your paper files and keep it in your personal account and have full control over your data",
    p2: "Accurately provide your required personal information to be able to create an account on our website.",
    p3: [],
  };

  OnSubmit = (values) => {
    console.log(values.password1);

    const config = {
      headers: { "content-type": "application/json" }, //enables web frameworks to automatically parse the data.
    };
    const username = values.username;
    const password1 = values.password1;
    const password2 = values.password2;
    const email = values.email;
    try {
      axios
        .post(
          "http://127.0.0.1:8000/rest-auth/registration/",
          {
            username: username,
            password1: password1,
            password2: password2,
            email: email,
          },
          config
        )
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            console.log("Sined Up !!");
            this.props.history.push("/login");
          }
        });
    } catch (error) {
      console.error(error.response.data);
    }
    this.props.history.push("/login");

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
        <div className="form-group">
          <Field
            name="password2"
            id="password2"
            placeholder="Re_password"
            type="password"
            className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
          />
          <br />
          <div className="error">
            <ErrorMessage name="password2" />
          </div>
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
    );
  };
  Schema = () => {
    const Schema = yup.object().shape({
      username: yup.string().required("Your Name is important for us"),
      email: yup.string().required("Your Email is important for us"),
      password1: yup
        .string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      password2: yup
        .string()

        .required("Enter your password again")
        .oneOf([yup.ref("password1")], "Passwords does not match"),
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
                    password2: "",
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
export default SignUp;
