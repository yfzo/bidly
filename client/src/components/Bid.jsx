import React, {Component} from 'react';

export default class Bid extends Component {
  constructor(props) {
    super(props);
    this.state= { showForm: false };
  }
  onClick=(event) => {
    this.setState({ showForm: true });
  }
  render () {
    return (
      <div>
        <button onClick={this.onClick}>Bid</button>
        {this.state.showForm ? <form onSubmit={this.props.onEnter}></form> : null }
      </div>
    ) 
  }
}