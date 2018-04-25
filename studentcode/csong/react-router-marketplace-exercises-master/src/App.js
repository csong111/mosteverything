import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'
import Item from './Item.js'
import Details from './Details.js'
import Posted from './Posted.js'
import ItemsSold from './ItemsSold.js'
import AllSellers from './AllSellers.js'
import './App.css';

export let items = [{
  description: "Nice boats. 50% off. wow.",
  price: '$10000',
  image: "boat.png",
  sellerId: 0,
  quantity: 1,
  listOfReviews : [
    0
  ]
},
{
  description: "Lawn chairs",
  price: '$50',
  image: "lawnchair.jpg",
  sellerId: 1,
  quantity: 1,
  listOfReviews : [
    1,2
  ]
},
{
  description: "Pool noodles",
  price: '$15',
  image: "poolnoodle.jpg",
  sellerId: 1,
  quantity: 10,
  listOfReviews : [
   3,4
  ]
},
{
  description: "Portable liquor cabinet",
  price: '$375',
  image: "cabinet.jpg",
  sellerId: 0,
  quantity: 1,
  listOfReviews : [
    5
  ]
},
{
  description: "Ceci n'est pas une pipe",
  price: '$20',
  image: "pipe.jpg",
  sellerId: 2,
  quantity: 420,
  listOfReviews : [
    6, 7
  ]
},

]

let renderAllItems = () => {
  return items.map(item => (<Item
    price={item.price}
    sellerId={item.sellerId}
    imageLocation={item.image}
    description={item.description}
    quantity={item.quantity}
    listOfReviews={item.listOfReviews} />))
}

let renderSeller = routerData => {
  // the .id is the same as the :id from the Route below. 
  // You can give it any name, but they have to match.
  // For example, routerData.match.params.uniqueID would be fine too
  // But you would have to modify the Route below to /seller/:uniqueID
  return (<Seller id={routerData.match.params.id} />)

}

let renderDetails = (routerData) => {
  return (<Details listOfReviews={routerData.match.params.listOfReviews}/>)
}

let renderPoster = (routerData) => {
  return (<Posted posterName={routerData.match.params.posterName}/>)
}

let renderSoldItems = (routerData) => {
  return (<ItemsSold sellerId={routerData.match.params.sellerId}/>)
}

let renderAllSellers = (routerData) => {
  return (<AllSellers />)
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Link to={'/allsellers'}>All sellers </Link>
          <Route exact={true} path='/' render={renderAllItems} />
          <Route exact={true} path='/seller/:id' render={renderSeller} />
          <Route exact={true} path='/details/:listOfReviews' render={renderDetails} />
          <Route exact={true} path='/poster/:posterName' render={renderPoster}/>
          <Route exact={true} path='/items/:sellerId' render={renderSoldItems}/>
          <Route exact={true} path='/allsellers' render={renderAllSellers}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
