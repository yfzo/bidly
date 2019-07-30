
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import queryString from 'query-string'
import SideBar from '../components/SideBar.jsx'; 
import EachAuction from '../components/EachAuction.jsx';
import Container from 'react-bootstrap/Container';
import '../styles/auctions.css';
import Grid from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Auctions extends Component {

    constructor(props) {
      super(props);
      this.state = { 
        data: null,
        auctions: []
        };
    }
  
    callAPI() {
        fetch("http://localhost:3001/auctions")
            .then(res => res.json())
            .then(res => this.setState({ data: res }))
            .then(()=>console.log(this.state.data))
    }
  

    async componentWillMount() {
        await this.callAPI();
    }
    
    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
      let { location } = this.props;
  
      // set previousLocation if props.location is not modal
      if (
        nextProps.history.action !== "POP" &&
        (!location.state || !location.state.modal)
      ) {
        this.previousLocation = this.props.location;
      }
    }

    render() {
      // const a = [{category_id: 1, name: 'snickers ice cream', description: 'lots of chocolate and tasty', min_bid: '100', start_time: '2019-05-04 10:10:10', end_time: '2019-05-04 15:10:10' , image: 'https://i.imgur.com/EZjcSmV.jpg', user_id: 1}];
      const auctions_arr = this.state.data && this.state.data.auctions
      const queryValues = queryString.parse(this.props.location.search)
      let { location } = this.props;

      // console.log("This is location from Auctions", this.props.location)
      // console.log("This is previousLocation", this.previousLocation);

      // let isModal = !!(
      //   location.state &&
      //   location.state.modal &&
      //   this.previousLocation !== location
      // ); // not initial render

      if (auctions_arr) {
        var auctions = auctions_arr.map((auction) => {
          if((auction.category_id == queryValues.category) || !this.props.location.search){
              return (
                <EachAuction key={auction.id} auction={auction} location={location} history={this.props.history} className="each_auction"/>
              )
        }});
        // Show all auctions if there is no query, else show filtered by category
        // var auctions = auctions_arr.map(auction => (
        //   ((auction.category_id == queryValues.category) || !this.props.location.search) && <EachAuction key={auction.id} auction={auction} location={location} history={this.props.history}/>
        // ));
      }

      return (
        <div style={{display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        }} className="auctions-outer-wrapper">
          <Col xs={1} style={{padding: 0, diaplay:'flex', justifyContent: 'start'}}>
              <SideBar categories={this.state.data && this.state.data.category} />
          </Col>
          <Col xs={11} className="auctions_container">
                {this.state.data && auctions}
          </Col>
        </div>
      )
    }
  }