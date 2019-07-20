import React, {Component} from 'react';
import SideBar from '../components/SideBar.jsx';
import EachAuction from '../components/EachAuction.jsx';

export default class CategorizedAuction extends Component {
    login = (e) => {
      axios.post('/api/auctions?category')
    }
  
    render() {
      return (
        <div>
          <div>Category name</div>
          <SideBar />
          <EachAuction />
        </div>
      )
    }
  }