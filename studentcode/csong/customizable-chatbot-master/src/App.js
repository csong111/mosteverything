import React, { Component } from 'react';
import Login from './Login.js'
import Chat from './Chat.js'
import Settings from './Settings.js'
import './App.css';

// There are three different screens. The first screen shown to the user is the login.
let LOGIN_SCREEN = "login"
let CHAT_SCREEN = "chat"
let SETTINGS_SCREEN = "settings"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: LOGIN_SCREEN, // The first screen the user sees is the login screen
      username: "noname",
      botMessage: "interesting",
      peterMessage: "is that so",
      msgs: [],
      counter: 0
    }
  }
  loginFinished = (name) => {
    this.setState({ username: name, screen: CHAT_SCREEN });
  }
  settingsFinished = (name) => {
    let newMsgs = this.state.msgs.map((elem)=> {
      let splitElem = elem.split(":"); 
      if (splitElem[0] === this.state.username) {splitElem[0] = name};
      return splitElem.join(":");
    })
    this.setState({ username: name, screen: CHAT_SCREEN, msgs: newMsgs});
  }

  gotoSettings = () => {
    this.setState({ screen: SETTINGS_SCREEN })
    this.setCounter();
  }
  setBotMessage = (msg) => {
    this.setState({ botMessage: msg })
  }

  setBotTwoMessage = (msg) => {
    this.setState({ peterMessage: msg })
  }

  storeMessages = (mess) => {
   this.setState({msgs: mess}) 
  }

  setCounter = () => {
    this.setState({counter: this.state.counter+1})
  }

  itemDeleter = (i) => {
    let newItems = this.state.msgs.filter((item, ind) => i != ind);
    this.setState({msgs: newItems});
  }


  render() {
    if (this.state.screen === LOGIN_SCREEN)
      return (<Login
        loginSubmit={this.loginFinished} 
        increment={this.setCounter}
        counter={this.state.counter}/>);
    if (this.state.screen === CHAT_SCREEN)
      return (<Chat
        botMessage={this.state.botMessage}
        peterMessage={this.state.peterMessage}
        gotoSettings={this.gotoSettings}
        username={this.state.username} 
        setMessages={this.storeMessages}
        msgs={this.state.msgs}
        increment={this.setCounter}
        counter={this.state.counter}
        itemDelete={this.itemDeleter}
        />);
    if (this.state.screen === SETTINGS_SCREEN)
      return (<Settings
        botMessage={this.state.botMessage}
        peterMessage={this.state.peterMessage}
        username={this.state.username}
        settingsSubmit={this.settingsFinished}
        setBotMessage={this.setBotMessage} 
        setBotTwoMessage={this.setBotTwoMessage}
        increment={this.setCounter}
        counter={this.state.counter}
        />);
  }
}

export default App;
