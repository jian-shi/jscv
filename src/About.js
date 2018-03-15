import React, { Component } from 'react';


export default class About extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {

    return (
      <div className="main-content">    
        <div className="row info">
          <div className="col-sm-12 col-md-12 col-lg-4">
          <div className="detail">NAME:<span> JIAN SHI</span></div>
          <div className="detail">EMAIL:<span> j.shi@me.com</span></div>
          <div className="detail">PHONE:<span> +8617642076798</span></div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="skill">
              HTML&CSS
              <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{"width": "82%"}}></div>
            </div>
            </div>
            <div className="skill">
              Javascript
              <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width": "80%"}}></div>
            </div>
            </div>
            <div className="skill">
              React
              <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{"width": "75%"}}></div>
            </div>
            </div>
            <div className="skill">
              PHP/Laravel
              <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width": "80%"}}></div>
            </div>
            </div>
          </div>
        </div>
        <div className="row intro">
        <div className="col-12">
          <p>I have a Bachelor’s degree in Computer Science and I have the ability to design, develop test, and maintain high quality codes. My skills include using Javascript/React, PHP/MySQL, Python, HTML 5, CSS3.</p>
          <p>I am self-motivated, continuous self-studying has allowed me to follow the IT trend closely. I am also a great team player and always willing to learn from others. I am committed to building attractive, concise, and user-friendly web applications.</p>
        </div>
        </div>
      </div>
    );
  }
}


