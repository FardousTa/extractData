import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
export default function Show(props) {
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
                      <Modal.Title>title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body >
                      <p>test</p>
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
