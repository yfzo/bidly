import React, {Component} from 'react'; 
import RegisterForm from '../components/RegisterForm.jsx'; 
import '../styles/register.css';

export default class Register extends Component {
  
    render() {
      return (
        <div>
          <RegisterForm />
        </div>
      )
    }
  }