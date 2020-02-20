import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style/register.css';


export default class Register extends Component {
    render() {
        return(
                <div class="register-body">
                    <Header />
                    <div class="modal-dialog text-center">
                        <div class="col-sm-8 main-form-section">
                            <div class="modal-content">
                            
                                <div class="col-12 user-img">
                                    <img src="images/cover/Logo_03.png"/>
                                </div>

                                <form class="col-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control register-input" placeholder="Email Address"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control register-input" placeholder="Username"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control register-input" placeholder="Password"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control register-input" placeholder="Confirm Password"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control register-input" placeholder="Wallet Address"/>
                                    </div>
                                    <button type="submit" class="btn login-btn">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>   
        )
    }
}

