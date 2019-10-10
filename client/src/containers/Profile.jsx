import React, {Component} from 'react';
import ProfileTabs from '../components/ProfileTabs.jsx';
import '../styles/profileTabs.css';
import { Redirect } from 'react-router-dom';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null,
    redirect: false}
    console.log("blahblah")
  }

  callAPI() {
    const path = "http://localhost:3001/users/" + this.props.match.params.id;
    fetch(path)
          .then(res => res.json())
          .then(res => {
            this.setState({ data: res })
          })
          .catch(err => (console.log('This is error' + err )))
          .then(res => ("this is data" + console.log(this.state.data)))
  }

  componentDidMount() {
      console.log("blahblah")
      this.callAPI();
  }
  
    render() {
      if (this.state.redirect == true ) {
        return <Redirect to={'/auctions/' + this.state.data.user_id}/>
      }
      console.log(this.state.data);
      return (
        <div>

          {this.state.data && <ProfileTabs onClick={this.handleOnClick} data={this.state.data}  />}
        </div>
      )
    }
  }