import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Auctions from './containers/Auctions.jsx';
import AuctionDetail from './containers/AuctionDetail.jsx';
import Home from './containers/Home.jsx';
import Login from './containers/Login.jsx';
import Register from './containers/Register.jsx';
import NewAuction from './containers/NewAuction';
import Profile from './containers/Profile';

import Toast from 'react-bootstrap/Toast';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" , loggedIn: true };

  }

  callAPI() {
      fetch("http://localhost:3001")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
      this.callAPI();
      this.socket = new WebSocket('ws://localhost:3001/');
      localStorage.setItem("socket", this.socket);
        this.socket.addEventListener('open', () => {
            console.log('Connected to server');

            const currentUserId = localStorage.getItem("user_id") || "someuser";
            const userInfo = {
              id: currentUserId
            }
            currentUserId && this.socket.send(JSON.stringify(userInfo))
        });
  }

  render() {
    return (
      <Router>
          <Route path="/auctions/:id" component={AuctionDetail} />

        <div className="App">
          <div><NavBar /></div>
          {/* <div><AuctionDetail /></div> */}
          <div
            aria-live="polite"
            aria-atomic="true"
            style={{
              position: 'relative',
              minHeight: '100px',
            }}
          >
            <Toast className="end-notification">
              <Toast.Header>
                {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
                <strong className="mr-auto">Some Auction Name</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>This auction ended. Click to view.</Toast.Body>
            </Toast>
          </div>
          
          <Switch>
            <Route path="/auctions/new" component={NewAuction} />
            <Route path="/auctions" component={Auctions} />
          </Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:id" component={Profile} />
        </div>

      </Router>
    );
  }
}

export default App;
