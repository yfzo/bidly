import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';


export default class Notification extends Component {

  constructor(props) {
    super(props);
    // this.state = { data: null };
  }

  // callAPI() {
  //   fetch("http://localhost:3001/auctions")
  //     .then(res => res.json())
  //     .then(res => this.setState({ data: res }));
  // }

  // componentDidMount() {
  //   this.callAPI();
  // }

  // componentWillUpdate(nextProps) {
  //   let { location } = this.props;

  //   // set previousLocation if props.location is not modal
  //   if (
  //     nextProps.history.action !== "POP" &&
  //     (!location.state || !location.state.modal)
  //   ) {
  //     this.previousLocation = this.props.location;
  //   }
  // }

  render() {
    

    // if (auctions_arr) {
    //   // Show all auctions if there is no query, else show filtered by category
    //   var auctions = auctions_arr.map(auction => (
    //     ((auction.category_id == queryValues.category) || !this.props.location.search) && <EachAuction key={auction.id} auction={auction} location={location} history={this.props.history} />
    //   ));
    // }

    return (
      <div>
        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
              position: 'relative',
              minHeight: '100px',
            }}
          >
            <Toast className="end-notification">
              <Toast.Header>
                {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
                <strong className="mr-auto">{this.props.notification.auctionName}</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>{this.props.notification.message}</Toast.Body>
            </Toast>
          </div>
      </div>
    )
  }
}