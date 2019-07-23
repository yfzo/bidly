import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div>This is navbar</div>
        <Link to="/">Home</Link>
        <Link to="/auctions">Browse Auctions</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    )
  }
}