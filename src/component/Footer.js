import React, { Component } from 'react';
import '../style/footer.css';

export default class Footer extends Component{
    render(){
        return(
          <footer className="footer">
            <div className="container">
              <div className="row section">
                <div className="col-sm-12 col-md-6 col-xl-6">
                  <h3 className="small-title">
                    About Us
                  </h3>
                  <p>
                  Our passion in games help fuel our desire to ensure that all the games that we produce are of the highest quality and are sure to keep our audiences entertained. 
                  </p>
                  <div className="social-footer">
                    <a href="#"><i className="fa fa-facebook icon-round"></i></a>
                    <a href="#"><i className="fa fa-twitter icon-round"></i></a>
                    <a href="#"><i className="fa fa-linkedin icon-round"></i></a>
                    <a href="#"><i className="fa fa-google-plus icon-round"></i></a>
                  </div>
                </div>
                <div className="col-links col-sm-6 col-md-3 col-xl-3">
                <h3 className="link-text small-title">
                  Links
                </h3>
                <ul className="menu">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Works</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                </div>
                <div className="col-sm-6 col-md-2 col-xl-2">
                    <img src="images/cover/Logo_03.png" className="footer-logo"/>
                </div>
              </div>
            </div>

            <div id="copyright">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-5 col-xs-12">
                    <p className="copyright-text">All copyrights reserved © 2018 
                    </p>
                  </div>
                  <div className="col-lg-8 col-md-7 col-xs-12">
                    <ul className="nav nav-inline  justify-content-end ">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Sitemap</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Privacy Policy</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Terms of services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>

        )
    }
}