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
    let t = this
    fetch("http://localhost:3000/login", {
      method: 'POST',
      body: JSON.stringify(user), 
      headers: {"Content-Type": "application/json"},
      // credentials: 'include'
    })
    .then((response) => response.json())
    .then(function(response){
      localStorage.setItem("user_id", response.userid)
      t.props.changeState();
      t.setState({ redirect: true});
    }).catch((err) => console.log('error' + err))
    }
  }

  // componentWillUnmount() {
  //   const socket = localStorage.getItem("socket");
  //   // console.log(`******${!!socket}`)
  //   console.log("socket:", socket)
  //   const currentUserId = localStorage.getItem("user_id") || "someuserfromlogin";
  //   const userInfo = {
  //     id: currentUserId
  //   }
  //   currentUserId && socket.send(JSON.stringify(userInfo))
  // }
  //s 

  render() {
    // console.log(50, this.props)
    // console.log(51, this.state.redirect)
    if (this.state.redirect === true ) {

      console.log(52, "user loggedin!")
      return <Redirect to={'/users/' + localStorage.getItem("user_id")} />
      window.location.href = `/users/${localStorage.getItem("user_id")}`;
      
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