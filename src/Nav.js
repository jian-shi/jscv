import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state={selectedItem:"about"};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    let targetId = e.currentTarget.id;
    //console.log(targetId);
    this.setState({selectedItem:targetId});
    this.props.onClickChange(targetId);
  }

  render() {
    return (
      <nav className="menu nav">
          <a className={this.state.selectedItem === "about" ? "menu-item isActive" : "menu-item"} id="about" onClick={this.handleClick}><i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>About Me</a>
          <a className={this.state.selectedItem === "portfolio" ? "menu-item isActive" : "menu-item"} id="portfolio" onClick={this.handleClick}><i className="fa fa-folder-open-o fa-2x" aria-hidden="true"></i>Portfolio</a>
          <a className={this.state.selectedItem === "resume" ? "menu-item isActive" : "menu-item"} id="resume" onClick={this.handleClick}><i className="fa fa-sticky-note-o fa-2x" aria-hidden="true"></i>Resume</a>
          <a className={this.state.selectedItem === "contact" ? "menu-item isActive" : "menu-item"} id="contact" onClick={this.handleClick}><i className="fa fa-magnet fa-2x" aria-hidden="true"></i>Contact Me</a>
      </nav>
    );
  }
}


