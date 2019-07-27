import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import queryString from 'query-string'
import SideBar from '../components/SideBar.jsx'; 
import EachAuction from '../components/EachAuction.jsx';
import '../auctions.css';
import CardColumn from 'react-bootstrap/Card'



export default class Auctions extends Component {

    constructor(props) {
      super(props);
      this.state = { 
        data: null,
        auctions: []
        };
    }
  
    async callAPI() {
        await fetch("http://localhost:3001/auctions")
            .then(res => res.json())
            .then(res => this.setState({ data: res }));
    }
  
    async componentDidMount() {
        await this.callAPI();

        this.state.data.auctions.forEach((item, index) => {
          if (index % 2) {
            this.state.auctions.push([this.state.data.auctions[index - 1], this.state.data.auctions[index]]);
          }
          console.log(this.state.auctions)
        });
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

    // createAuctions = () => {
    //   if (auctions_arr) {
    //   for(let i in auctions_arr){
    //     if((auctions_arr[i].category_id == queryValues.category) || !this.props.location.search){
    //     let children = []
    //     for(let j in auctions_arr){
    //       children.push(<td>{`Column ${j + 1}`}</td>)
    //     }
    //     auctions.push(<tr><EachAuction key={auctions.id} auction={auctions} location={location} history={this.props.history}/></tr>)
    //   }
    //   console.log(auctions)
    //   return auctions
    //   }
    // }
  // }

    render() {
      debugger
      // const a = [{category_id: 1, name: 'snickers ice cream', description: 'lots of chocolate and tasty', min_bid: '100', start_time: '2019-05-04 10:10:10', end_time: '2019-05-04 15:10:10' , image: 'https://i.imgur.com/EZjcSmV.jpg', user_id: 1}];
      const auctions_arr = this.state.data && this.state.auctions
      // const auctions_arr = this.state.data && this.state.data.auctions

      const queryValues = queryString.parse(this.props.location.search)
      let { location } = this.props;
      // console.log("This is location from Auctions", this.props.location)
      // console.log("This is previousLocation", this.previousLocation);

      // let isModal = !!(
      //   location.state &&
      //   location.state.modal &&
      //   this.previousLocation !== location
      // ); // not initial render


        // Show all auctions if there is no query, else show filtered by category
        var auctions = auctions_arr.map(auction => (
          ((auction.category_id == queryValues.category) || !this.props.location.search) 
          && <EachAuction key={auction[0].id} auction={auction[0]} location={location} history={this.props.history}/>
        ));
        // }
      // }

      return (
        <div>
          <SideBar categories={this.state.data && this.state.data.category} />
          {/* {this.state.data && auctions} */}
        </div>
      )
    }
  }