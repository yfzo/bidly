import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import '../styles/NavBar.css';

export default class NavBar extends Component {
  Logout = () => {
    console.log('logout')
    localStorage.clear()
    window.location.href = '/';
  }

  render() {
    //store user specific URL
    const profileUrl = "/users/" + localStorage.getItem('user_id')
    const isLoggedIn = localStorage.getItem('user_id') !== null
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
                  <Button onClick={this.Logout}>Logout</Button>
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