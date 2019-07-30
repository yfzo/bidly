import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AuctionDetail from '../containers/AuctionDetail.jsx';
import Timer from '../components/Timer.jsx';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { faCoins, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    const auction = this.props.auction;
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    var endTime = auction.end_time;
    var currentTime = Date.now();
    var timeRemaining = endTime - currentTime;
    
    return (
            <Card className="auction-card">
              <Link to={{pathname: '/auctions/' + auction.id, state: { modal: true }}}>
              <Card.Img variant="top" className="auction_image" alt='' src={auction.image} />
              <Card.ImgOverlay className="info auction-timer" >
                {timeRemaining > 0 ? <Timer timeRemaining={timeRemaining}/> : <p><FontAwesomeIcon icon={faClock} className="coin-icon"/> Auction Ended</p>}
              </Card.ImgOverlay>
              <Card.Body>
              <Card.Title className="auction-card-name">{auction.name}</Card.Title>
              <Card.Text>
              <div className="auction-min-bid">
              <FontAwesomeIcon icon={faCoins} className="coin-icon"/> Min. ${this.props.auction && this.props.auction.min_bid}
              </div>
              </Card.Text>
              </Card.Body>
              </Link>
          {/* <Route path="/auctions/:id" component={AuctionDetail} /> */}
          {/* {isModal ? <Route path="/auctions/:id" component={AuctionDetail} /> : null} */}
            </Card>
    )
  }
}