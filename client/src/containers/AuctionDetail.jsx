import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Bid from '../components/Bid.jsx';
import '../styles/modal.css';
import leftArrow from '../triangle-left.svg';
import rightArrow from '../triangle-right.svg';
import Timer from '../components/Timer.jsx';
import { Image } from 'cloudinary-react';


export default class AuctionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auction: null,
      balance_error: false,
      min_error: false,
      imgType: null
    };
    // this.onImgLoad = this.onImgLoad.bind(this);
    // console.log("This is history from details", this.props.history)
  }

  callAPI() {
    const path = "http://localhost:3001/auctions/" + this.props.match.params.id;
    fetch(path)
      .then(res => res.json())
      .then(res => this.setState({ auction: res }))
    // .then(() => console.log(this.state.auction));
  }

  componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      this.callAPI();
    }
  }

  bidHandler = (num) => {
    const currentUserId = localStorage.getItem('user_id');

    if (currentUserId) {
      //checks if typed value is more than minimum bid
      if (num && num > this.state.auction.min_bid) {
        this.setState({ min_error: false })
        const newBid = {
          auction_id: this.state.auction.id,
          user_id: parseInt(currentUserId),
          amount: parseInt(num)
        }

        //post request checks if the balance is enough, 
        // deducts from balance and store in bids table 
        fetch("http://localhost:3001/bids", {
          method: 'POST',
          body: JSON.stringify(newBid),
          headers: { "Content-Type": "application/json" }
        })
          .then(response => {
            if (response.name == 'error') {
              this.setState({ balance_error: true })
            } else {
              this.setState({ balance_error: false })
              window.location.href = '/auctions' //redirects to auctions page
            }
          }).catch((err) =>
            console.log(err), //do not remove this console log
            this.setState({ balance_error: true })
          )
      } else {
        this.setState({ min_error: true })
      }
    }
  }

  back = e => {
    e.stopPropagation();
    this.props.history.goBack();
  };

  handleOnClick = () => {
    this.setState({ redirect: true });
  }

  onImgLoad = ({target:img}) => {
    var height = img.offsetHeight;
    var width = img.offsetWidth;
    console.log('height x width:', height, ',', width)

    if(height > width) {
      this.setState({imgType: "tall-img"});
    } else {
      this.setState({imgType: "wide-img"});
    }
  }

  render() {

    if (this.props.match.params.id === 'new') {
      return (<React.Fragment></React.Fragment>)
    }

    if (this.state.auction) {
      var endTime = this.state.auction.end_time;
      var currentTime = Date.now();
      var timeRemaining = endTime - currentTime;
      console.log("Time remaining:", timeRemaining);
      var isUserAuctioneer = this.state.auction.user_id == localStorage.getItem('user_id')
    }

    var img = new Image();

    img.src = this.state.auction && this.state.auction.image;

    return (
      <div className="modal-container"
        onClick={this.back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          id="modal"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="wrapper-flexbox">
            <div className="modal-image-container">
              <img onLoad={this.onImgLoad} className={this.state.imgType + " modal_image"} alt='' src={img.src} />
            </div>
            <div className="modal-info-container">
              <div className="auction-info">
                <div>{this.state.auction && this.state.auction.name}</div>
                <div>{this.state.auction && this.state.auction.description}</div>
                <div>{this.state.auction && this.state.auction.min_bid}</div>
                <div>{this.state.auction && this.state.auction.start_time}</div>

                {timeRemaining > 0 ? <div><Timer timeRemaining={timeRemaining} />
                  <Bid onEnter={(bid_amount) => {
                    this.bidHandler(bid_amount)
                  }} /></div>
                  : <h4>Auction Ended</h4>}

                {this.state.min_error && <div>Bid more than minimum bid</div>}
                {this.state.balance_error && <div>You do not have enough balance</div>}

              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}