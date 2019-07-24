import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Auctions from '../containers/Auctions.jsx';
import Login from '../containers/Login.jsx';
import Register from '../containers/Register.jsx';
import Home from '../containers/Home.jsx';
import NewAuction from '../containers/NewAuction.jsx';

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div>This is navbar</div>
        <Link to="/">Home</Link>
        <Link to="/auctions">Browse Auctions</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        
        <Route exact path="/auctions" component={Auctions} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
      </div>
    )
  }
}