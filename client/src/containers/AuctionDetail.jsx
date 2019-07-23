import React, {Component} from 'react';
import Bid from '../components/Bid.jsx'; 


export default class AuctionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      auction: null,
    };
  }

  callAPI() {
    const path = "http://localhost:3001/auctions/" + this.props.match.params.id;
    fetch(path)
        .then(res => res.json())
        .then(res => this.setState({ auction: res }))
        .then(() => console.log(this.state.auction));
  }

  componentDidMount() {
      this.callAPI();
  }
  
  bidHandler = (num) => {
    if(num && num > this.state.auction.min_bid){
      const newBid = {
        auction_id: this.state.auction.id,
        user_id: 1, //for now
        amount: num
      }
      
    fetch("http://localhost:3001/bids", {
      method: 'POST',
      body: JSON.stringify(newBid), 
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      if(response.ok){
      return response.send()
    } else {
      throw Error(`Request rejected with status ${response.status}`);
    }
    }).then(function(body){
      console.log(body)
    }).catch((err) => console.log('error' + err))
    }
  }
  
  render() {
    return (
      <div>
        <img alt='' src={this.state.auction && this.state.auction.image} />
        <div>{this.state.auction && this.state.auction.name}</div>
        <div>{this.state.auction && this.state.auction.description}</div>
        <div>{this.state.auction && this.state.auction.min_bid}</div>
        <div>{this.state.auction && this.state.auction.start_time}</div>
        <Bid onEnter={(bid_amount) => {
          this.bidHandler(bid_amount) }}/>
      </div>
    )
  }
}