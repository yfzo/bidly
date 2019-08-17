import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import '../styles/NavBar.css';
import jwt from 'jsonwebtoken';

export default class NavBar extends Component {
  Logout = () => {
    console.log('logout')
    localStorage.clear()
    window.location.href = '/';
  }

  verifyToken(token) {
    let theThing = null;
    jwt.verify(token, 'super-secret-sauce', function(err, decoded){
      theThing = decoded;
    })
    return theThing.userId;
  }

  render() {
    //store user specific URL
    const isLoggedIn = localStorage.getItem('user_id') !== null
    let profileUrl = "/users/"
    if (isLoggedIn) {
      profileUrl = "/users/" + this.verifyToken(localStorage.getItem('user_id'))
    }
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <Navbar expand="sm">
              <Navbar.Brand href="/">bidly</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/auctions">Browse Auctions</Nav.Link>
                  <Nav.Link href="/auctions/new">Create auction</Nav.Link>
                  <Nav.Link href={profileUrl}>Profile</Nav.Link>
                  <Nav.Link onClick={this.Logout}>Logout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
          ) : (
            <div>
              <Navbar expand="sm">
                <Navbar.Brand href="/">Bidly</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/auctions">Browse Auctions</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          )
        }
      </div>)
  }
}