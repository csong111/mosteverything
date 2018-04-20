import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {value: '', val: ''};
  }
 
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleMore = (event) => {
    this.setState({val: event.target.value});
  }

  handleSubmit = (event) => {
    alert('Hello ' + this.state.value + ' ' + this.state.val);
    event.preventDefault();
  }
 
  render = () => {
    return (<div>
      <form onSubmit={this.handleSubmit}>
      First Name:
      <input type="text" value={this.state.value} onChange={this.handleChange}></input>
      Last Name:
      <input type="text" value={this.state.val} onChange={this.handleMore}></input>
      <input type="submit" value="Submit"></input>
      </form>
      </div>
    );
  }
}

export default App;
