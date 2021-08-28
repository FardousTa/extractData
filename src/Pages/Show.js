import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { getDocs } from "../Components/ApiUser.js";

class Show extends Component  {
  

    state = {
      docId:"",
      docs: {},
    };
    close=()=>{
      const userid=localStorage.getItem('userid');      
      this.props.history.push(`/user/${userid}/`);
    }
    componentDidMount = () => {
      const docId = this.props.match.params.id;
      getDocs(docId)
        .then((response) => {
          console.log(response.data);
          this.setState({
            docs: response.data,
          });
       
        })
        .catch((error) => {
          alert("Somthing was Wrong.. so cannot  show your profile");
        });
    };
    
    render() {
    return (
    <main role="main" className="ml-sm-auto col-12">
      <div class="tm-section-wrap bg-white">
        <section id="work" class="row tm-section">
          <div class="col-12">
            <div class="w-100 tm-double-border-1 tm-border-gray">
              <div class="tm-double-border-2 tm-border-gray tm-box-pad">
                <div class="tm-gallery-wrap">
                  <h2 class="tm-color-primary tm-section-title mb-4 ml-2">
                    <Modal.Header closeButton>
                      <Modal.Title>YOUR DATA HERE: </Modal.Title>
                    </Modal.Header>

                    <Modal.Body >
                      <p>{this.state.docs.text}</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <div class="col d-flex .justify-content-sm-start">
                        <button
                          class="btn rounded-1  d-block ml-auto tm-btn-primary"
                          type="button"
                          style={{
                            color: "#fff",
                            backgroundColor: "rgba(1, 7, 56, 0.815)",
                          }}
                        >
                          Download Data
                        </button>
                      
                   </div>

                        <button
                          class="btn rounded-1 d-block ml-auto tm-btn-secondry"
                          type="button"
                          style={{
                            color: "#fff",
                            backgroundColor: "red",
                          }}
                          onClick={this.close}
                        >
                          close
                        </button>
                      
                    </Modal.Footer>
                  </h2>
                  <div class="tm-gallery "></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    );
  }
}
export default Show;