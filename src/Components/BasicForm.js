import React, { Component } from "react";
import { Field, Formik } from "formik";
class BasicForm extends Component {
  constructor(props) {
    super(props);
  }
  form = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div class="row">
          <div class="col">
            <div class="mb-2">
              <h5>Basic Information :</h5>
            </div>

            <div class="row">
              <div class="col form-group" style={{ textAlign: "center" }}>
                <label>Username:</label>
              </div>
              <div class="col">
                <Field
                  name="username"
                  class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                />
              </div>
            </div>
            <div class="row">
              <div class="col form-group" style={{ textAlign: "center" }}>
                <label> Your Email :</label>
              </div>
              <div class="col">
                <Field
                  name="email"
                  class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                />
              </div>
            </div>
            <div class="row">
              <div class="col form-group" style={{ textAlign: "center" }}>
                <label>Your Name:</label>
              </div>
              <div class="col">
                <Field
                  name="first_name"
                  class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                />
              </div>
            </div>
            <div class="row">
              <div class="col form-group" style={{ textAlign: "center" }}>
                <label> Last Name :</label>
              </div>
              <div class="col">
                <Field
                  name="last_name"
                  class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
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
    );
  };

  render() {
    return (
      <div>
        <Formik
          enableReinitialize={true}
          initialValues={this.props.values}
          onSubmit={this.props.OnSubmit}
          render={this.form}
        />
      </div>
    );
  }
}
export default BasicForm;
