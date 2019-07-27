import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default class SideBar extends Component {
  render() {
    const categories_arr = this.props.categories
    console.log(this.props.categories)
        return ( 
          <div><h1>sidebar</h1></div>
      )
    }
  }
