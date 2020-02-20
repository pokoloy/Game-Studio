import React, { Component } from 'react';
import '../style/facts.css';


export default class Facts extends Component{
    render(){
        return(
            <div id="counter">
      <div className="container">
        <div className="row count-to-sec">
          <div className="col-lg-3 col-md-6 col-xs-12 count-one">
            <span className="icon"><i className="fa fa-download"> </i></span>
            <h3 className="timer count-value" data-to="561" data-speed="1000">561</h3>
            <hr className="width25-divider"/>
            <small className="count-title">Downloads</small>
          </div>

          <div className="col-lg-3 col-md-6 col-xs-12 count-one">
            <span className="icon"><i className="fa fa-user"> </i></span>
            <h3 className="timer count-value" data-to="950" data-speed="1000">950</h3>
            <hr className="width25-divider"/>
            <small className="count-title">Developers</small>
          </div>

          <div className="col-lg-3 col-md-6 col-xs-12 count-one">
            <span className="icon"><i className="fa fa-desktop"> </i></span>
            <h3 className="timer count-value" data-to="978" data-speed="1000">978</h3>
            <hr className="width25-divider"/>
            <small className="count-title">Lines of code written</small>
          </div>

          <div className="col-lg-3 col-md-6 col-xs-12 count-one">
            <span className="icon"><i className="fa fa-coffee"> </i></span>
            <h3 className="timer count-value" data-to="1700" data-speed="1000">1700</h3>
            <hr className="width25-divider"/>
            <small className="count-title">Cups of coffee consumed</small>
          </div>
        </div>
      </div>
    </div>
        )
    }
}