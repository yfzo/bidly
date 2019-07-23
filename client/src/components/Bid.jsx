import React, {Component} from 'react';

export default class Bid extends Component {
  constructor(props) {
    super(props);
    this.state= { 
      showForm: false,
      min_bid: this.props.min_bid
    };
  }
  onClick=(event) => {
    this.setState({ showForm: true });
  }

  BidSubmitHandler = (e) => {
    this.props.onEnter(e.target.elements["bid_amount"].value)
  }
  render () {
    return (
      <div>
        <button type="button" onClick={this.onClick}>Bid</button>
        {this.state.showForm ? 
        <form onSubmit={this.BidSubmitHandler}>
        <label>
          Bid amount:
        </label>
        <input type="money" name="bid_amount" placeholder="Type amount and hit ENTER"/>
        </form>
        : null }
      </div>
    ) 
  }
}