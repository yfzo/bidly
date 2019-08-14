import React, {Component} from 'react';
import RegisterForm from '../components/RegisterForm.jsx';
import '../styles/register.css';
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }

  register = (firstName, lastName, email, password, address) => {
    if (!email || !password || !lastName || !firstName || !address) {
      this.setState({form_error: true})
    } else {
      this.setState({form_error: false})
      const user = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      }
    console.log('reached registration frontend' + email + password)
    let t = this
    fetch("http://localhost:3001/register", {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {"Content-Type": "application/json"},
    })
    .then((response) => response.json())
    .then(function(response){
      if(!Object.keys(response).length){
        t.setState({db_error: true})
      } else {
        // localStorage.setItem("user_id", response.userid)
        // t.props.changeState();
        console.log(response);
        // t.setState({ redirect: true});
      }
    }).catch((err) => {
      console.log('error' + err)
      t.setState({db_error: true})
    })
    }
  }
    render() {
      return (
        <div>
          <RegisterForm onSubmit={(firstName, lastName, email, password, address) => {
          this.register(firstName, lastName, email, password, address) }}
          filledform={this.state.filledform}
          form_error={this.state.form_error}
          db_error={this.state.db_error} />
        </div>
      )
    }
  }