import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component {
  constructor () {
    super();
    this.state={highlighted: false};
  }
  removeSelf = () => {
    this.props.deleteItem(this.props.index);  
  }

  highlightSelf = () => {
    this.setState({highlighted: true});
  }

  swapElements = () => {
    this.props.swapItem(this.props.initialArr, 0, this.props.index);
   }

   shiftUp = () => {
    this.props.elevate(this.props.initialArr, this.props.index);
   }

  render() { 
    return (
      <li style={this.state.highlighted ? {color: "red"} : {}}>
        {this.props.description}
        <button onClick={this.removeSelf} style={{marginLeft: "20px"}}>
          delete
          </button>
        <button onClick={this.highlightSelf}>highlight</button>
        <button onClick={this.swapElements}>move to top</button>
        {this.props.index !== 0 ? <button onClick={this.shiftUp}>move up one spot</button> : null}
      </li>
    );
  }
}

export default TodoItem;
