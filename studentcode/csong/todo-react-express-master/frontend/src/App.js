import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList.js'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{display:"flex"}}>
        <div style={{marginRight: "100px"}}><ToDoList listName="first"/></div>
        <div style={{marginRight: "100px"}}><ToDoList listName="second"/></div>
        <div><ToDoList listName="third"/></div>
      </div>
    );
  }
}

export default App;
