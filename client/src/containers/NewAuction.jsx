import React, {Component} from 'react';
import NewAuctionForm from '../components/NewAuctionForm.jsx';

export default class NewAuction extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" , loggedIn: true };
    console.log("blahblah")

  }

  callAPI() {
      fetch("http://localhost:3001/auctions/new")
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
        <div>
          
          <NewAuctionForm />
        </div>
      )
    }
  }