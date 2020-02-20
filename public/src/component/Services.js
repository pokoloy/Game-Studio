import React, { Component } from 'react';
import '../style/services.css';


export default class Services extends Component{
    render(){
        return(
        <section id="services" class="section-padding">
          <div class="container">
            <div class="row text-center">
              <div class="col-12">
                <h2 class="display-4">Our Services</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-4 col-xs-12">
                <div class="service-box">
                  <div class="service-icon">
                    <i class="fa fa-cogs"></i>
                  </div>
                  <div class="service-content">
                    <h4><a href="#">Easy to Customize</a></h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto officiis consequuntur vero error excepturi.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xs-12">
                <div class="service-box">
                  <div class="service-icon">
                    <i class="fa fa-cubes"></i>
                  </div>
                  <div class="service-content">
                    <h4><a href="#">100+ Components</a></h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto officiis consequuntur vero error excepturi.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xs-12">
                <div class="service-box">
                  <div class="service-icon">
                    <i class="fa fa-tachometer"></i>
                  </div>
                  <div class="service-content">
                    <h4><a href="#">Super Fast</a></h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto officiis consequuntur vero error excepturi.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xs-12">
                <div class="service-box">
                  <div class="service-icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="service-content">
                    <h4><a href="#">Clean Design</a></h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto officiis consequuntur vero error excepturi.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xs-12">
                <div class="service-box">
                  <div class="service-icon">
                    <i class="fa fa-flash"></i>
                  </div>
                  <div class="service-content">
                    <h4><a href="#">Bootstrap 4 UI Kit</a></h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto officiis consequuntur vero error excepturi.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xs-12">
                <div class="service-box">
                  <div class="service-icon">
                    <i class="fa fa-hand-pointer-o"></i>
                  </div>
                  <div class="service-content">
                    <h4><a href="#">Advanced Features</a></h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto officiis consequuntur vero error excepturi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )
    }
}