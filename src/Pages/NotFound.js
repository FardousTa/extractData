import React from 'react';
import { render } from 'react-dom';
export default   (props) => {

        return( 
            <main role="main" className="ml-sm-auto col-12">
                 <div class="tm-section-wrap bg-white">
                 <div class="tm-sidebar-sticky">
              <div className="tm-brand-box" >
                <div className="tm-double-border-1" style={{borderColor:'#707172'}}>
                  <div className="tm-double-border-2" style={{borderColor:'#707172'}}>
                    <h1 className="tm-brand text-uppercase" style={{color:'#069'}}>404</h1>
                    <h4 className="tm-section-title mb-5 text-uppercase tm-color-primary">Not Found</h4>
                  </div>
                </div>
              </div></div>
              <h6 className="tm-section-title   tm-color-primary" style={{textAlign:'center'}}>
        This path {props.location.pathname} is not available  :(

              </h6>
         </div>
               </main>);
   }
    