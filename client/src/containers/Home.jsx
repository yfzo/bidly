import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import '../styles/home.css';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import background from '../images/header.jpg'
import FadeIn from '../styles/fadein.js'
import styled, {keyframes} from 'styled-components';
import Table from 'react-bootstrap/Table'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      redirect: false
    }
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ redirect: true});
    console.log("redirect to register page");
  }

  
    render() {
      if (this.state.redirect == true ) {
        return <Redirect to='/register' />
      }
      const profileUrl = "users/" + localStorage.getItem('user_id')
      const isLoggedIn = localStorage.getItem('user_id') !== null

      //animation
      const Fade = styled.div`
      animation: ${FadeIn} 2s linear infinite;
      `
      return (
        <div>
            <div className="home">
            <CardGroup>
              <Card className="home">
              <Card.Img className="background_img" variant="top" src={background} alt=""/>
              <div class="shade"></div>
              <Card.ImgOverlay>
                {/* <Fade> */}
                <Card.Title className="title-logo">
                  Bidly
                </Card.Title>
                {/* </Fade> */}
                <Card.Body className="header-body"> 
                  <h3>Looking for something? 
                  <span> (and fun?)</span></h3>
                </Card.Body>
                <ButtonToolbar className="howToContainer">
                <AnchorLink href="#howToPlay"><Button id="howToButton" variant="outline-primary" >See how to use</Button>    </AnchorLink>
                </ButtonToolbar>
              </Card.ImgOverlay>
              </Card>
              </CardGroup>
              {/* <section className="section-steps"> */}
                <h4 id="howToPlay" className="howToTitle">How to play Bidly</h4>
              <CardDeck className="steps-container">
                <Card className="step-1">
                  <Card.Body>
                    <Card.Title className="step-titles">Step 1</Card.Title>
                    <Card.Text>
                    Register/Login to bid or create an auction
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title className="step-titles">Step 2</Card.Title>
                    <Card.Text>
                    Make a bid and wait until the end...
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title className="step-titles">Step 3</Card.Title>
                    <Card.Text>
                      Go to Profile page and see result!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
              <h4 className="howToTitle">Rules</h4>
              <CardDeck>
                <Card className="step-1">
                  <Card.Body>
                    <Card.Title className="step-titles">What is Bidly?</Card.Title>
                    <Card.Text>
                      <div>Bidly is a strategy game based auction app that allows users to auction off items they no longer need and acquire items for a low price. 
                        Bidly is a unique bid auction where bidders are not shown bids made by other users. 
                        The winner of an auction is decided by the lowest unique bid at the time the auction ends.</div>
                      <ul>
                        <li>What is unique bid auction?</li>
                        <li>A type of auctions that the lowest unique bidder wins</li>
                        <li>What is the benefit for the Auctioneer?</li>
                        <li>Auctioneer will take all the bids</li>
                        <li>What if there is no unique bids?</li>
                        <li>The winner will be picked randomly from pool of winners</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="example">
                  <Card.Body>
                  <Card.Title className="step-titles">Example</Card.Title>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Value</th>
                        <th>Number of Bids</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$1</td>
                        <td>3</td>
                        <td></td>
                      </tr>
                      <tr className="winner" style={{background: 'rgb(255,192,203, 0.9)'}}>
                        <td>$2</td>
                        <td>1</td>
                        <td>Winner!</td>
                      </tr>
                      <tr>
                        <td>$3</td>
                        <td>2</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>$3</td>
                        <td>1</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                    <Card.Text>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
              {/* </section> */}
              {isLoggedIn ? (
              <ButtonToolbar className="buttonContainer">              
                <Button id="homeBrowseButton" variant="outline-primary"><Link to="/auctions" id="homeBrowseLink">Browse Auctions</Link></Button>
              </ButtonToolbar>) 
              : 
              (
              <ButtonToolbar className="buttonContainer">
                <Button id="homeBrowseButton" variant="outline-primary"><Link to="/auctions" id="homeBrowseLink">Browse Auctions</Link></Button>
                <Button onClick={this.onClick} className="signup" variant="outline-primary">Sign up</Button>
              </ButtonToolbar>)}
              <footer>
              </footer>
              </div>
        </div>)
    }
  }