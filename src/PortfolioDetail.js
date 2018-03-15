import React, { Component } from 'react';

export default class PortfolioDetail extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    console.log(this.props);
    return (
      <div className="col-lg-4 col-sm-12 portfolio-item">
        <div className="card">
          <a href="" data-toggle="modal" data-target={"#" + this.props.id + "Modal"}>
            <img className="card-img" src={this.props.img} alt={this.props.title} id={this.props.id}/>
          </a>
        </div>
        <div id={this.props.id + "Modal"} className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
              <div className="modal-header">
              <h4 className="modal-title">
                  {this.props.title}
                </h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <p>{this.props.intro}</p>
              </div>
            </div>
        </div>  
        </div>
      </div>
    );
  }
}

