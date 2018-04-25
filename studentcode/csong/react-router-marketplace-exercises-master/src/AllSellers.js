import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Item from './Item.js'
import App from './App.js'
import './App.css';
import {sellers} from './Seller.js'
console.log(sellers)
class AllSellers extends Component {
    render () {
        var sellersArray = sellers
        var sellersListJSX = sellersArray.map((el)=>{
            return(
                <div><Link to={"/seller/" + el.id}> {el.name} </Link></div>
            )
        })
        return (<div>
            {sellersListJSX}
        </div>)
    }
}

export default AllSellers;