import React, {Component} from 'react';
import LoginForm from '../components/LoginForm.jsx'; 

export default class Login extends Component {
  login = (e) => {
    axios.post('/api/login')
  }

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.login} />
      </div>
    )
  }
}