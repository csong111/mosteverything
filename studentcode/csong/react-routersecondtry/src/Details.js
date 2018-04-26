import React, { Component } from 'react';
import './App.css';
import App from './App.js'
import { Route, BrowserRouter, Link } from 'react-router-dom'

export let reviews = [{
  username: "helloitsme",
  review: "worst kombucha starter kit i've ever bought. i can make my own..."
},
{
  username: "wavegoodbye",
  review: "what you see is what you get"
},
{
  username: "tomato_tumahtoe",
  review: "WOW"
},
{
    username: "wavegoodbye",
    review: "i bought it because i wanted it. if you don't like it, then don't buy it."
},
{
    username: "helloitsme",
    review: "whoa whoa whoa"
},
{
    username: "tomato_tumahtoe",
    review: "this is amazing?"
}

]

let formatReviews = (reviewNumbers) => {
    //console.log(reviewNumbers)
    let temp = reviewNumbers.split(',')
    //console.log(temp)
    //console.log(reviews)
    let jsxArr = []
    temp.forEach((elem) => {
        jsxArr.push(<div><li>posted by {reviews[Number(elem)].username}: '{reviews[Number(elem)].review}'</li>
        <Link to={"/allReviews/" + reviews[Number(elem)].username}>All reviews by this user</Link></div>); 
    });
    //console.log(jsxArr)
    return jsxArr;
}

class Details extends Component {
  render() {
    return (<div>
      <div>Reviews about this item: {formatReviews(this.props.reviewList)}</div>
    </div>);
  }
}

export default Details;