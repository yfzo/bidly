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
import Table from 'react-bootstrap/Table';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import step1_svg from '../images/undraw_editable_dywm.svg';
import step2_svg from '../images/undraw_Books_l33t.svg'
import step3_svg from '../images/undraw_winners_ao2o.svg'


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
                  <h3>Bid low. Earn more.</h3>
                  <h4>An exciting new way to buy and sell online</h4>
                  <ButtonToolbar className="howToContainer">
                    <AnchorLink href="#howToPlay"><Button id="howToButton" variant="outline-primary" size="lg">Learn More</Button></AnchorLink>
                  </ButtonToolbar>
                </Card.Body>
              </Card.ImgOverlay>
              </Card>
              </CardGroup>
              {/* <section className="section-steps"> */}
                <h4 id="howToPlay" className="howToTitle">How do I Use Bidly?</h4>
              <CardDeck className="steps-container">
                <Card className="step-1 home-info-card">
                  <Card.Body>
                    <Card.Title className="step-titles">Step 1</Card.Title>
                    <Card.Img className="step-img step-img-1" variant="top" src={step1_svg} />
                    <Card.Text className="step-card-class">
                      <p>Do you have something you would like someone to take out of your hands? Are you a creator looking to offer your creations on an interesting and exciting new platform?</p>
                      <p>Create a new auction and put it up for bids!</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="home-info-card">
                  <Card.Body>
                    <Card.Title className="step-titles">Step 2</Card.Title>
                    <Card.Img className="step-img" variant="top" src={step2_svg} />
                    <Card.Text className="step-card-class">
                      <p>While you're waiting for your auction to end (or if you're just interested in buying and bidding), take a look around and see what others have to offer!</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="home-info-card">
                  <Card.Body>
                    <Card.Title className="step-titles">Step 3</Card.Title>
                    <Card.Img className="step-img" variant="top" src={step3_svg} />
                    <Card.Text className="step-card-class">
                      <p>Profit!</p>
                      <ul className="step-three-list">
                        <li>See who won your auction and ship it off</li>
                        <li>Check which auctions you won yourself</li>
                        <li>Enjoy your profits and newfound goodies!</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
              <h3 className="howToTitle more-bidly-info-title">Alright, but what is Bidly? How is it different from other auctioning sites?</h3>
              <CardDeck className="more-info-container">
                <Card className="step-1 home-info-card">
                  <Card.Body>
                    <Card.Title className="step-titles">What is Bidly? & F.A.Q.</Card.Title>
                    <Card.Text className="home-info-faq">
                      <div className="bidly-info-description">Bidly is a strategy game based auction app that allows users to buy and sell items with low risk and high reward. 
                        By utilizing the concept of a unique bid auction, buyers are able to obtain items at an otherwise impossible price.
                      </div>
                      <ol className="faq">
                        <li className="faq-qa">
                          <div className="faq-q">What is a unique bid auction?</div>
                          <div>In a unique bid auction, winners are decided by whoever has the lowest(or highest) unique bid. For Bidly, we are using the lowest unique bid model, because we don't want our users to shell out an arm or leg in a "no guarantee" style auction.</div>
                        </li>
                        <li className="faq-qa">
                          <div className="faq-q">Lowest unique bid..?</div>
                          <div>That's the lowest bid, made a single person, just once. See our example to see how it works.</div>
                        </li>
                        <li className="faq-qa">
                          <div className="faq-q">Wait what? Who would want to sell their things for the least amount of money? What's in it for the auctioneer?</div>
                          <div>No worries, we're looking out for our sellers too. Auctioneers get to keep ALL of the bids made by bidders.</div>
                        </li>
                        <li className="faq-qa">
                          <div className="faq-q">But what if there is a tie and there are no unique bids?</div>
                          <div>As of now, the winner will be picked randomly from the pool of bidders that made the lowest, most unique bid. In the future, we hope to have bidders participate in a second lightning round, so they themselves can determine the winner!</div>
                        </li>
                      </ol>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="example home-info-card">
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
                      <tr className="winner" style={{background: 'rgba(213, 255, 192, 0.9)'}}>
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
                        <td>$4</td>
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