import React, { Component } from "react";
import axios from "axios";
import { GetFileName } from "./ApiUser.js";
import { Link } from "react-router-dom";

class ImgForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    userid: localStorage.getItem("userid"),
    images: [],
    
  };

  getimages = (id) => {
    try {
      const response = axios.get(
        `http://127.0.0.1:8000/api/v1/user/user/${id}/images/`
      );
      return response; //very important to show 'data'
    } catch (error) {
      console.error(error);
    }
  };
  deleteimg = (id) => {
    const response =  axios.delete(
      `http://127.0.0.1:8000/api/v1/ocr_uploader/images/${id}/`
    );
    return response; //very important to show 'data'
  };
  delImage = (i) => {
    //delete form server
    this.deleteimg(i.id)
      .then(() => {
        // delete from state
        let images = this.state.images;
        const index = images.indexOf(i);
        images.splice(index, 1);
        this.setState({ images });
      })
      .catch((error) => {
        alert(
          "Somthing was Wrong.. Check if your username,email or password are correct...! "
        );
      });
  };
  componentDidMount = () => {
    this.getimages(this.state.userid).then((res) => {
      console.log(res.data);
      this.setState({
        images: res.data,
      });
    });
  };

  render() {
    return (
      <div class="row">
        <div class="col">
          <div class="mb-2">
            <h5>Pictures that you uploaded:</h5>
          </div>

          <ul className="list-group list-group-flush">
            {this.state.images.map((i) => (
              <li key={i.id} className="list-group-item">
                <div class="row">
                  <div class="col form-group" style={{ textAlign: "left" }}>
                    <p>{GetFileName(i.image)} </p>
                  </div>
                  <div class="col"> <Link to={`/showImage/${i.id}/`}>
                    <button
                      class="btn btn-outline-primary"
                      style={{
                        color: "#fff",
                        textAlign: "right",
                        backgroundColor: "rgba(1, 7, 56, 0.815)",
                      }}
                    >
                      view
                    </button></Link>
                    {"   "}{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => this.delImage(i)}
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
export default ImgForm;
