import React, {Component} from 'react';
import Bid from '../components/Bid.jsx'; 
import '../modal.css';

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
        .then(() => console.log(this.state.auction));
  }

  componentDidMount() {
      console.log("in auction detail")
      this.callAPI();
  }
  
  bidHandler = (e) => {
    // axios.post('/api/auctions/:id')
  }
  
  back = e => {
    e.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    console.log("This is auction", this.state.auction)
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
          className="modal"
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "10%",
            right: "10%",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          <div>
            <img alt='' src={this.state.auction && this.state.auction.image} />
            <div>{this.state.auction && this.state.auction.name}</div>
            <div>{this.state.auction && this.state.auction.description}</div>
            <div>{this.state.auction && this.state.auction.min_bid}</div>
            <div>{this.state.auction && this.state.auction.start_time}</div>
            <Bid onEnter={(bid_amount) => {
              this.bidHandler(bid_amount) }}/>
          </div>

          <button type="button" onClick={this.back}>
            Close
          </button>
        </div>
      </div>
    )
  }
}