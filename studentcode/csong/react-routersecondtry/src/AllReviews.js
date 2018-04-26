import React, { Component } from 'react';
import './App.css';
import App from './App.js'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Details, { reviews } from './Details.js'

let formatReviews = (name) => {
    let newReviews = reviews.filter((elem) => elem.username === name);
    return <div>Reviews by {name}: {newReviews.map((elem) => <li>'{elem.review}'</li>)}</div>
}

class AllReviews extends Component{
    render() { 
    return (
        <div>{formatReviews(this.props.username)}</div>
    )
    }
}

export default AllReviews;