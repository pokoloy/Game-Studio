import React, { Component } from 'react';
import '../style/header.css';


export default class Header extends Component {
    render(){
        return( 
           <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top top-nav-collapse">
           <div class="container">
           <span><a class="navbar-brand"><img src="images/cover/Logo_03.png" class="gs-logo"/></a></span>
           <span class="navbar-text">GAME STUDIO</span>
                <button class="navbar-toggler ml-auto custom-toggler" data-toggle="collapse" data-target="#collapse_target">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="collapse_target">
                    
                    
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href='#home'>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='#about'>About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='#features'>Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='#team'>Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='#contact'>Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>      
        )
    }
}