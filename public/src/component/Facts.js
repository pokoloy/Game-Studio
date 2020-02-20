import React, { Component } from 'react';
import '../style/facts.css';


export default class Facts extends Component{
    render(){
        return(
            <div id="counter">
      <div class="container">
        <div class="row count-to-sec">
          <div class="col-lg-3 col-md-6 col-xs-12 count-one">
            <span class="icon"><i class="fa fa-download"> </i></span>
            <h3 class="timer count-value" data-to="561" data-speed="1000">561</h3>
            <hr class="width25-divider"/>
            <small class="count-title">Downloads</small>
          </div>

          <div class="col-lg-3 col-md-6 col-xs-12 count-one">
            <span class="icon"><i class="fa fa-user"> </i></span>
            <h3 class="timer count-value" data-to="950" data-speed="1000">950</h3>
            <hr class="width25-divider"/>
            <small class="count-title">Developers</small>
          </div>

          <div class="col-lg-3 col-md-6 col-xs-12 count-one">
            <span class="icon"><i class="fa fa-desktop"> </i></span>
            <h3 class="timer count-value" data-to="978" data-speed="1000">978</h3>
            <hr class="width25-divider"/>
            <small class="count-title">Lines of code written</small>
          </div>

          <div class="col-lg-3 col-md-6 col-xs-12 count-one">
            <span class="icon"><i class="fa fa-coffee"> </i></span>
            <h3 class="timer count-value" data-to="1700" data-speed="1000">1700</h3>
            <hr class="width25-divider"/>
            <small class="count-title">Cups of coffee consumed</small>
          </div>
        </div>
      </div>
    </div>
        )
    }
}