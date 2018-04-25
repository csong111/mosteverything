import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Details, { reviews } from './Details.js'
import Item from './Item.js'
import Seller from './Seller.js'
import App, { items } from './App.js'


let renderAllItems = () => {
    return items.map(item => (<Item
      price={item.price}
      sellerId={item.sellerId}
      imageLocation={item.image}
      description={item.description}
      quantity={item.quantity}
      listOfReviews={item.listOfReviews} />))
  }

class ItemsSold extends Component {
    render() {
        //console.log(this.props)
        //console.log(items)
        var filteredItems = items.filter((el,id)=>{return (Number(el.sellerId) === Number(this.props.sellerId))})
        //console.log(filteredItems)
        var filteredItemsJSX = filteredItems.map(item => (<Item
            price={item.price}
            sellerId={item.sellerId}
            imageLocation={item.image}
            description={item.description}
            quantity={item.quantity}
            listOfReviews={item.listOfReviews} />))
        
        return (
            <div>{filteredItemsJSX}</div>
        )
    }
}

export default ItemsSold;