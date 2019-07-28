import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class NewAuctionForm extends Component {

  submitHandler = (e) => {
    e.preventDefault();

    //convert category name to integer
    const categoryConverter = (category) => {
      switch(category){
        case 'Food':
          return 1;
        case 'Beauty':
          return 2;
        case 'Home stuff':
          return 3;
      }
    }

    const newAuction = {
      category: categoryConverter(e.target.elements['category'].value),
      name: e.target.elements['item_name'].value,
      description: e.target.elements['description'].value,
      image: e.target.elements['image'].value,
      min_bid: e.target.elements['min_bid'].value
    }
    this.props.onSubmit(newAuction)
  }

  render() {
    return (
      <div>
        <Container>
            <Col xs={6} >
              <img></img>
            </Col>
            <Col xs={6}>
              <Form onSubmit={this.submitHandler}>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select">
                  <option>Food</option>
                  <option>Beauty</option>
                  <option>Home stuff</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="item-name">
                <Form.Label>Item name</Form.Label>
                <Form.Control type="string" placeholder="Enter item name" name="item_name"/>
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" name="description"/>
              </Form.Group>
              {/* <Form.Group controlId="formImage"> */}
                {/* <Form.Label>Image upload</Form.Label> */}
                <Form.Group controlId="formPlaintextEmail">
                  <Form.Label className="image_upload"column sm="4">Image URL</Form.Label>
                  <Col sm="8">
                    <Form.Control plaintext readOnly defaultValue={this.props.url} />
                  </Col>
                  <Button onClick={this.props.upload} type="button" placeholder="image" name="image" alt="upload image">
                  Upload Image</Button>
                </Form.Group>
              {/* </Form.Group> */}
              <Form.Group controlId="formMinBid">
                <Form.Label>Set minimum bid price</Form.Label>
                <Form.Control type="money" placeholder="min_bid" name="min_bid"/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              </Form>
            </Col >
        </Container>
      </div>
    )
  }
}