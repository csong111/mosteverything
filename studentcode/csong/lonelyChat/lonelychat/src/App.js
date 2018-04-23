import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat.js';

class App extends Component {
  constructor () {
    super();
    this.state = {showLeft: true, showRight: true};
  }

  toggleLeft = () => {
    this.setState({showLeft: !this.state.showLeft})
  }

  toggleRight = () => {
    this.setState({showRight: !this.state.showRight})
  }


  render() {
    return (
      <div style={{display: "flex"}}>
      <div style={{display: "block"}}>
      <button onClick={this.toggleLeft}>toggle left</button>
      <button onClick={this.toggleRight}>toggle right</button>
      </div>
      <Chat person="jWoww" msgs={["can't you try?", "but why not?", "i can't deal with you"]} show={this.state.showLeft}/><Chat person="Frederic" msgs={["can i join?", "but i want to try with you guys", "just be open-minded.."]} show={this.state.showRight}/>
      </div>
    );
  }
}

export default App;
