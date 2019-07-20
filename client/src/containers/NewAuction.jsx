import React, {Component} from 'react';
import NewAuctionForm from '../components/NewAuctionForm.jsx';

export default class NewAuction extends Component {
    login = (e) => {
      axios.post('/api/auctions/new')
    }
  
    render() {
      return (
        <div>
          <NewAuctionForm />
        </div>
      )
    }
  }