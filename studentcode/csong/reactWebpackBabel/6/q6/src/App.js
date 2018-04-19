import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={items: []};
  }

  click = () => {
    let val = document.getElementById('inputBox').value;
    this.setState({items: this.state.items.concat(val)});
  }

  makeLi = () => {
   return this.state.items.map((x) => (<li>{x}</li>));
  }

  render() {
    return (<div>
      <input type="text" id="inputBox"></input>
      <input type="submit" value="Submit" onClick={this.click}></input>
      <ul>{this.makeLi()}</ul>
    </div>)
  }
}

export default App;
