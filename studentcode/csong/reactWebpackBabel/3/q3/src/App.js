import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state={};
  }
  click = () => {
    let inputBoxValue = document.getElementById('box').value;
    console.log(inputBoxValue);
    if (inputBoxValue == 42) {
      alert("You guessed correctly");
    } else 
    alert("Wrong guess. Try again!");
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
