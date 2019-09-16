import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default class RegisterForm extends Component {
  registerHandler = e => {
    e.preventDefault();
    const newUser = {
      fName: e.target.elements["fName"].value,
      lName: e.target.elements["lName"].value,
      email: e.target.elements["email"].value,
      password: e.target.elements["password"].value
    };
    this.props.onSubmit(newUser);
    this.setState({ redirect: true });
  };
  render() {
    return (
      <Row
        style={{ marginLeft: "0", marginRight: "0", height: "100vh" }}
        id="register-form-container"
      >
        <Col xs={6} id="register-img" />
        <Col xs={6} id="register-form" className="align-self-center">
          <Form className="register" onSubmit={this.registerHandler}>
            <h2>Sign up</h2>
            <Form.Group controlId="validationCustom01" className="field">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="First name" name="fName" />
            </Form.Group>

            <Form.Group controlId="validationCustom02" className="field">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Last name" name="lName" />
            </Form.Group>

            <Form.Group controlId="validationCustom03" className="field">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" name="address" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="field">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="field">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>
            {this.props.form_error && <Alert variant="danger">Please fill all the fields</Alert>}
            {this.props.db_error && <Alert variant="danger">Email or password is wrong</Alert>}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
