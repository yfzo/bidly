import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar.jsx";
import Auctions from "./containers/Auctions.jsx";
import AuctionDetail from "./containers/AuctionDetail.jsx";
import Home from "./containers/Home.jsx";
import Login from "./containers/Login.jsx";
import Register from "./containers/Register.jsx";
import NewAuction from "./containers/NewAuction";
import Profile from "./containers/Profile";
import Notification from "./components/Notification.jsx";
import { Redirect } from "react-router-dom";

import Toast from "react-bootstrap/Toast";

function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (isLoggedIn === true ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      loggedIn: localStorage.getItem("user_id") ? true : false,
      latestNotification: null
    };
  }

  callAPI() {
    fetch("http://localhost:3001")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
    this.socket = new WebSocket("ws://localhost:3001/");
    // localStorage.setItem("socket", this.socket);
    this.socket.addEventListener("open", () => {
      console.log("Connected to server");

      const currentUserId = localStorage.getItem("user_id") || "someuser";
      const userInfo = {
        id: currentUserId
      };
      currentUserId && this.socket.send(JSON.stringify(userInfo));
    });

    this.socket.onmessage = evt => {
      const notification = JSON.parse(evt.data);
      console.log("SOCKET ONMESSAGE REACHED");

      if (notification) {
        console.log("DISPLAY NOTIFICATION:", notification.message);
        this.setNotificationState(notification);
      } else {
        console.log("DIDN'T RECEIVE NOTIFICATION FROM SERVER");
      }
    };
  }

  changeState() {
    this.setState({ loggedIn: true });
  }

  setNotificationState(notification) {
    this.setState({ latestNotification: notification });
  }

  render() {
    return (
      <Router>
        <PrivateRoute
          isLoggedIn={this.state.loggedIn}
          path="/auctions/:id"
          component={AuctionDetail}
        />

        <div className="App">
          <div>
            <NavBar />
          </div>
          {/* <div><AuctionDetail /></div> */}

          {this.state.latestNotification && (
            <Notification notification={this.state.latestNotification} />
          )}

          <Switch>
            <PrivateRoute
              isLoggedIn={this.state.loggedIn}
              path="/auctions/new"
              component={NewAuction}
            />
            <Route path="/auctions" component={Auctions} />
          </Switch>
          <Route path="/login" render={() => <Login changeState={() => this.changeState()} />} />
          <Route
            path="/register"
            render={() => <Register changeState={() => this.changeState()} />}
          />
          <Route exact path="/" component={Home} />

          <PrivateRoute isLoggedIn={this.state.loggedIn} path="/users/:id" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
