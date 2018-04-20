import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={firstName: '', lastName: ''};
  }

  resetForm = (event) => {
    this.setState({firstName: '', lastName: ''});
    event.preventDefault();
  }

  handleLast = (event) => {
    this.setState({lastName: event.target.value});
  }

  handleFirst = (event) => {
    this.setState({firstName: event.target.value});
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
        <input type="submit" value="Enter"></input>
        <input type="submit" value="Reset form" onClick={this.resetForm}></input>
        </form>
      </div>
    );
  }
}

export default App;
