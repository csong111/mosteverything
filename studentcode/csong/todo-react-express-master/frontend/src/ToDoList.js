import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loaded: false,
          items: [],
        }
      }
      
      componentDidMount() {
        // This is called after the first render
        // We don't put fetches in the constructor. Why? Ask Jordan :)
        let bod = JSON.stringify({ln: this.props.listName}); 
        fetch('/items', {
          method: 'POST',
          body: bod
        })
          .then(response => response.text()) // get the HTTP response body
          .then(responseBody => {
            let parsedResponseBody = JSON.parse(responseBody);
            this.setState({ items: parsedResponseBody })
          })
      }
      handleInputChange = event => {
        let inputValue = event.target.value
        this.setState({itemInput: inputValue});
      }
      handleSubmit = event => {
        event.preventDefault();
        //let bodi = JSON.stringify(this.state.itemInput);
        let bod = JSON.stringify({ln: this.props.listName, input: this.state.itemInput}); 
        fetch('/addItem', {
          method: 'POST', // GET is the default method, so this is optional
          body: bod
        })
          .then(response => response.text()) // get the HTTP response body
          .then(responseBody => {
            let parsedResponse = JSON.parse(responseBody);
            // The state only gets updated when the response is received
            this.setState({ items: parsedResponse, itemInput: ''})
          })
      }
      handleReverse = event => {
        event.preventDefault();
        let bod = JSON.stringify({ln: this.props.listName}); 
        fetch('/reverse', {
          method: 'POST',
          body: bod
        })
        .then(res=>res.text())
        .then(resB => {
          let parsedResB = JSON.parse(resB);
          this.setState({items: parsedResB})
        })
      }
      handleDelete = event => {
        event.preventDefault();
        let bod = JSON.stringify({ln: this.props.listName}); 
        fetch('delete', {
          method: 'POST',
          body: bod
        })
        .then(res=>res.text())
        .then(resB => {
          let parsedResB = JSON.parse(resB);
          this.setState({items: parsedResB})
        })
      }
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.itemInput} onChange={this.handleInputChange}></input>
              <input type="submit"></input>
            </form>
            <button onClick={this.handleReverse}>Reverse</button>
            <button onClick={this.handleDelete}>Delete</button>
            <ul>
              {this.state.items.map(item => (<li> {item} </li>))}
            </ul>
          </div>
        );
      }
    }


export default ToDoList;