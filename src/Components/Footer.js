

import React, { Component } from 'react';

import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faGoogle ,faLinkedin ,faTwitter  } from "@fortawesome/free-brands-svg-icons"

class Footer extends Component {
    render() {
     
        return ( <div>
<ul   className="nav flex-row tm-social-links">
<li className="nav-item">
                  <a href="https://dribbble.com" className="nav-link tm-social-link">
                    <FontAwesomeIcon  icon={faLinkedin }   />
                  </a>
            
                </li>
                <li className="nav-item">
                <a href="https://dribbble.com" className="nav-link tm-social-link">
                    <FontAwesomeIcon  icon={faGoogle }   />
                  </a>
                </li>
                <li className="nav-item">
                <a href="https://dribbble.com" className="nav-link tm-social-link">
                    <FontAwesomeIcon  icon={faFacebook }   />
                  </a>
                </li>
                <li className="nav-item">
                <a href="https://dribbble.com" className="nav-link tm-social-link">
                    <FontAwesomeIcon  icon={faTwitter }   />
                  </a>
                </li>
              </ul>
              <footer className="text-center text-white small">
                <p className="mb--0 mb-2">Copyright 2021 Extract Data  <br></br>
                <span className="mb-0">Design by: &nbsp;
                  <a rel="nofollow" href="https://fardoos.tar@gmail.com"  className="tm-footer-link">Fardous_Ta</a>
                </span> </p>
              </footer> </div>
          );
                    
}}


export default Footer;