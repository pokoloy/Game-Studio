import React, { Component } from 'react';
import '../style/cover.css';

export default class Jumbotron extends Component{
    render(){
        return(
            <div class="container-fluid">
            <div class="row jumbotron">
                <div class="col text-center">
                    <a href="#"><button class="btn j-btn btn-outline-dark btn-lg" data-aos="fade-zoom-in"
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