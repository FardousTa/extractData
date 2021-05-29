import React, { Component } from 'react';
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
                                    The system is able to receive files/documents ,
                                    and it extracts data from them by linking the content with the data of the owner of the document,
                                    and the required data is output according to the user's request.
                        </p>
                                <p className="mb-0 tm-color-gray">
                                    This is due to the large number of data and the importance of relying on them in
                                    many administrative institutions,
                                    so there was a need for a technology to accelerate the extraction
                                    of information from paper documents.
                        </p>
                            </div>
                        </section>
                    </div>
                </div></main>
        );
    }
}
export default Home;