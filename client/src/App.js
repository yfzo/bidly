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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" , loggedIn: true };
    // console.log("blahblah")

  }

  callAPI() {
      fetch("http://localhost:3001")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
      // console.log("blahblah")
      this.callAPI();
      this.socket = new WebSocket('ws://localhost:3001/');
        this.socket.addEventListener('open', () => {
            console.log('Connected to server');
        });
  }

  render() {
    // console.log(window.location);
    return (
      <Router>
        <div className="App">
          <div><NavBar /></div>
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/auctions/new" component={NewAuction} />
        <Route exact path="/auctions" component={Auctions} />
        <Route exact path="/auctions/:id" component={AuctionDetail} />
        <Route exact path="/users/:id" component={Profile} />
        </Switch>
        </div>

      </Router>
    );
  }
}

export default App;
