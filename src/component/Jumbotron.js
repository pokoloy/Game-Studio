import React, { Component } from 'react';
import '../style/cover.css';

export default class Jumbotron extends Component{
    render(){
        return(
            <div className="container-fluid">
            <div className="row jumbotron">
                <div className="col text-center">
                    <a href="https://play.google.com/store/apps/details?id=com.bctph.tanching&hl=en"><button className="btn j-btn btn-outline-dark btn-lg" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0">
                    </button></a>
                </div>
            </div>
            </div>
        )
    }
}