import React, {Component} from 'react';
import SideBar from '../components/SideBar.jsx'; 
import EachAuction from '../components/EachAuction.jsx'; 

export default class Auctions extends Component {

    constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
      console.log("blahblah")
    }
  
    callAPI() {
        fetch("http://localhost:3001/auctions")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
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
      const auctions = this.state.apiResponse.map(auction => (
        <EachAuction key={auction.id} auction={auction} />
      ));

      return (
        <div>
          <SideBar />
          {auctions}
        </div>
      )
    }
  }