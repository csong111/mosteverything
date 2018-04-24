import React, { Component } from 'react';

class Chatline extends Component {
removeSelf = () => {
    this.props.deleteItem(this.props.index);
} 
render () {
    return (<div>
    <li>{this.props.description}
    <button onClick={this.removeSelf}>remove</button>
    </li>
    </div>)
}
}

export default Chatline;