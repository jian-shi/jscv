import React, { Component } from 'react';
import Content from './Content';
import Nav from './Nav';
export default class Left extends Component {
  constructor(props){
    super(props);
    this.state={optionId:"about"};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id){
   this.setState({optionId:id});
  }
  render() {
    return (
      <div className="col-sm-12 col-md-12 col-lg-9 right">
        <Nav onClickChange={this.handleClick}/>
        <Content selectedItem = {this.state.optionId} />
      </div>
    );
  }
}


