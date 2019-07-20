import React, {Component} from 'react';

export default class EachAuction extends Component {
  render() {
    return (
      <div>
        <img alt='' src={this.props.auction.image} />
        <div>{this.props.auction.name}</div>
        <div>This is an auction!</div>
      </div>
    )
  }
}