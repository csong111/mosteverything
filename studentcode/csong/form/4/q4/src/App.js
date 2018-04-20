import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state={firstName:'', lastName:''}
  }
  swapFields = (event) => {
    this.setState({firstName: this.state.lastName, lastName: this.state.firstName});
    event.preventDefault();
  }

  resetFields = (event) => {
    this.setState({firstName: '', lastName: ''});
    event.preventDefault();
  }

  handleFirst = (event) => {
    this.setState({firstName: event.target.value});
  }

  handleLast = (event) => {
    this.setState({lastName: event.target.value});
  }

  handleSubmit = (event) => {
    alert('Hello ' + this.state.firstName + ' ' + this.state.lastName);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      First Name:
      <input type="text" value={this.state.firstName} onChange={this.handleFirst}></input>
      Last Name:
      <input type="text" value={this.state.lastName} onChange={this.handleLast}></input>
      {this.state.lastName != '' && this.state.firstName != ''? <input type="submit" value="Submit"></input> : null}
      {this.state.lastName != '' && this.state.firstName != ''? <input type="submit" value="Swap" onClick={this.swapFields}></input> : null}
      {this.state.lastName != '' && this.state.firstName != ''? <input type="submit" value="Reset" onClick={this.resetFields}></input> : null}
      </form>
      </div>
    );
  }
}

export default App;
