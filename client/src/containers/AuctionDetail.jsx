import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Bid from '../components/Bid.jsx'; 
import '../modal.css';
import leftArrow from '../triangle-left.svg';
import rightArrow from '../triangle-right.svg';
import Timer from '../components/Timer.jsx';

export default class AuctionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      auction: null,
      balance_error: false,
      min_error: false};
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
    if(this.props.match.params.id !== 'new'){
      this.callAPI();
    }
}
  
  bidHandler = (num) => {
    const currentUserId = localStorage.getItem('user_id');
    
    if (currentUserId) {
      //checks if typed value is more than minimum bid
      if(num && num > this.state.auction.min_bid){
        this.setState({min_error: false})
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
        headers: {"Content-Type": "application/json"}
      })
      .then(response => {
        if(response.name == 'error'){
          this.setState({balance_error: true})
        }else {
          this.setState({balance_error: false})
          window.location.href = '/auctions' //redirects to auctions page
        }
      }).catch((err) => 
        console.log(err), //do not remove this console log
        this.setState({balance_error: true})
      )} else {
        this.setState({min_error: true})
      }
    } 
  }
  
  back = e => {
    e.stopPropagation();
    this.props.history.goBack();
  };

  handleOnClick = () => {
    this.setState({redirect: true});
  }

  render() {

    if(this.props.match.params.id === 'new' ){
      return (<React.Fragment></React.Fragment>)
    }

    if (this.state.auction) {
      var endTime = this.state.auction.end_time;
      var currentTime = Date.now();
      var timeRemaining = endTime - currentTime;
      console.log("Time remaining:", timeRemaining);
    }
    
        
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
          <div>
            <img alt='' src={this.state.auction && this.state.auction.image} />
            <div>{this.state.auction && this.state.auction.name}</div>
            <div>{this.state.auction && this.state.auction.description}</div>
            <div>{this.state.auction && this.state.auction.min_bid}</div>
            <div>{this.state.auction && this.state.auction.start_time}</div>
            {timeRemaining > 0 ? <Timer timeRemaining={timeRemaining}/> : <h4>Auction Ended</h4>}
            <Bid onEnter={(bid_amount) => {
              this.bidHandler(bid_amount) }}/>
            {this.state.min_error && <div>Bid more than minimum bid</div>}
            {this.state.balance_error && <div>You do not have enough balance</div>}

          </div>
          

          <button type="button" onClick={this.back}>
            Close
          </button>
        </div>

        <button className="nav-btn prev">
          {/* <span class="octicon octicon-triangle-left"></span> */}
          <img src={leftArrow}></img>
        </button>
        
        {/* {this.state.auction && <Link to={{pathname: '/auctions/' + (this.state.auction.id + 1), state: { modal: true }}}> */}
          <button className="nav-btn next" onClick={() => this.props.history.replace(`/auctions/${this.state.auction.id + 1}`)}>
              {/* <span class="octicon octicon-triangle-right"></span> */}
              <img src={rightArrow}></img>
          </button>
        {/* </Link>} */}

      </div>
    )
  }
}