import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style/register.css';


export default class Register extends Component {
    render() {
        return(
            <div className="register-body">
                <Header />
                <div className="modal-dialog text-center">
                    <div className="col-sm-8 main-form-section">
                        <div className="modal-content">
                        
                            <div className="col-12 user-img">
                                <img src="images/cover/Logo_03.png"/>
                            </div>

                            <form className="col-12">
                                <div className="form-group">
                                    <input type="text" className="form-control register-input" placeholder="Email Address"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control register-input" placeholder="Username"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control register-input" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                
                                    <input type="password" className="form-control register-input" placeholder="Confirm Password"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control register-input" placeholder="Wallet Address"/>
                                </div>
                                <button type="submit" className="btn login-btn">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>   
        )
    }
}

