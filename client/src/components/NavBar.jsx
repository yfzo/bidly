import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class NavBar extends Component {
  Logout = () => {
    console.log('logout')
    localStorage.clear()
    window.location.href = '/';
  }

  render() {
    return (<div className="NavBar">

    {localStorage.getItem('user_id') !== null ? (
      <div>
        <Link to="/">Home</Link>
        <Link to="/auctions">Browse Auctions</Link>
        <Link to="/auctions/new">Create auction</Link>
        <Link to="/users/:id">Profile</Link>
        <button onClick={this.Logout}>Logout</button>
      </div>
      ) : (
        <div>
        <Link to="/">Home</Link>
        <Link to="/auctions">Browse Auctions</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </div>
      )
    }
      </div>)
  }
}