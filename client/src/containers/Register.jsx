import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm.jsx";
import "../styles/register.css";
import { Redirect } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form_error: false,
      db_error: false,
      redirect: false
    };
  }

  register = (email, password, fName, lName) => {
    if (!email || !password || !fName || !lName) {
      this.setState({ form_error: true });
    } else {
      this.setState({ form_error: false });
      const user = {
        fName,
        lName,
        email,
        password
      };
      let t = this;
      fetch("http://localhost:3001/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => {
          {
            return res.json();
          }
        })
        .then(response => {
          if (!Object.keys(response).length) {
            t.setState({ db_error: true });
          } else {
            localStorage.setItem("user_id", response.user_id);
            t.props.changeState();
            t.setState({ redirect: true });
          }
        })
        .catch(err => {
          console.log("error" + err);
          t.setState({ db_error: true });
        });
    }
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to={"/users/" + localStorage.getItem("user_id")} />;
    }
    return (
      <div className="login-outer-container">
        <RegisterForm
          onSubmit={({ email, password, fName, lName }) => {
            this.register(email, password, fName, lName);
          }}
          filledform={this.state.filledform}
          form_error={this.state.form_error}
          db_error={this.state.db_error}
        />
      </div>
    );
  }
}
