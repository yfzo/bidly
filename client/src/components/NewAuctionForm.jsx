import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import '../styles/newAuction.css';
import AuctionDetail from '../containers/AuctionDetail';

export default class NewAuctionForm extends Component {

  submitHandler = (e) => {
    e.preventDefault();
    const newAuction = {
      category: e.target.elements['category'].value,
      name: e.target.elements['item_name'].value,
      description: e.target.elements['description'].value,
      image: e.target.elements['image'].value,
      min_bid: e.target.elements['min_bid'].value
    }
    this.props.onSubmit(newAuction)
  }

  render() {
    const category_arr = this.props.category && this.props.category
    if(category_arr){
    var showCategory = category_arr.map((cat) => {
        return(
          <option key={cat.id} id={cat.id}>{cat.name}</option>
        )
      })
  }
    return (
      <div id="container">
        <Row style={{marginLeft: "0", marginRight: "0"}} id="new-auction-container">
          <Col xs={4} id="new-auction-img">
            {/* <img src={teacupPic} alt="Assorted-color turkish teacups on table" className="create_auction_img"></img> */}
          </Col>
          <Col xs={8} id="new-auction-form" className="align-self-center">
            <h4>What do you have to offer?</h4>
            <Form onSubmit={this.submitHandler}>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select">
                  {showCategory}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="item-name">
                <Form.Label>Item Name</Form.Label>
                <Form.Control type="string" placeholder="Enter name of your item" name="item_name" />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="...and a description" name="description" />
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Upload an Image</Form.Label>
              </Form.Group>
              <Form.Group controlId="formPlaintextEmail">
                <Col id="upload-thumbnail">
                <Form.Label className="image_upload" column sm="4"></Form.Label>
                  {/* <Form.Control plaintext readOnly defaultValue={this.props.url} /> */}
                </Col>
                <Button onClick={this.props.upload} type="button" placeholder="image" name="image" alt="upload image">
                  Upload Image</Button>
              </Form.Group>
              <Form.Group controlId="formMinBid">
                <Form.Label>Set Minimum Bid Price &#36;</Form.Label>
                <Form.Control type="money" placeholder="...and finally, a minimum bid amount in dollars!" name="min_bid" step="1" />
              </Form.Group>
              {this.props.error && 
          <Alert variant="danger">Please fill in all fields</Alert>}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}