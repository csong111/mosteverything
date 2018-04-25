import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'
import Details from './Details.js'

import './App.css';

class Item extends Component {
  render() {
    console.log(this.props.imageLocation)
    return (<div className="card center ">
      <img height="100px" src={"http://localhost:3000/"+this.props.imageLocation} />
      <div> <div>{this.props.description}</div>
        <div>{this.props.price}</div>
        <div>Remaining items: {this.props.quantity}</div>
        <div><Link to={"/seller/" + this.props.sellerId}> Link to seller </Link></div>
        <div><Link to={"/details/" + this.props.listOfReviews}> Item details </Link></div>
      </div>
    </div>)
  }
}

export default Item;