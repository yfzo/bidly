import React, {Component} from 'react'; 

export default class Register extends Component {
    register = (e) => {
      axios.post('/api/register')
    }
  
    render() {
      return (
        <div>
          <RegisterForm onSubmit={this.register} />
        </div>
      )
    }
  }