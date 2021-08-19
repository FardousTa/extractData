import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <main role="main" className="ml-sm-auto col-12">
        <div className="parallax-window" data-parallax="scroll">
          <div className="tm-section-wrap">
            <section id="intro" className="tm-section">
              <div className="tm-bg-white-transparent tm-intro">
                <h2 className="tm-section-title mb-5 text-uppercase tm-color-primary">
                  Extract Data From Files
                </h2>
                <p className="tm-color-gray">
                  The system is able to receive files/images, and extract data
                  from them by linking the content with the document owner's
                  data, according to the user's request. .
                </p>
                <p className="mb-0 tm-color-gray">
                  Since there are a lot of them in many administrative
                  organizations, so a technology was needed to speed up the
                  extraction of information from paper documents.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}
export default Home;
