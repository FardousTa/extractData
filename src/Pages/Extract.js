import React, { Component } from "react";
import { Field, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import TextBorder from "../Components/TextBorder.js";
import textBorderStore from "../store/context.js";
import axios from "axios";

class Extract extends Component {
  state = {
    title: "Upload your files",
    p1: "Your files and their type must be uploaded to extract data from them ",
    p2: (
      <span>
        {" "}
        You choose these files &nbsp;
        <FontAwesomeIcon icon={faArrowCircleDown} />
        &nbsp;{" "}
      </span>
    ),
    filesName: [],
    selectedFile: null,
  };

  handleselectedFile = (event) => {
    const files = event.currentTarget.files;
    const Name = [];
    for (let i = 0; i < files.length; i++) {
      Name[i] = files[i].name;
    }
    this.setState({
      ...this.state,
      selectedFile: files,
      filesName: Name,
    });
  };
  clearFiles = () => {
    this.setState({
      ...this.state,
      selectedFile: null,
      filesName: [],
    });
  };

  OnSubmit = (values) => {
    let type = values.datatype;
    let file = this.state.selectedFile;
    values.file = file;
    const data = new FormData();
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      data.append("file", file[x]);
    }
    data.append("dataType", type); // type is the field in backend
    const config = {
      headers: { "content-type": "multipart/form-data" }, //enables web frameworks to automatically parse the data.
    };
    console.log(this.state.selectedFile);
    console.log(data);
    axios
      .post("https://retoolapi.dev/Kr9mV0/data", data, config)
      .then((res) => {
        console.log(res);
      })

      .catch((err) => console.error(err));

    // send the data to backend
  };
  form = (props) => {
    return (
      <form onSubmit={props.handleSubmit} className="tm-contact-form">
        <div className="form-group">
          <Field
            name="datatype"
            as="select"
            className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
          >
            <option defaultValue>Choose File Type </option>
            <option value="bill">Bill</option>
            <option value="card">University card</option>
            <option value="Passport">Passport</option>
          </Field>
        </div>
        <div className="error">
          <ErrorMessage name="datatype" />
        </div>
        <br />
        <div className="form-group">
          <input
            type="file"
            id="actual-btn"
            name="selectedFile"
            onChange={(e) => this.handleselectedFile(e)}
            hidden
            multiple
          />
          <label
            htmlFor="actual-btn"
            className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
          >
            Upload File Here
          </label>
          <div className="error">
            <ErrorMessage name="file" />
          </div>
        </div>
        <br />

        <div className="form-group mb-0">
          <button
            type="submit"
            className="btn rounded-0 d-block ml-auto tm-btn-primary"
          >
            Extract
          </button>
          <div></div>
        </div>
      </form>
    );
  };
  Schema = () => {
    const Schema = yup.object().shape({
      // selectedFile: yup.array().required("Where is the file ?!"),
      datatype: yup.string().required("You need to add Type of your file"),
    });
    return Schema;
  };

  render() {
    return (
      <textBorderStore.Provider
        value={{
          clearFiles: this.clearFiles,
        }}
      >
        <main role="main" className="ml-sm-auto col-12">
          <div className="tm-section-wrap bg-white">
            <section id="talk" className="row tm-section">
              <TextBorder
                title={this.state.title}
                Trash="Trash"
                p1={this.state.p1}
                p3={this.state.filesName}
                p2={this.state.p2}
                clearFiles={this.clearFiles}
              />
              <div className="col-xl-6 mb-5">
                <div className="tm-contact-form-wrap">
                  <Formik
                    initialValues={{
                      selectedFile: "",
                      datatype: "",
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
      </textBorderStore.Provider>
    );
  }
}

export default Extract;