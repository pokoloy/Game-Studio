import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/cover.css';


export default class Cover extends Component{
    render(){
        return(
            <div id="home">
                <div className="landing-text">
                    <h1>Game Studio</h1>
                    <span><Link to="/register" className="btn cover-btn2 btn-primary btn-lg">Register</Link></span>
                </div>
            </div>
        )
    }
}