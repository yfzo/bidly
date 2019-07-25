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
    this.state = { auction: null };
    // console.log("blahblah")
    console.log("This is history from details", this.props.history)
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
      if(num && num > this.state.auction.min_bid){
      const newBid = {
        auction_id: this.state.auction.id,
        user_id: localStorage.getItem('user_id'), //for now
        amount: num
      }
      
      fetch("http://localhost:3001/bids", {
        method: 'POST',
        body: JSON.stringify(newBid), 
        headers: {"Content-Type": "application/json"}
      })
      .then(response => {
        if(response.ok){
        return response.send()
      } else {
        throw Error(`Request rejected with status ${response.status}`);
      }
      }).then(function(body){
        console.log(body)
      }).catch((err) => console.log('error' + err))
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

    // console.log("This is auction", this.state.auction)
    // if (this.state.redirect) {
    //   console.log(`**********/auctions/${this.state.auction.id + 1}`)
    //   return <Redirect push to={`/auctions/${this.state.auction.id + 1}`} />
    // }
        
    if(this.props.match.params.id === 'new'){
      return (<React.Fragment></React.Fragment>)
    }

    var currentTime = new Date();
    var minutes = 1;
    var futureTime = currentTime.getTime() + (minutes * 60000)
    var endTime = new Date(futureTime)
    var timeRemaining = endTime - currentTime;
        
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
            <Timer timeRemaining={timeRemaining} />
            <Bid onEnter={(bid_amount) => {
              this.bidHandler(bid_amount) }}/>
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