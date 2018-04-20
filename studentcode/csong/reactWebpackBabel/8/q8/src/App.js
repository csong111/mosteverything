import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {currentNumberButtons: 1}
    this.newButtonsCount = 2;
    this.hasBeenClicked=[];
  }
  click = (ind) => {
    this.hasBeenClicked[ind] = true;
    let allHavebeenClicked = true;
    for (let i=0; i < this.state.currentNumberButtons; i++) {
      if (!this.hasBeenClicked[i]) return; //return statement to exit if not all have been clicked
    }
    this.setState({currentNumberButtons: this.state.currentNumberButtons + this.newButtonsCount})
    this.newButtonsCount++ ;
  }

  buttonsElements() {
    let ret = [];
    for (let i = 0; i < currentNumberButtons; i++) {
      ret.push(<button onClick={()=>this.click(i)}>{i}</button>)
    }
    return ret;
  }

  render() {
    return (
      <div className="App">{this.buttonsElements()}</div>
    );
  }
}


export default App;
