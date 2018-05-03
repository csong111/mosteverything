import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      msgs: [],
      name: '',
      input: '',
      nameExists: false
    }
  }

  componentDidMount = () => {
    setInterval(this.getMsgs, 500);
  }

  getMsgs = () => {
    let body = JSON.stringify({name: this.state.name, input: this.state.input})
    let cb = (respB) => {
      let parsedB = JSON.parse(respB)
      console.log(respB)
      this.setState({msgs: parsedB})
    }
    fetch ('/getMsgs', {
      method: 'POST',
      body: body
    }).then(resp => resp.text())
      .then(cb)
  }

  setName = (event) => {
    this.setState({nameExists: true})
  }

  handleName = (event) => {
    this.setState({name: event.target.value})
  }

  askUsername = () => {
    return (
      <div>
        <form onSubmit={this.setName}>
        <input type="text" value={this.state.name} onChange={this.handleName} placeholder="choose your username"/>
        <input type="submit"/>
        </form> 
      </div>
    )
  }

  handleInput = (event) => {
    this.setState({input: event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    let body = JSON.stringify({name: this.state.name, input: this.state.input})
    let cb = (respB) => {
      let parsedB = JSON.parse(respB)
      this.setState({msgs: parsedB, input: ''})
    }
    fetch('/updateMsgs', {
      method: 'POST',
      body: body
    }).then(resp => resp.text())
      .then(cb)
  }

  render() {
    if (!this.state.nameExists) { 
      return this.askUsername();
    } else return (
      <div className="App">
      <div className="msgs">
      <ul style={{listStyleType: 'none'}}>
        {this.state.msgs.map((item) => <li>{this.state.name}: {item}</li>)}
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
