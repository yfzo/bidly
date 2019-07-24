import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import queryString from 'query-string'
import SideBar from '../components/SideBar.jsx'; 
import EachAuction from '../components/EachAuction.jsx';

export default class Auctions extends Component {

    constructor(props) {
      super(props);
      this.state = { data: null };
      console.log("blahblah")
    }
  
    callAPI() {
        fetch("http://localhost:3001/auctions")
            .then(res => res.json())
            .then(res => this.setState({ data: res }));
    }
  
    componentDidMount() {
        console.log("blahblah")
        this.callAPI();
    }
  
    // login = (e) => {
    //   axios.post('/api/auctions')
    // }
    render() {
      // const a = [{category_id: 1, name: 'snickers ice cream', description: 'lots of chocolate and tasty', min_bid: '100', start_time: '2019-05-04 10:10:10', end_time: '2019-05-04 15:10:10' , image: 'https://i.imgur.com/EZjcSmV.jpg', user_id: 1}];
      const auctions_arr = this.state.data && this.state.data.auctions
      const queryValues = queryString.parse(this.props.location.search)
      // console.log('Are there query values?', this.props.location.search == false)

      if (auctions_arr) {
        // Show all auctions if there is no query, else show filtered by category
        var auctions = auctions_arr.map(auction => (
          ((auction.category_id == queryValues.category) || !this.props.location.search) && <EachAuction key={auction.id} auction={auction} />
        ));
        // console.log(auctions_arr)
      }
      // console.log('******', queryValues.category)

      return (
        <div>
          <SideBar categories={this.state.data && this.state.data.category} />
          {this.state.data && auctions}
        </div>
      )
    }
  }