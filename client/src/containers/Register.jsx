import React, {Component} from 'react'; 
import RegisterForm from '../components/RegisterForm.jsx'; 
import '../register.css';

export default class Register extends Component {
  
    render() {
      return (
        <div>
        <h2>Sign up</h2>
          <RegisterForm />
        </div>
      )
    }
  }