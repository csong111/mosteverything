import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={showButton2: true};
  }

  click = () => {
    this.setState({showButton2: !this.state.showButton2});
  }

  render() {
    if (this.state.showButton2 == false){
      return (<button onClick= {this.click}>Button1</button>);
    } 
    return (<button onClick={this.click}>Button2</button>);
  }
}

export default App;
