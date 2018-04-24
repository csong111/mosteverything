import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = { currentName: "" }
  }
  handleSubmit = (event) => {
    // Gets called when the submit button is clicked
    event.preventDefault();
    this.props.loginSubmit(this.state.currentName);
    this.props.increment();
  }
  changeHandler = (event) => {
    // Gets called when the input box is updated
    this.setState({ currentName: event.target.value })
  }
  render() {
    // An text input box and a submit button
    return (<div><form onSubmit={this.handleSubmit} className="basic-grey">
      <label> Enter your nickname <input value={this.state.currentName} onChange={this.changeHandler} type="text" /> </label>
        <input type="submit" />
        <div>{this.props.counter}</div>
    </form>
    </div>)
      
    }
  }
  
  export default Login;
