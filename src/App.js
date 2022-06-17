import React from 'react';
import './App.css';
import Message from './Message';

class PassTheMessage extends React.Component{
  constructor(){
    super()
    this.state = {
      inputValue:"",
      lastMessage:""
    }
  }
  handlerButton=()=>{
    this.setState({...this.state, lastMessage: this.state.inputValue, inputValue: ""})      
  }
  render(){
    const formStyles = {
      backgroundColor:"white",
      padding: "2rem",
      marginTop:"5rem"
    }
    return(
      <>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6" style={formStyles}>    
        <h1>A Message You Would Like To Pass</h1>
        <label htmlFor="message" className="form-label">Write your Message here</label>
        <input name="message" value={this.state.inputValue} 
        onChange={(event)=>this.setState({...this.state,inputValue:event.target.value})} 
        className="form-control"/>
        <button className="btn-primary" onClick={this.handlerButton}>Send</button>
        <div></div>
        <Message data={this.state.lastMessage}/>
        </div>         
        </div>
        </>
    )
  }
}

export default PassTheMessage;

/*class PassTheMessage extends React.Component{
  constructor(){
    super()
    this.state = {inputValue: "",
                  message:""
  }
    
  }
  render(){
    return(
      <>
      <div class="container">
  <div class="row">
    <div class="col-3">
     
    </div>
    <div class="col-6">
      <h1>A Meassage You Would like to Pass</h1>
      <label for="input" >Your Message</label>
    <input onChange={(event)=>this.setState({inputValue:event.target.value})} value = {this.state.inputValue} type="text" className="form-control" id="input" placeholder="your-message"/>
    <button onClick={()=>} type="button" className="btn btn-primary">Submit</button>
    <h2>Last Message Delivered</h2>
    <h2>Message Passed</h2>
    </div>
    <div class="col-3">
    </div>
  </div>
</div>
      </>
    )
  }
}*/
