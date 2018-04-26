import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'
import Item from './Item.js'
import Details from './Details.js'
import './App.css';
import AllReviews from './AllReviews.js'
import SellerItems from './SellerItems.js'
import AllSellers from './AllSellers.js'

export let items = [{
  description: "Nice boats. 50% off. wow.",
  price: '$10000',
  image: "boat.png",
  sellerId: 0,
  itemsinStock: 2, 
  reviewList: [4]
},
{
  description: "Lawn chairs",
  price: '$50',
  image: "lawnchair.jpg",
  sellerId: 1,
  itemsinStock: 6,
  reviewList: [1] 
},
{
  description: "Kombucha starter kit",
  price: '$40',
  image: "kombucha.jpg",
  sellerId: 2,
  itemsinStock: 4,
  reviewList: [0]  
},
{
  description: "Carved wooden skull",
  price: '$50',
  image: "skull.jpg",
  sellerId: 1,
  itemsinStock: 1,
  reviewList: [3,2]  
},
{
  description: "Narwhal toy",
  price: '$7.99',
  image: "stuffed.jpg",
  sellerId: 0,
  itemsinStock: 9,
  reviewList: [5]  
}
]

let renderAllItems = () => {
  var arr = items.map(item => (<Item
    price={item.price}
    sellerId={item.sellerId}
    imageLocation={item.image}
    description={item.description}
    itemsinStock={item.itemsinStock}
    reviewList={item.reviewList} />))
    arr.push(<Link to={'/allSellers/'}>All Sellers</Link>)
  return (arr)
}

let renderSeller = routerData => {
  // the .id is the same as the :id from the Route below. 
  // You can give it any name, but they have to match.
  // For example, routerData.match.params.uniqueID would be fine too
  // But you would have to modify the Route below to /seller/:uniqueID
  return (<Seller id={routerData.match.params.id} />)

}

let renderDetails = routerData => {
  return (<Details reviewList={routerData.match.params.reviewList}/>)
}

let renderAllReviews = routerData => {
  return (<AllReviews username={routerData.match.params.username} />)
}

let renderSellerItems = routerData => {
  return (<SellerItems sellerId={routerData.match.params.sellerId}/>)
}

let renderAllSellers = routerData => {
  return (<AllSellers/>)
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={renderAllItems} />
          <Route exact={true} path='/seller/:id' render={renderSeller} />
          <Route exact={true} path='/details/:reviewList' render={renderDetails} />
          <Route exact={true} path='/allReviews/:username' render={renderAllReviews}/>
          <Route exact={true} path='/allItems/:sellerId' render={renderSellerItems}/>
          <Route exact={true} path='/allSellers/' render={renderAllSellers}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
