import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'
import Details from './Details.js'

import './App.css';

class Item extends Component {
  render() {
    return (<div className="card center ">
      <img height="100px" src={this.props.imageLocation} />
      <div> <div>{this.props.description}</div>
        <div>{this.props.price}</div>
        <div>Items in Stock: {this.props.itemsinStock}</div>
        <div><Link to={"/seller/" + this.props.sellerId}> Link to seller </Link></div>
        <div><Link to={"/details/" + this.props.reviewList}> More about this item </Link></div>
      </div>
    </div>)
  }
}

export default Item;