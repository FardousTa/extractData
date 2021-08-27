import React, { Component } from "react";
import axios from "axios";
import { GetFileName } from "./ApiUser.js";
class DocForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    userid: localStorage.getItem("userid"),
    getdoc: [],
    
  };

  getdoc = (id) => {
    try {
      const response = axios.get(
        `http://127.0.0.1:8000/api/v1/user/user/${id}/docs/`
      );
      return response; //very important to show 'data'
    } catch (error) {
      console.error(error);
    }
  };
  deletedoc = (id) => {
    const response =  axios.delete(
      `http://127.0.0.1:8000/api/v1/ocr_uploader/documents/${id}/`
    );
    return response; //very important to show 'data'
  };
  deldoc = (i) => {
    //delete form server
    this.deletedoc(i.id)
      .then(() => {
        // delete from state
        let getdoc = this.state.getdoc;
        const index = getdoc.indexOf(i);
        getdoc.splice(index, 1);
        this.setState({ getdoc });
      })
      .catch((error) => {
        alert(
          "Somthing was Wrong.. Check if your username,email or password are correct...! "
        );
      });
  };
  componentDidMount = () => {
    this.getdoc(this.state.userid).then((res) => {
      console.log(res.data);
      this.setState({
        getdoc: res.data.Document,
      });
    });
  };

  render() {
    return (
      <div class="row">
        <div class="col">
          <div class="mb-2">
            <h5>Documents that you uploaded:</h5>
          </div>

          <ul className="list-group list-group-flush">
          {this.state.getdoc.map((i) => (
              <li key={i.id} className="list-group-item">
                <div class="row">
                  <div class="col form-group" style={{ textAlign: "left" }}>
                    <p>{GetFileName(i.pdf_input)} </p>
                  </div>
                  <div class="col">
                    <button
                      class="btn btn-outline-primary"
                      style={{
                        color: "#fff",
                        textAlign: "right",
                        backgroundColor: "rgba(1, 7, 56, 0.815)",
                      }}
                    >
                      view
                    </button>
                    {"   "}{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deldoc(i)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default DocForm;
