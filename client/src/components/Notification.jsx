import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';

export default class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  setShow = () => {
    this.setState({ show: false })
  }

  componentDidUpdate(oldProps) {
    // console.log('oldProps', oldProps);
    // console.log('newProps', this.props);
    
    const newProps = this.props;
    
    if(oldProps.notification.id !== newProps.notification.id) {
      this.setState({ show: true });
    }
  }

  render() {
    if (this.state.show) {
      return (
        <div>
          <div
            aria-live="polite"
            aria-atomic="true"
            style={{
              position: "absolute",   
              minHeight: "100px",
              minWidth: "259px",  
              zIndex: 9999,
              right: 0       
            }
            } className="notification-container"
          >
            <Toast className="end-notification" show={this.state.show} onClose={this.setShow}>
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
    } else {
      return null;
    }

  }
}