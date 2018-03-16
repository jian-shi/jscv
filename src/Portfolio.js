import React, { Component } from 'react';
import {PORTFOLIO} from './Data';
import PortfolioDetail from './PortfolioDetail';

export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state={data:PORTFOLIO};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
      let targetId = e.currentTarget.id;
      this.setState({selectedItem:targetId});
  }
  render() {
    return (
      <div className="main-content">
        <div className="row">
          {this.state.data.map(obj=><PortfolioDetail key={obj.id} id={obj.id} title={obj.title} img={obj.img} intro={obj.intro} skills={obj.skills}/>)}
        </div>
      </div>
       
    );
  }
}


