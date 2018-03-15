import React, { Component } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state={about:"About Me", portfolio:"Portfolio", resume:"Resume", contact:"Contact Me"};
  }
  render() {
    let selectedItem = this.props.selectedItem;
    let item = this.state[selectedItem];
    const components = {
      about:About,
      portfolio:Portfolio,
      resume:Resume,
      contact:Contact
    }
    const Page = components[selectedItem];
    console.log(selectedItem);
    return (
        <div className="main">
          <div className="main-title">{item}</div>
          <Page />
        </div>
    );
  }
}


