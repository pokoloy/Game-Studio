import React, { Component } from 'react';
import '../style/footer.css';

export default class Footer extends Component{
    render(){
        return(
          <footer class="footer">
            <div class="container">
              <div class="row section">
                <div class="col-sm-12 col-md-6 col-xl-6">
                  <h3 class="small-title">
                    About Us
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis veritatis eius porro modi hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div class="social-footer">
                    <a href="#"><i class="fa fa-facebook icon-round"></i></a>
                    <a href="#"><i class="fa fa-twitter icon-round"></i></a>
                    <a href="#"><i class="fa fa-linkedin icon-round"></i></a>
                    <a href="#"><i class="fa fa-google-plus icon-round"></i></a>
                  </div>
                </div>
                <div class="col-links col-sm-6 col-md-3 col-xl-3">
                <h3 class="link-text small-title">
                  Links
                </h3>
                <ul class="menu">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Works</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                </div>
                <div class="col-sm-6 col-md-2 col-xl-2">
                    <img src="images/cover/Logo_03.png" class="footer-logo"/>
                </div>
              </div>
            </div>

            <div id="copyright">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 col-md-5 col-xs-12">
                    <p class="copyright-text">All copyrights reserved © 2018 
                    </p>
                  </div>
                  <div class="col-lg-8 col-md-7 col-xs-12">
                    <ul class="nav nav-inline  justify-content-end ">
                      <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Sitemap</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Privacy Policy</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Terms of services</a>
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