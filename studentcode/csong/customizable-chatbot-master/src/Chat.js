import React, { Component } from 'react';
import Chatline from './Chatline.js';

// There are three different screens. The first screen shown to the user is the login.
let LOGIN_SCREEN = "login"
let CHAT_SCREEN = "chat"
let PROFILE_SCREEN = "profile"

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {currentMsg: "" }
    this.changeHandler = this.changeHandler.bind(this);
  }
  handleSubmit = (event) => {
    let newMsgs = this.props.msgs;
    newMsgs = newMsgs.concat(this.props.username + ": " + this.state.currentMsg);
    newMsgs = newMsgs.concat("barbara: " + this.props.botMessage);
    newMsgs = newMsgs.concat("peter: " + this.props.peterMessage);
    // Fires when the submit button is clicked
    //this.setState({ allMsgs: newMsgs })
    event.preventDefault();
    this.props.setMessages(newMsgs);
    this.props.increment();
  }
  changeHandler(event) {
    // Fires when the input box is updated
    this.setState({ currentMsg: event.target.value })
  }

  clearMsgs = () => {
    this.props.setMessages([]);
    this.props.increment();
  }

  makeItem(itemText, ind) {
    return <Chatline
    deleteItem={this.props.itemDelete}
    description={itemText}
    index={ind}
    />
  }

  render() {
    //let lify = str => (<li> {str} </li>)
    return (<div>
      <ul>
        {this.props.msgs.map((itemText, ind)=> this.makeItem(itemText, ind))} 
      </ul>
      <form onSubmit={this.handleSubmit}>
        <label> Chat message <input value={this.state.currentMsg} onChange={this.changeHandler} type="text" /> </label>
        <input type="submit" value="submit"></input>
        <div>{this.props.counter}</div>
      </form>
      <button onClick={this.props.gotoSettings}>Go to settings page</button>
      <button onClick={this.clearMsgs}>Clear messages</button>
      </div>)

  }
}

export default Chat;
