import React, {Component} from 'react';

export default class NewAuctionForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}></form>
    )
  }
}