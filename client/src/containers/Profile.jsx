import React, {Component} from 'react';
import ProfileTabs from '../components/ProfileTabs.jsx';
import '../profileTabs.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
    console.log("blahblah")

  }

  callAPI() {
    const path = "http://localhost:3001/users/" + this.props.match.params.id;
      fetch(path)
          .then(res => res.json())
          .then(res => this.setState({ data: res }))
          .catch(err => (console.log('This is error' + err )))
          .then(res => ("this is data" + console.log(this.state.data)))
  }

  componentDidMount() {
      console.log("blahblah")
      this.callAPI();
      this.socket = new WebSocket('ws://localhost:3001/');
        this.socket.addEventListener('open', () => {
            console.log('Connected to server');
        });
  }
  
    render() {
      return (
        <div>
          {this.state.data && <ProfileTabs user_info={this.state.data}/>}
        </div>
      )
    }
  }