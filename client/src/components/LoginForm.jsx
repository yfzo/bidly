import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'


export default class LoginForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     redirect: false
  //   }
  // }

  loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.elements['email'].value;
    const password = e.target.elements['password'].value;
    this.props.onSubmit(email, password)
    this.setState({ redirect: true});
  }
  render() {
    return (
        <Row style={{marginLeft: "0", marginRight: "0", height: "100%"}} id="login-form-container">
          <Col xs={6} id="login-img" />
          <Col xs={6} id="login-form" className="align-self-center">
        <Form onSubmit={this.loginHandler} id="login-form-inner-container">
          <h2>Sign in</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email"/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"/>
          </Form.Group>
          {this.props.form_error && <Alert variant="danger">Please fill all the fields</Alert>}
          {this.props.db_error && <Alert variant="danger">Email or password is wrong</Alert>}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
        </Row>
    )
  }
}