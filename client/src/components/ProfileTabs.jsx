import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class ProfileTabs extends Component {
  render() {
    
    console.log(this.props.user_info);
    return (
      <div>
        <Tabs defaultActiveKey="accountInfo" id="uncontrolled-tab-example">
          <Tab eventKey="accountInfo" title="Account info">
            <Card body className="profile_tabs">
              <p>{this.props.user_info.first_name}</p>
            </Card>
            <Card body className="profile_tabs">
              <p>Email address</p>
            </Card>
            <Card body className="profile_tabs">
              <p>Address</p>
            </Card>
            <Card body className="profile_tabs">
              <Form id="profile_tabs_form">
                <div id="balance">Balance</div>
                  <Button id="profile_tabs_button" variant="primary" type="submit">
                    Topup
                  </Button>
              </Form>
            </Card>
          </Tab>
          <Tab eventKey="myBids" title="My bids">
            <Card body className="profile_tabs">
              <div>Name Bid</div>
            </Card>
            <Card body className="profile_tabs">
              <div>Name Bid</div>
            </Card>
          </Tab>
          <Tab eventKey="myAuctions" title="My auctions">
            <Card body className="profile_tabs">
              <Form id="profile_tabs_form">
                <div id="balance">Auction name</div>
                  <Button id="profile_tabs_button" variant="primary" type="submit">
                    info
                  </Button>
              </Form>
            </Card>
          </Tab>
          <Tab eventKey="notifications" title="Notifications">
            <Card body className="profile_tabs">
              <div>Notification text</div>
            </Card>
          </Tab>
        </Tabs>
      </div>
    )
  }
}