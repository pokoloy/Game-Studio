import React, { Component } from 'react';
import '../style/header.css';


export default class Header extends Component {
    render(){
        return( 
           <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top top-nav-collapse">
           <div className="container">
           <span><a className="navbar-brand" href="/" ><img src="images/cover/Logo_03.png" className="gs-logo"/></a></span>
           <span className="navbar-text">GAME STUDIO</span>
                <button className="navbar-toggler ml-auto custom-toggler" data-toggle="collapse" data-target="#collapse_target">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="collapse_target">
                    
                    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href='/'>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#about'>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#features'>Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#team'>Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#contact'>Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>      
        )
    }
}