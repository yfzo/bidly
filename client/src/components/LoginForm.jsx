import React, {Component} from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}></form>
    )
  }
}