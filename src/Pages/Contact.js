import React, { Component } from "react";
import { Field, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import TextBorder from "../Components/TextBorder.js";
class Contact extends Component {
  state = {
    title: "Talk to Us",
    p1: "Get support from our website Experts and explore your service options, some of which can be handled fully online.",
    p2: "Just send us your questions or concerns and we will give you the help you need.",
    p3: [],
  };
  OnSubmit = (values) => {
    console.log(values);
    // send the data to backend
    axios.post("https://retoolapi.dev/nEViEc/testlog", values).then((res) => {
      console.log(res);
    });
  };
  form = (props) => {
    return (
      <form onSubmit={props.handleSubmit} className="tm-contact-form">
        <div className="form-group">
          <Field
            name="contact_name"
            id="contact_name"
            placeholder="Your Name"
            className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
          />
          <br />
          <div className="error">
            <ErrorMessage name="contact_name" />
          </div>
        </div>
        <div className="form-group">
          <Field
            name="contact_email"
            id="contact_email"
            placeholder="Your Email"
            type="email"
            className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
          />
          <br />
          <div className="error">
            <ErrorMessage name="contact_email" />
          </div>
        </div>
        <div className="form-group">
          <Field
            name="contact_message"
            id="contact_message"
            placeholder="Message..."
            as="textarea"
            rows="4"
            className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
          />
          <br />
          <div className="error">
            <ErrorMessage name="contact_message" />
          </div>
        </div>
        <div className="form-group mb-0">
          <button
            type="submit"
            className="btn rounded-0 d-block ml-auto tm-btn-primary"
          >
            SEND
          </button>
        </div>
      </form>
    );
  };
  Schema = () => {
    const Schema = yup.object().shape({
      contact_name: yup.string().required("Your Name is important for us"),
      contact_email: yup.string().required("Your Email is important for us"),
      contact_message: yup.string().required("What is your message...!!"),
    });
    return Schema;
  };
  render() {
    return (
      <main role="main" className="ml-sm-auto col-12">
        <div class="tm-section-wrap bg-white">
          <section id="talk" class="row tm-section">
            <TextBorder
              title={this.state.title}
              p1={this.state.p1}
              p2={this.state.p2}
              p3={this.state.p3}
            />
            <div className="col-xl-6 mb-5">
              <div className="tm-contact-form-wrap">
                <Formik
                  initialValues={{
                    contact_name: "",
                    contact_email: "",
                    contact_message: "",
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
export default Contact;
