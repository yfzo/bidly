import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx'; 
import '../login.css';
import { Redirect } from 'react-router-dom';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }

  login = (email, password) => {
    if (!email || !password) {
      console.log('no info')
    } else {
      const user = {
        email: email,
        password: password,
      }
    console.log('reached login frontend' + email + password)
    fetch("http://localhost:3000/login", {
      method: 'POST',
      body: JSON.stringify(user), 
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
      if(response.ok){
        return response.json()
      } else {
        throw Error(`Request rejected with status ${response.status}`);
      }
    }).then(function(body){
      console.log(body)
    }).catch((err) => console.log('error' + err))

    this.setState({ redirect: true});
    }
  }

  render() {
    if (this.state.redirect == true ) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <h2>Sign in</h2>
        <LoginForm onSubmit={(email, password) => {
          this.login(email, password) }} filledform={this.state.filledform} />
      </div>
    )
  }
}