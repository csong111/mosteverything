import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Details, { reviews } from './Details.js'


let formatPoster = (name) => {
let filteredReviews = reviews.filter((review) => review.poster === name);
return <div>Reviews by {name}: {filteredReviews.map((reviewItem)=> <li>"{reviewItem.review}"</li>)}</div>
}

class Posted extends Component {
    render () {
        return (
            <div>{formatPoster(this.props.posterName)}</div>
        )
    }
}

export default Posted;






