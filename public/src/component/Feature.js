import React, { Component } from 'react';
import '../style/feature.css';


export default class Features extends Component{
    render(){
        return(
            <div id="features" class="feature-body">
                <div class="container">
                <div class="row section text-center">
                    <div class="col-12">
                        <h2 class="display-4 feature-title">Features</h2>
                    </div>
                </div>
                    <div class="row">
                    <div class="col-sm-12 col-md-6 text-center" data-aos="zoom-in-right">
                        <img src="images/features/chalks-2.1_02.png" class="img-fluid feature-img"/>
                    </div>
                    <div class="feature-text col-sm-12 col-md-6 text-center">
                        <p class="lead">Toss and Flick with this addicting gameplay and earn real cryptocurrency while playing.
                        Share it to friends and get additional coin rewards.
                        </p>
                    </div>
                    </div>

                    <div class="row">
                    <div class="feature-text col-sm-12 col-md-6 text-center">
                        <p class="lead">Buy coin through the app and get redirected to google play store. 100% secure!
                         
                        </p>
                    </div>
                    <div class="col-sm-12 col-md-6 text-center" data-aos="zoom-in-right">
                            <img src="images/features/chalks-2.2_02.png" class="img-fluid feature-img"/>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-sm-12 col-md-6 text-center" data-aos="zoom-in-right"> 
                            <img src="images/features/chalks-2.0_03.png" class="img-fluid feature-img"/>
                    </div>
                    <div class="feature-text col-sm-12 col-md-6 text-center">
                        <p class="lead">One hit login and every thing is good to go and also secured by the game server.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}