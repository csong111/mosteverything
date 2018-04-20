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
    val = "";
  }

  //makeLi = () => {
   //return this.state.items.map((x) => (<li>{x}</li>));
  //}

  render() {
    var makeLi = item => (<li>{item}</li>);
    return (<div>
      <input type="text" id="inputBox"></input>
      <input type="submit" value="Submit" onClick={this.click}></input>
      <ul>{this.state.items.map(makeLi)}</ul>
    </div>)
  }
}

export default App;
