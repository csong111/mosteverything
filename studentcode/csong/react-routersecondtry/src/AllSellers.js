import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import {sellers} from './Seller.js'

class AllSellers extends Component {
    render() {
        return (
        sellers.map((elem) => {return (<div><Link to={"/seller/" + elem.sellerId}>{elem.name}</Link></div>)})
        )
    }
}

export default AllSellers;