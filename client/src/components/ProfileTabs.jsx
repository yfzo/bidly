import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class ProfileTabs extends Component {
  constructor(props) {
    super(props);
    redirect: false
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <Tabs defaultActiveKey="accountInfo" id="uncontrolled-tab-example">
          <Tab eventKey="accountInfo" title="Account info">
            <Card body className="profile_tabs">
              <p>{this.props.data.first_name}{this.props.data.last_name}</p>
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
            <Card body className="profile_tabs">
              <div>{this.props.data.name} - {this.props.data.amount}</div>
            </Card>
          </Tab>
          <Tab eventKey="myAuctions" title="My auctions">
            <Card body className="profile_tabs">
              <Form id="profile_tabs_form">
                <div id="balance">{this.props.data.name}</div>
                <Button id="profile_tabs_button" variant="primary" type="submit"><Link to={{pathname: '/auctions/' + this.props.data.auc_id, state: { modal: true }}} id="profile_tabs_link" >Info</Link></Button>
              </Form>
            </Card>
          </Tab>
          <Tab eventKey="notifications" title="Notifications">
            <Card body className="profile_tabs">
              <div></div>
            </Card>
          </Tab>
        </Tabs>
      </div>
    )
  }
}