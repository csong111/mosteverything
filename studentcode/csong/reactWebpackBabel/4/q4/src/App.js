import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={};
  }

  click = () => {
    let inputButtonValue=document.getElementById('box').value;
    let inputButtonEntered=Math.random();
    if (inputButtonValue == inputButtonEntered) {alert("You guessed correctly");
  }else if (inputButtonValue < inputButtonEntered) {alert("Your guess is too low");
  }else if (inputButtonValue > inputButtonEntered) {alert("Your guess is too high")};
  }

  render() {
    return (
      <form>
      <input type="text" id="box"></input>
      <input type="submit" value="Submit" onClick={this.click}></input>
      </form>
    );
  }
}

export default App;
