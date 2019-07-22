import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Auctions from './containers/Auctions.jsx';
import AuctionDetail from './containers/AuctionDetail.jsx';
import Home from './containers/Home.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    console.log("blahblah")

  }

  callAPI() {
      fetch("http://localhost:3001/auctions")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
      console.log("blahblah")
      this.callAPI();
      this.socket = new WebSocket('ws://localhost:3001/');
        this.socket.addEventListener('open', () => {
            console.log('Connected to server');
        });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">{this.state.apiResponse}</p>
          <div><NavBar /></div>
          <div><AuctionDetail /></div>
        </div>

        {/* <Route path="/auctions/:id" component={AuctionDetail} /> */}
        {/* <Route path="/login" component={Login} /> */}

      </Router>
    );
  }
}

export default App;
