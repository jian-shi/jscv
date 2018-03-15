import React, { Component } from 'react';


export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state={name:"", city:"" ,email:"",mobile:"",message:"", recieved:false};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.sendData=this.sendData.bind(this);
  }
  handleChange(e){
    this.setState({[e.target.id]:e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('Submit');
    this.sendData();
  }
  sendData(){
    let formData = this.state;
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: formData
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    this.setState({recieved: true})
  }

  render() {
      let display = "hidden";
      if(this.state.recieved){
        display = "display";
      }
      
    
    return (
      <div className="main-content">
      <section id="contact">
      <div className= {"alert alert-success " + display} >
	      <span className="close" data-dismiss="alert">
        &times;
	      </span>
	      <strong>THANK YOU</strong> for your message ... Talk to you soon ...
      </div>
      <form action='' onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id="name" placeholder="Name" required required-message="field can't left empty！" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            
            <input type="text" className="form-control" id="city" placeholder="City" required onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            
            <input type="email" className="form-control" id="email" placeholder="Email" required onChange={this.handleChange}/>
          </div>	
          <div className="form-group">
            <input type="tel" className="form-control" id="mobile" placeholder="Mobile" required onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            
            <textarea  className="form-control" id="message" placeholder="Enter Your Message" required onChange={this.handleChange}></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-default submit"><i className="fa fa-paper-plane" aria-hidden="true"></i> Send Message</button>
          </div>
					
			 </form>
      </section>
      </div>
    );
  }
}


