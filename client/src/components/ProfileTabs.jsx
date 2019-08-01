import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Timer from './Timer.jsx';
import Graph from '../components/Graph.jsx';
import Col from 'react-bootstrap/Col';




export default class ProfileTabs extends Component {
  constructor(props) {
    super(props);
    this.state = { rerender: true}
  }


  render() {


        // const calculateRemaining = ()
    const bids = this.props.data.amounts.map(namedBid => {
    

      // console.log("this is nameBid ", namedBid)
      var status;
      if(namedBid.winner) {
        // console.log("bid user_id:", namedBid.user_id)
        // console.log("auction winner:", namedBid.winner)
        if(namedBid.user_id === namedBid.winner) {
          status = <div>You won this auction!</div>
        } else {
          status = <div>This auction has ended</div>
        }
      } else {
        status = <div>Ongoing</div>
      }
      return (
        <Card body className="profile_tabs">
          <div>{namedBid.name} - {namedBid.amount}</div>
          {status}

        </Card>
      )
    })
    let increment = 0;
    // let totalBidAmount = 0;
    return (
      <div>
        <Tabs className="tabs-wrapper" defaultActiveKey="accountInfo" id="uncontrolled-tab-example">
          <Tab eventKey="accountInfo" title="Account info">
            <Card body className="profile_tabs">
                <p id="icon-user"><i className="fas fa-user"></i></p>
                <p><i className="far fa-address-card"></i><span style={{color: "grey"}}>First name:</span> {this.props.data.first_name}</p>
                <p><i className="far fa-address-card"></i><span style={{color: "grey"}}>Last name:</span> {this.props.data.last_name}</p>
              
                <p><i className="fas fa-at"></i><span style={{color: "grey"}}>Email:</span> {this.props.data.email}</p>
                <Form id="profile_tabs_form">
                <div>
                  <i className="fas fa-hand-holding-usd"></i>
                  <div id="balance"><span style={{color: "grey"}}>Balance:</span> &#36; {this.props.data.balance}</div>
                </div>
                  <Button onClick={this.props.onClick} id="profile_tabs_button" variant="outline-primary" type="submit">
                    Add to Balance
                    </Button>
                </Form>
                <Form id="button-edit">
                  <Button className="button-edit" variant="outline-primary" type="submit">
                    Edit
                    </Button>
                </Form>
              
            </Card>
          </Tab>
          <Tab eventKey="myBids" title="My bids">
            <div id="table">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Auction name</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
                {this.props.data.amounts.map(namedBid => {
                  var status;
                  if(namedBid.winner) {
                    // console.log("bid user_id:", namedBid.user_id)
                    // console.log("auction winner:", namedBid.winner)
                    if(namedBid.user_id === namedBid.winner) {
                      status = <div><i style={{marginRight: "20px"}}  className="fas fa-crown"></i>You won this auction!</div>
                    } else {
                      status = <div><i className="far fa-frown"></i>This auction has ended</div>
                    }
                  } else {
                    status = <div><i className="far fa-clock"></i>Ongoing</div>
                  }
                  return (
                        <tbody style={{borderColor: "grey",
                                      borderWidth: "1px"}}>
                          <tr>
                            <td>{namedBid.name}</td>
                            <td>&#36; {namedBid.amount}</td>
                            <td>{status}</td>
                          </tr>
                        </tbody>
                  )
                })
                }
            </Table>
            </div>
          </Tab> 
            
          <Tab eventKey="myAuctions" title="My auctions">
            <div id="table" className="myAuctionsTable">
              <Accordion>
              <Card id="my-auction">
              <Col id="auction-name" xs={6}><th>Auction name</th></Col>
              <Col id="auction-time" xs={6}><th>Time</th></Col>
              </Card>
                {this.props.data ? this.props.data.auctions.map(auction => {
                  increment++;
                  var endTime = auction.end_time;
                  var currentTime = Date.now();
                  var timeRemaining = endTime - currentTime;
                  
                  return (
                    <Card>
                        <Accordion.Toggle id="my-auction-info" as={Card.Header} eventKey={increment}>
                            <div id="my-auction-info" style={{width: "100%"}}> 
                            <Col id="auction-name" xs={6}><td>{auction.name}</td></Col>
                            <Col id="auction-time" xs={6}><td>{timeRemaining > 0 ? <Timer id="auction-time" timeRemaining={timeRemaining}/> : <td id="auction-time">Auction Ended</td>}</td></Col>  
                            </div>                          
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={increment}>
                          <Card.Body id="toggle">
                            <div className="total_info_container">
                        {this.props.data && <Graph data={this.props.data} auction={auction} className="bar-chart"/>}
                          {this.props.data.auctions_total.map((total) => {
                          if(auction.auctions_table_id == total.id){
                            return <React.Fragment><h4 className="myauction_titles">Total bids</h4> <p>&#36;{total.sum}</p></React.Fragment>
                          }
                          })}
                        </div>
                        <div className="info-container">
                          <h4 className="myauction_titles">Description</h4><p> {auction.description}</p>
                          <h4 className="myauction_titles">Minimum bid</h4><p>&#36; {auction.min_bid}</p>
                          {auction.winner && <div><h4 className="myauction_titles">Winner</h4> <p>{auction.email}</p><p> {auction.first_name} {auction.last_name}</p></div>}
                        </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                  )
                })
                :
                ""
                }
              </Accordion>
            </div>
          </Tab>
          <Tab eventKey="notifications" title="Notifications">
            <div id="table">
              <Table responsive="sm">
                {this.props.data ? this.props.data.notifications.map(notification => {
                  console.log("this is notification " + notification)

                return (
                  <tbody style={{borderColor: "grey",
                                borderWidth: "1px",
                                textAlign: "left"}}>
                    <tr>
                      <td><i className="fas fa-check"></i>{notification.message}</td>
                    </tr>
                  </tbody>
                  )
                })
                :
                ""}
              </Table>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}