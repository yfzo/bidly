import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AuctionDetail from '../containers/AuctionDetail.jsx';

export default class EachAuction extends Component {
  constructor(props) {
    super(props);
  }

  back = e => {
    e.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    // console.log(this.props.auction.image)
    const auction = this.props.auction;
    console.log("This is history", this.props.history)
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    console.log("This is location from EachAuction", location)
    console.log("Is modal?", isModal)

    return (
        <div>
          <Link to={{pathname: '/auctions/' + auction.id, state: { modal: true }}}>
            <div>
              <img alt='' src={auction.image} />
              <div>{auction.name}</div>
              <div>This is an auction!</div>
            </div>
          </Link>
          {/* <Route path="/auctions/:id" component={AuctionDetail} /> */}
          {/* {isModal ? <Route path="/auctions/:id" component={AuctionDetail} /> : null} */}
        </div>

      
    )
  }
}