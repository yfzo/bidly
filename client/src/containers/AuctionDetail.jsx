import React, {Component} from 'react';
import Bid from '../components/Bid.jsx'; 
import Timer from '../components/Timer.jsx';

export default class AuctionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { auction: null };
    console.log("blahblah")
  }

  callAPI() {
    const path = "http://localhost:3001/auctions/" + this.props.match.params.id;
    fetch(path)
        .then(res => res.json())
        .then(res => this.setState({ auction: res }))
        .then(() => console.log(this.state.auction));
  }

  componentDidMount() {
      console.log("in auction detail")
      this.callAPI();
  }
  
  bidHandler = (e) => {
    // axios.post('/api/auctions/:id')
  }
  
  render() {
    var currentTime = new Date();
    var minutes = 1;
    var futureTime = currentTime.getTime() + (minutes * 60000)
    var endTime = new Date(futureTime)
    var timeRemaining = endTime - currentTime;
    
    return (
      <div>
        <img alt='' src={this.state.auction && this.state.auction.image} />
        <div>{this.state.auction && this.state.auction.name}</div>
        <div>{this.state.auction && this.state.auction.description}</div>
        <div>{this.state.auction && this.state.auction.min_bid}</div>
        <Timer timeRemaining={timeRemaining} />
        <Bid onEnter={(bid_amount) => {
          this.bidHandler(bid_amount) }}/>
      </div>
    )
  }
}