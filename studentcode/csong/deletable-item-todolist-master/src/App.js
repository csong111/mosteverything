import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem.js';



class App extends Component {
  constructor() {
    super();
    this.state = { items: [], textEntered: "" }
  }
  handleChange = (event) => {
    this.setState({ textEntered: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ items: this.state.items.concat(this.state.textEntered) })
  }
  itemDeleter = ind => {
    let newItems = this.state.items.filter((item, i) => ind != i); // Removes the element at index ind
    this.setState({ items: newItems });
  }

  itemSwapper = (arr, i, j) => {
    let newArr = arr.slice();
    newArr[i] = arr[j];
    newArr[j] = arr[i];
    this.setState({items: newArr});
    return newArr;
  }

  moveUpper = (arr, i) => {
    let newArr = arr.slice();
    newArr[i-1] = arr[i];
    newArr[i] = arr[i-1];
    this.setState({items: newArr});
    return newArr;
  }

  makeItem = (text, ind) => {
    return (<TodoItem
      deleteItem={this.itemDeleter}
      description={text}
      index={ind}
      swapItem={this.itemSwapper} 
      initialArr={this.state.items}
      elevate={this.moveUpper}
      />
    )
  }

  deleteAll = () => {
    this.setState({items: []});
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.items.map((itemText, index) => this.makeItem(itemText, index))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.textEntered} />
          <input type="submit" />
        </form>
        <button onClick={this.deleteAll}>delete all</button>
      </div>
    );
  }
}

export default App;
