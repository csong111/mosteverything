import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat.js';

class App extends Component {
  
  render() {
    return (
      <a href=""></a>
      <div style={{display: "flex"}}>
      <Chat person="jWoww" msgs={["can't you try?", "but why not?", "i can't deal with you"]}/><Chat person="Frederic" msgs={["can i join?", "but i want to try with you guys", "just be open-minded.."]}/>
      </div>
    );
  }
}

export default App;
