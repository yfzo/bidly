import React, {Component} from 'react';
import ProfileTabs from '../components/ProfileTabs.jsx';
import '../styles/profileTabs.css';
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null,
    redirect: false}
    console.log("blahblah")
  }

  verifyToken(token) {
    let theThing = null;
    jwt.verify(token, 'super-secret-sauce', function(err, decoded){
      theThing = decoded;
    })
    return theThing.userId;
  }

  callAPI() {
    const decodedId = this.props.match.params.id;
    const path = "http://localhost:3001/users/" + this.props.match.params.id;
    fetch(path)
          .then(res => res.json())
          .then(res => {
            if (this.verifyToken(localStorage.getItem('user_id')) === decodedId) {
              this.setState({ data: res })
            } else {
              this.setState({data: this.verifyToken(localStorage.getItem('user_id'))})
            }
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
        return <Redirect to={'/auctions/' + this.verifyToken(localStorage.getItem('user_id'))}/>
      } else if (typeof this.state.data === "string") {
        this.callAPI()
        return <Redirect to={'/users/' + this.verifyToken(localStorage.getItem('user_id'))}/>
      }
      console.log(this.state.data);
      return (
        <div>

          {this.state.data && <ProfileTabs onClick={this.handleOnClick} data={this.state.data}  />}
        </div>
      )
    }
  }