import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AuctionDetail from '../containers/AuctionDetail.jsx';

export default class EachAuction extends Component {
  render() {
    // console.log(this.props.auction.image)
    return (
      <div>
        <Link to={'/auctions/' + this.props.auction.id}>
          <div>
            <img alt='' src={this.props.auction.image} />
            <div>{this.props.auction.name}</div>
            <div>This is an auction!</div>
          </div>
        </Link>
        <Route path="/auctions/:id" component={AuctionDetail} />
      </div>
    )
  }
}