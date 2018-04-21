import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Chat extends Component {
  constructor () {
    super();
    this.state={inputVal: '', msgs: [], userName: ''};
  }

  handleSubmit = (event) => {
    let inputMsgs = this.state.inputVal;
    let allMsgs = this.state.msgs.concat(this.state.userName +": " + inputMsgs);
    let responses = ["can't you try?", "but why not?", "i can't deal with you"];
    let otherResponses = ["can i join?", "but i like you", "just be open-minded.."]
    setTimeout(() => {allMsgs = allMsgs.concat(this.props.person+": " + this.props.msgs[Math.round(Math.random()*2)])
    //.concat("Frederic: " + otherResponses[Math.round(Math.random()*2)]);
    this.setState({msgs: allMsgs});
    event.preventDefault();}, 1000)
    this.setState({msgs: allMsgs});
    event.preventDefault();
    this.setState({inputVal: ''});
  }

  setUserName = (event) => {
    this.setState({userName: event.target.value});
    event.preventDefault();
  }

  addToMsgs = (event) => {
    this.setState({inputVal: event.target.value});
    event.preventDefault();
  }

  render() {
      console.log(this.props);
    let lify = (item) => (<li>{item}</li>)
    return (
      <div>
      Enter name & start chatting:
      <input type="text" value={this.state.userName} onChange={this.setUserName}></input>
      <ul style={{listStyleType: "none"}}>
      <li>{this.props.person}: hey, wanna go on a date?</li>
      {this.state.msgs.map(lify)}
      </ul>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.inputVal} onChange={this.addToMsgs}></input>
        <input type="submit" value="Send"></input>
      </form>
      </div>
    );
  }
}

export default Chat;