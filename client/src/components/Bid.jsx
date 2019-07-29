import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    e.preventDefault();
    this.props.onEnter(e.target.elements["bid_amount"].value)
  }
  render () {
    return (
      <div>
        <div>
          <Button variant="light" size="lg" block onClick={this.onClick}>
            Make Bid
          </Button>
        </div>
        {this.state.showForm ? 
        // <form onSubmit={this.BidSubmitHandler}>
        // <label className="bid-label">
        //   How much would you like to bid?
        // </label>
        // <input type="money" name="bid_amount" placeholder="Type amount and hit ENTER"/>
        // </form>
        <Form onSubmit={this.BidSubmitHandler}>
          <Form.Group controlId="bidInput">
            <Form.Label className="bid-label">How much would you like to bid?</Form.Label>
            <Form.Control className="bid-input" type="money" name="bid_amount" placeholder="Hit enter to submit" />
          </Form.Group>
        </Form>
        : null }
        
      </div>
    ) 
  }
}