import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './component/Header';
import Cover from './component/Cover';
import Jumbotron from './component/Jumbotron';
import About from './component/About';
import Services from './component/Services';
import Feature from './component/Feature';
import Facts from './component/Facts';
import Team from './component/Team';
import Contacts from './component/Contact';
import Footer from './component/Footer';

import Register from './component/Register';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/register" render={()=><Register />}></Route>
            <Route exact path="/" render={props=>(
              <div>
                <Header />
                <Cover />
                <Jumbotron />
                <About />
                <Feature />
                <Team />
                <Contacts />
                <Footer /> 
              </div>
            )}></Route> 
          </Switch>
        </div>
      </BrowserRouter>     
    );
  }
}

export default App;
