import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class RegisterForm extends Component {
  render () {
  return (
      <Row id="register-form-container">
        <Col xs={6} id="register-img" />
        <Col xs={6} id="register-form" className="align-self-center">
        <Form className="register">
          <h2>Sign up</h2>
          <Form.Group controlId="validationCustom01" className="field">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>

          <Form.Group controlId="validationCustom02" className="field">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Last name" />
          </Form.Group>

          <Form.Group controlId="validationCustom03" className="field">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="field">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="field">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="button">
            Submit
          </Button>
        </Form>
        </Col>
      </Row>
  )
  }
}
