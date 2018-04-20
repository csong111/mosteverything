import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state={firstName:'', lastName:'', fieldsFilled: false};
  }

  clearForm = (event) => {
    this.setState({firstName:'', lastName:'', fieldsFilled: false});
    event.preventDefault();
  }

  handleLast = (event) => {
    this.setState({lastName: event.target.value});
    if (this.state.lastName != '' && this.state.firstName != ''){
      this.setState({fieldsFilled: true});}
  }

  handleFirst = (event) => {
    this.setState({firstName: event.target.value});
  }

  handleSubmit = (event) => {
      alert('Hello ' + this.state.firstName + ' '  + this.state.lastName);
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
        {this.state.fieldsFilled ? <input type="submit" value="Submit"></input> : null}
        {this.state.fieldsFilled ? <input type="submit" value="Reset" onClick={this.clearForm}></input> : null}
      </form>
      </div>
    );
  }
}

export default App;
