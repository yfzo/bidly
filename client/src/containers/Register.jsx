import React, {Component} from 'react'; 
import RegisterForm from '../components/RegisterForm.jsx'; 
import '../register.css';

export default class Register extends Component {
    // register = (e) => {
    //   axios.post('/api/register')
    // }
  
    render() {
      return (
        <div>
        <h2>Sign up</h2>
          <RegisterForm />
        </div>
      )
    }
  }