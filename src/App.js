import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Left from './Left';
import photo from './img/jsPhoto.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
           <div className="col-sm-12 col-md-12 col-lg-3 left">
            <div className="portrait"> <img src={photo} className="img-responsive" alt="portrait" width="100%"/> </div>
            <div className="name">JIAN SHI<span>Web Developer</span></div>
            <nav className="navbar social">
              <a className="nav-item nav-link" href="https://github.com/jian-shi/CV"><i className="fa fa-github fa-lg"></i></a>
              <a className="nav-item nav-link" href="http://www.linkedin.com/in/jian-shi-3a71324a/"><i className="fa fa-linkedin-square fa-lg"></i></a>
              {/* <a className="nav-item nav-link" href=""><i className="fa fa-facebook-square fa-lg"></i></a> */}
            </nav>
           </div>
           <Left />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
