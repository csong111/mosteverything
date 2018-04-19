import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={sw: true};
  }

  click = () => {
    this.setState({sw: !this.state.sw});
  }

  render() {
    if (this.state.sw == false){
      return (<button onClick= {this.click}>Button1</button>);
    } 
    return (<button onClick={this.click}>Button2</button>);
  }
}

export default App;
