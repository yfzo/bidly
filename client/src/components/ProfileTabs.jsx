import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class ProfileTabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="accountInfo" id="uncontrolled-tab-example">
          <Tab eventKey="accountInfo" title="Account info">
            <Card body className="profile_tabs">
              <p>{this.props.data.first_name} {this.props.data.last_name}</p>
            </Card>
            <Card body className="profile_tabs">
              <p>{this.props.data.email}</p>
            </Card>
            <Card body className="profile_tabs">
              <Form id="profile_tabs_form">
                <div id="balance">{this.props.data.balance}</div>
                <Button onClick={this.props.onClick} id="profile_tabs_button" variant="primary" type="submit">
                  Topup
                  </Button>
              </Form>
            </Card>
          </Tab>
          <Tab eventKey="myBids" title="My bids">
            {this.props.data ? this.props.data.amounts.map(namedBid => {
              console.log("this is nameBid " + namedBid)

              return (
                <Card body className="profile_tabs">

                  <div>{namedBid.name} - {namedBid.amount}</div>

                </Card>
              )
            })
              :
              ""}
          </Tab>
          <Tab eventKey="myAuctions" title="My auctions">

            {this.props.data ? this.props.data.auctions.map(auction => {

              return (
                <Card body >
                  <Form>
                    <div id="button_auction_wrapper">
                      <div id="auction_name_wrapper" >{auction.name}</div>
                      <Button id="profile_tabs_button" key={auction.id} variant="primary" type="submit">
                        <Link to={'/auctions/' + auction.id} id="profile_tabs_link">Info</Link>
                      </Button>
                    </div>
                  </Form>
                </Card>
              )
            })
              :
              ""}

          </Tab>
          <Tab eventKey="notifications" title="Notifications">
            {this.props.data ? this.props.data.notifications.map(notification => {
              console.log("this is notification " + notification)

              return (
                <Card body className="profile_tabs">

                  <div>{notification.message}</div>

                </Card>
              )
            })
              :
              ""}
          </Tab>
        </Tabs>
      </div>
    )
  }
}