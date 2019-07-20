import React, {Component} from 'react';

export default class RegisterForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}></form>
    )
  }
}