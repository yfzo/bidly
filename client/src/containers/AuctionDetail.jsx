import React, {Component} from 'react';
import Bid from '../components/Bid.jsx'; 

export default class AuctionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      auction: null,
    };
    console.log("blahblah")
  }

  callAPI() {
      fetch("http://localhost:3001/auctions/1")
          .then(res => res.json())
          .then(res => this.setState({ auction: res.auctions[this.props.match.params.id] }))
          .then(() => console.log(this.props.match.params.id))
  }

  componentDidMount() {
      this.callAPI();
  }
  
  bidHandler = (e) => {
    if(e && e > this.state.auction.min_bid){
      const newBid = {
        auction_id: this.state.auction.id,
        // user_id: ,
        amount: e
      }
    // fetch("http://localhost:3001/bids")
    //   .then(res.send(newBid))
    
    }

    console.log(e)

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