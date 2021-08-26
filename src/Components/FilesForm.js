import React, { Component } from "react";
import axios from 'axios';
import * as yup from "yup";
class FilesForm extends Component {
  constructor(props) {
    super(props);
  }
  state={
      userid:localStorage.getItem('userid'),
      images:[]
  }

   getimages=(id)=>{
    try{
const response= axios.get(`http://127.0.0.1:8000/api/v1/user/user/${id}/files/`);
return response //very important to show 'data'
    }catch(error)
    {
        console.error(error);}
        
    
    }

  componentDidMount = () => {
    this.getimages(this.state.userid).then(
        (res)=>{console.log(res.data)

    this.setState({
        images:res.data
    }
    );
    console.log(this.state.images.id)
 } )

  }


  render() {
    return (
        <div class="row">
        <div class="col">
        <div class="mb-2">
              <b>Your Images:</b>
            </div>
            <div class="row">
              <div class="col form-group" style={{ textAlign: "center" }}>
              test
              </div></div>
            </div></div>
    );
  }
}
export default FilesForm;
