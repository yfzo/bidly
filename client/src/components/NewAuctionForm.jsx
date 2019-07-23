import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


export default class NewAuctionForm extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={6}>
              <img></img>
            </Col>
            <Col xs={6}>
              <Form onSubmit={this.props.onSubmit}>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>

                
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}