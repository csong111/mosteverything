import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Link } from 'react-router-dom'

export let sellers = [{
  name: "Jack Frost",
  rating: "5 stars",
  sellerId: 0
},
{
  name: "Hank Green",
  rating: "2 stars",
  sellerId: 1
},
{
  name: "Rob Wood",
  rating: "3 stars",
  sellerId: 2
}

]

let formatSeller = (seller) => {
  return (<div className="card center">
    <div>
      <div>{seller.name}</div>
      <div>{seller.rating}</div>
      <Link to={"/allItems/" + seller.sellerId}>All items by this merchant</Link> 
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
