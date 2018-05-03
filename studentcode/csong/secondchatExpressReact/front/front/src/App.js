import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state={
      inputM: '',
      username: '',
      msgs: [],
      usernameSet: false
    }
  }

  componentDidMount = () => {
    setInterval(this.handleMsgs, 500)
  }

  handleUserName = () => {
    this.setState({usernameSet: true})
  }

  handleName = (event) => {
    this.setState({username: event.target.value})
  }

  askUserName = () => {
    return (
      <div>
        <form onSubmit={this.handleUserName}>
          <input type="text" value={this.state.username} onChange={this.handleName}/>
          <input type="submit"/>
        </form>
      </div>  
    )
  } 

  handleMsgs = () => {
    let body = JSON.stringify({username: this.state.username, inputM: this.state.inputM})
    let cb = (resB) => {
      let parsedR = JSON.parse(resB)
      this.setState({msgs: parsedR})
    }
    fetch('/messages', {
      method: 'POST',
      body: body
    }).then(res=>res.text())
      .then(cb)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let body = JSON.stringify({inputM: this.state.inputM, username: this.state.username})
    let cb = (resB) => {
      let parsedR = JSON.parse(resB);
      this.setState({msgs: parsedR, inputM: ''})
    }
    fetch('/submit', {
      method: 'POST',
      body: body
    }).then(res=>res.text())
      .then(cb)
  }

  handleTyping = (event) => {
    this.setState({inputM: event.target.value})
  }

  render() {
    if (!this.state.usernameSet) return this.askUserName()
    else return (
      <div className="App">
      <div>
        <ul style={{listStyleType: 'none'}}>
          {this.state.msgs.map((el) => <li>{this.state.username}: {el}</li>)}
        </ul>
      </div>
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.inputM} placeholder="enter your message" onChange={this.handleTyping}/>
        <input type="submit"/>
        </form>
      </div>
      </div>
    );
  }
}

export default App;
