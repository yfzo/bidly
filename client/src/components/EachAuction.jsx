import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AuctionDetail from '../containers/AuctionDetail.jsx';
import Timer from '../components/Timer.jsx';

export default class EachAuction extends Component {
  render() {
    // console.log("Start time for auction", this.props.auction.id, this.props.auction.start_time)
    var currentTime = new Date();
    var minutes = 1;
    var futureTime = currentTime.getTime() + (minutes * 60000)
    var endTime = new Date(futureTime)
    // console.log("original date", currentTime);
    // console.log("end date", endTime);
    var timeRemaining = endTime - currentTime;

    return (
      <div>
        <Link to={'/auctions/' + this.props.auction.id}>
          <div>
            <img alt='' src={this.props.auction.image} />
            <div>{this.props.auction.name}</div>
            <div>This is an auction!</div>
            <Timer timeRemaining={timeRemaining}/>
          </div>
        </Link>
        <Route path="/auctions/:id" component={AuctionDetail} />
      </div>
    )
  }
}