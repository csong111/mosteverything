import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      msgs: [],
      input: '',
      loggedIn: false,
      name: '',
      accountExists: false,
      passwordWrong: false,
      sessionID: '',
      missingSignUp: false,
      badSignIn: false
    }
  }

  componentDidMount = () => {
    setInterval(this.getMsgs, 500);
  }

  getMsgs = () => {
    let body = JSON.stringify({sessionID: this.state.sessionID})
    let cb = (respB) => {
      let parsedB = JSON.parse(respB)
      if(parsedB !== 'fail') this.setState({msgs: parsedB});
    }
    fetch ('/getMsgs', {
      method: 'POST',
      body: body
    }).then(resp => resp.text())
      .then(cb)
  }

  handleLogin = (event) => {
    event.preventDefault();
    let body = JSON.stringify({name: this.state.nameInput, pw: this.state.pwInput})
    let cb = (resB) => {
      let parsed = JSON.parse(resB)
      if (parsed === 'Incorrect credentials') this.setState({badSignIn: true})
      else if (parsed === 'login failed') this.setState({passwordWrong: true})
      else this.setState({loggedIn: true, name: this.state.nameInput, sessionID: parsed})
    }
    fetch ('/signin', {
      method: 'POST',
      body: body
    }).then(res=>res.text())
      .then(cb)
  }

  handleName = (event) => {
    this.setState({nameInput: event.target.value})
  }

  handlePW = (event) => {
    this.setState({pwInput: event.target.value})
  }

  handleNewPW = (event) => {
    this.setState({pw: event.target.value})
  }

  handleNewName = (event) => {
    this.setState({name: event.target.value})
  }

  signUp = (event) => {
    event.preventDefault();
    let body = JSON.stringify({name: this.state.name, pw: this.state.pw})
    let cb = (resB) => {
      let parsed = JSON.parse(resB)
      if (parsed === 'Please sign up before continuing') this.setState({missingSignUp: true})
      else if (parsed === 'account already created') this.setState({accountExists: true})
      else this.setState({loggedIn: true, sessionID: parsed})
      }
    fetch('/signup', {
      method: 'POST',
      body: body
    }).then(res=> res.text())
      .then(cb)
  }

  askLogin = () => {
    return (
      <div>
        Sign Up: <form onSubmit={this.signUp}>
        <input type="text" value={this.state.name} onChange={this.handleNewName} placeholder="set username"/>
        <input type="password" value={this.state.pw} onChange={this.handleNewPW} placeholder="set password"/>
        <input type="submit"/> 
        {this.state.accountExists? " Account already exists": null}
        {this.state.missingSignUp? " Please sign up...": null}
        </form> 
        Log In: <form onSubmit={this.handleLogin}>
        <input type="text" value={this.state.nameInput} onChange={this.handleName} placeholder="enter your username"/>
        <input type="password" value={this.state.pwInput} onChange={this.handlePW} placeholder="enter your password"/>
        <input type="submit"/> 
        {this.state.passwordWrong? " Wrong password - try again": null}
        {this.state.badSignIn? " Please enter credentials.": null}
        </form> 
      </div>
    )
  }

  handleInput = (event) => {
    this.setState({input: event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    let body = JSON.stringify({sessionID: this.state.sessionID, input: this.state.input})
    let cb = (respB) => {
      console.log(respB)
      let parsedB = JSON.parse(respB)
      if (typeof(parsedB) === 'string') console.log(parsedB)
      else this.setState({msgs: parsedB, input: ''})
    }
    fetch('/updateMsgs', {
      method: 'POST',
      body: body
    }).then(resp => resp.text())
      .then(cb)
  }

  render() {
    if (!this.state.loggedIn) return this.askLogin();
    else return (
      <div className="App">
      <div className="msgs">
      <ul style={{listStyleType: 'none'}}>
        {this.state.msgs.map((item) => <li>{item.username}: {item.content}</li>)}
      </ul>
      </div>
        <div className="chat">
          <form onSubmit = {this.handleSubmit}>
            <input type="text" value={this.state.input} onChange={this.handleInput} placeholder="your message"/>
            <input type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
