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
    p1: "Your files and their language must be uploaded to extract data from them ",
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
    fileType: "",
    upId: "",
  };

  handleselectedFile = (event) => {
    const files = event.currentTarget.files;
    const Name = [];
    const Type = [];
    for (let i = 0; i < files.length; i++) {
      Name[i] = files[i].name;
      Type[i] = files[i].type;
    }
    this.setState({
      ...this.state,
      selectedFile: files,
      filesName: Name,
      fileType: Type,
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
    let userid = localStorage.getItem("userid");
    values.file = file;
    const data = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" }, //enables web frameworks to automatically parse the data.
    };
    console.log(this.state.fileType);
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      if (this.state.fileType == "application/pdf") {
        console.log("pddddf");
        data.append("pdf_input", file[x]);
        //   data.append("lang", type);
        data.append("user", userid);
        console.log(this.state.selectedFile);
        axios
          .post(
            "http://127.0.0.1:8000/api/v1/ocr_uploader/documents/",
            data,
            config
          )
          .then((res) => {
            console.log(res.data);
            this.setState({
              upId: res.data.id,
            });
            console.log(this.state.upId);
            this.props.history.push(`/show/${this.state.upId}/`);
          })

          .catch((err) => console.error(err));
      } else if (this.state.fileType == "audio/wav") {
        console.log("audio");
        data.append("voice", file[x]);
        //   data.append("lang", type);
        data.append("user", userid);
        console.log(this.state.selectedFile);
        axios
          .post(
            "http://127.0.0.1:8000/api/v1/ocr_uploader/voices/",
            data,
            config
          )
          .then((res) => {
            console.log(res.data);
            this.setState({
              upId: res.data.id,
            });
            console.log(this.state.upId);
            this.props.history.push(`/ShowAud/${this.state.upId}/`);
          })

          .catch((err) => console.error(err));
      } else {
        console.log("immmmmmage");
        data.append("image", file[x]);
        data.append("lang", type);
        data.append("user", userid);
        console.log(this.state.selectedFile);
        axios
          .post(
            "http://127.0.0.1:8000/api/v1/ocr_uploader/images/",
            data,
            config
          )
          .then((res) => {
            console.log(res.data);
            this.props.history.push(`/showInage/${this.state.upId}/`);
          })

          .catch((err) => console.error(err));
      }
    }
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

            <option value="EN">EN</option>
            <option value="AR">AR</option>
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
