import React, { Component } from 'react';
import '../style/cover.css';


export default class Cover extends Component{
    render(){
        return(
            <div id="home">
                <div class="landing-text">
                    <h1>Game Studio</h1>
                    <span><a href="/register" class="btn cover-btn2 btn-primary btn-lg">Register</a></span>
                </div>

            </div>
        )
    }
}