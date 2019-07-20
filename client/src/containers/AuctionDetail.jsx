import React, {Component} from 'react';
import Bid from '../components/Bid.jsx'; 

export default class AuctionDetail extends Component {
    bidHandler = (e) => {
      axios.post('/api/auctions/:id')
    }
  
    render() {
      return (
        <div>
          <Bid onEnter={(bid_amount) => {
            this.bidHandler(bid_amount) }}/>
        </div>
      )
    }
  }