import React, {Component} from 'react';
import Tabs from '../components/Tabs.jsx';

export default class Profile extends Component {
    login = (e) => {
      axios.post('/api/users/:id')
    }
  
    render() {
      return (
        <div>
          <Tabs />
        </div>
      )
    }
  }