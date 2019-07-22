import React, {Component} from 'react';
import LoginForm from '../components/LoginForm.jsx'; 

export default class Login extends Component {
  login = (e) => {
    axios.post('/api/login')
  }

  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <LoginForm onSubmit={this.login} />
      </div>
    )
  }
}