import React, { Component } from 'react';
import '../style/about.css';


export default class About extends Component{
    render(){
        return(
            <div id="about" class="about-body">
                <div class="container">
                  <div class="row section text-center">
                     <div class="col-12">
                        <h2 class="display-4 about-title-head">About</h2>
                      </div>
                  </div>
                     <div class="row">
                        <div class="col text-center">
                           <p class="lead">We here at Game Studio Development are not only game developers, but are also gamers ourselves.
                           Our passion in games help fuel our desire to ensure that all the games that we produce are of the highest quality
                           and are sure to keep our audiences entertained. We make sure to focus on what the consumer wants and deliver games
                           that will keep you glued to your game devices. We're ecstatic to share with everyone our games and keep everyone
                           entertained for years to come.</p>
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}