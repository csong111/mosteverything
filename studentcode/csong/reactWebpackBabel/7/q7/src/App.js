import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={timeLeft: 0};
  }
  updateTime = () => {
    this.setState({timeLeft: this.state.timeLeft-1})
    if (this.state.timeLeft === 0){clearInterval(this.interval)};
  }

  startCountDown = () => {
    let inputVal = parseInt(document.getElementById('inputVal').value, 10);
    this.setState({timeLeft: inputVal});
    this.interval=setInterval(this.updateTime, 1000);
  }

  render() {
    return (
      <div>
      <div>{this.state.timeLeft}</div>
      <input type="text" id="inputVal"></input>
      <input type="submit" value="Submit" onClick={this.startCountDown}></input>
      </div>
    );
  }
}

export default App;
