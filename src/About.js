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
          <p>Experienced developer focusing on front-end development, with up-to-date knowledge of web design, tools and coding techniques, I am committed to creating attractive, concise, and user-friendly web applications. Looking forward to joining a growing company and developing my skills.</p>
        </div>
        </div>
      </div>
    );
  }
}


