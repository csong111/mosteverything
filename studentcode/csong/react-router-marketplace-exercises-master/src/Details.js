import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Posted from './Posted.js'
import './App.css';

export let reviews = [{
  poster: "anonymous_loser",
  review: "this is the best."
},
{
  poster: "sweet_summer_child",
  review: "honestly, do not buy this. waste of money."
},
{
  poster: "mac_n_cheese",
  review: "my stepbrother loved it! highly recommended."
},
{
    poster: "randomperson",
    review: "i found it for cheaper on aliexpress... RIPOFF"
},
{
    poster: "anonymous_loser",
    review: "it's ok"
},
{
    poster: "lobsterfest",
    review: "weeeeee!"
},
{
    poster: "sweet_summer_child",
    review: "what you see is what you get."
},
{
    poster: "mac_n_cheese",
    review: "get this for your ex!"
},
]



let formatDetails = (detail) => {
    let deTail = detail.split(',')
    return deTail.map((el)=>{
        return (
        <div className="detail center">
            <div>
                <div>posted by: {reviews[Number(el)].poster}</div>
                <div>"{reviews[Number(el)].review}"</div>
                <div><Link to={"/poster/" + reviews[Number(el)].poster}> All reviews by this poster </Link></div>
            </div>
        </div>
      )
    })
}

class Details extends Component {
  render() {
      //console.log(this.props.listOfReviews)
    return (
      <div style={{textAlign: "center"}}>Reviews: {formatDetails(this.props.listOfReviews)}</div>
    );
  }
}

export default Details;