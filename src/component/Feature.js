import React, { Component } from 'react';
import '../style/feature.css';


export default class Features extends Component{
    render(){
        return(
            <div id="features" className="feature-body">
                <div className="container">
                <div className="row section text-center">
                    <div className="col-12">
                        <h2 className="display-4 feature-title">Tanching</h2>
                    </div>
                </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-6 text-center tanching-hover" data-aos="zoom-in-right">
                        <div className="face face1">
                            <img src="images/features/tanching-01.png" className="img-fluid feature-img img1"/>
                        </div>
                        {/* <div className="face face2">
                            <img src="images/features/chalks-2.2_02.png" className="img-fluid feature-img img2"/>
                        </div> */}
                    </div>
                    <div className="feature-text col-sm-12 col-md-6 text-center">
                        <p className="lead">Toss and Flick with this addicting gameplay and earn real cryptocurrency while playing.
                        Share it to friends and get additional coin rewards.
                        </p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="feature-text col-sm-12 col-md-6 text-center">
                        <p className="lead">Buy coin through the app and get redirected to google play store. 100% secure!
                         
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 text-center" data-aos="zoom-in-right">
                            <img src="images/features/chalks-2.2_02.png" className="img-fluid feature-img"/>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-sm-12 col-md-6 text-center" data-aos="zoom-in-right"> 
                            <img src="images/features/chalks-2.0_03.png" className="img-fluid feature-img"/>
                    </div>
                    <div className="feature-text col-sm-12 col-md-6 text-center">
                        <p className="lead">One hit login and every thing is good to go and also secured by the game server.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}