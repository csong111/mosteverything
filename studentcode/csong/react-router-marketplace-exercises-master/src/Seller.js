import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import App, { items } from './App.js'
import './App.css';

export let sellers = [{
  name: "Jack Frost",
  rating: "5 stars",
  id : 0,
},
{
  name: "Hank Green",
  rating: "2 stars",
  id : 1,
},
{
  name: "René Macaroné",
  rating: "4 stars",
  id : 2,
}
]

let formatSeller = (seller) => {
  return (<div className="card center">
    <div>
      <div>{seller.name}</div>
      <div>{seller.rating}</div>
      <div><Link to={"/items/" + seller.id}> All items by this seller</Link></div>
    </div>
  </div>)
}

class Seller extends Component {
  render() {
    return (
      <div>{formatSeller(sellers[this.props.id])}</div>
    );
  }
}

export default Seller;
