import React, { Component } from 'react';
import './App.css';
import App, {items}  from './App.js'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Item from './Item.js'

let renderAllItems = (item) => {return (<Item
      price={item.price}
      sellerId={item.sellerId}
      imageLocation={"/"+item.image}
      description={item.description}
      itemsinStock={item.itemsinStock}
      reviewList={item.reviewList} />)}


let formatItems = (id) => {
 let newItems = items.filter((elem) => parseInt(elem.sellerId) === parseInt(id));
 console.log(newItems)
 return newItems.map(renderAllItems)
}



class SellerItems extends Component {
    render() {
        return (
            <div>{formatItems(this.props.sellerId)}</div>
        )
    }
}






export default SellerItems;