import React, { Component } from "react";
import axios from "axios";
import { GetFileName } from "./ApiUser.js";
import { Link } from "react-router-dom";

class VoicForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    userid: localStorage.getItem("userid"),
    voic: [],
    
  };

  getimages = (id) => {
    try {
      const response = axios.get(
        `http://127.0.0.1:8000/api/v1/user/user/${id}/voices/`
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
        let voic = this.state.voic;
        const index = voic.indexOf(i);
        voic.splice(index, 1);
        this.setState({ voic });
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
        voic: res.data.Voice, // here you need to edit ocrtext
      });
    });
  };

  render() {
    return (
      <div class="row">
        <div class="col">
          <div class="mb-2">
            <h5>The audios you uploaded:</h5>
          </div>

          <ul className="list-group list-group-flush">
        
            test
          </ul>
        </div>
      </div>
    );
  }
}
export default VoicForm;
