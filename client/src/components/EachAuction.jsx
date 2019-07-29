import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AuctionDetail from '../containers/AuctionDetail.jsx';
import Timer from '../components/Timer.jsx';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import Image from 'react-bootstrap/Image'

export default class EachAuction extends Component {
  constructor(props) {
    super(props);
  }

  back = e => {
    e.stopPropagation();
    this.props.history.goBack();
  };

  async componentDidMount() { 


  }

  render() {
    // console.log(this.props.auction.image)
    const auction = this.props.auction;
    // console.log("This is history", this.props.history)
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    // console.log("This is location from EachAuction", location)
    // console.log("Is modal?", isModal)

    // var currentTime = new Date();
    // var minutes = 1;
    // var futureTime = currentTime.getTime() + (minutes * 60000)
    // var endTime = new Date(futureTime)
    // // console.log("original date", currentTime);
    // // console.log("end date", endTime);
    // var timeRemaining = endTime - currentTime;    
    var endTime = auction.end_time;
    console.log("auction", auction)
    var currentTime = Date.now();
    var timeRemaining = endTime - currentTime;
    console.log("Time remaining:", timeRemaining);
    
    return (
            <Card className="auction-card">
              <Link to={{pathname: '/auctions/' + auction.id, state: { modal: true }}}>
              <Card.Img variant="top" className="auction_image" alt='' src={auction.image} />
              <Card.ImgOverlay className="info">hi</Card.ImgOverlay>
              <Card.Body>
              <Card.Title>{auction.name}</Card.Title>
              <Card.Text>
              {timeRemaining > 0 ? <Timer timeRemaining={timeRemaining}/> : <h4>Auction Ended</h4>}
              </Card.Text>
              </Card.Body>
              </Link>
          {/* <Route path="/auctions/:id" component={AuctionDetail} /> */}
          {/* {isModal ? <Route path="/auctions/:id" component={AuctionDetail} /> : null} */}
            </Card>
    )
  }
}