import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx'; 
import '../styles/login.css';
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
      this.setState({form_error: true})
    } else {
      this.setState({form_error: false})
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
    })
    .then((response) => response.json())
    .then(function(response){
      if(!Object.keys(response).length){
        t.setState({db_error: true})
      } else {
        localStorage.setItem("user_id", response.userid)
        t.props.changeState();
        t.setState({ redirect: true});
      }
    }).catch((err) => {
      console.log('error' + err)
      t.setState({db_error: true})
    })
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
      //  window.location.href = `/users/${localStorage.getItem("user_id")}`;
    }
    return (
      <div class="login-outer-container">
        <LoginForm onSubmit={(email, password) => {
          this.login(email, password) }} 
          filledform={this.state.filledform} 
          form_error={this.state.form_error}
          db_error={this.state.db_error} />
      </div>
    )
  }
}