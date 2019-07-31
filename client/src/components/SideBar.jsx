import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../SideBar.css';

export default class SideBar extends Component {
  render() {
    const categories_arr = this.props.categories
    // console.log(8, this.props.categories)
    // if (categories_arr) {
    //   var categories = categories_arr.map(category => (
    //     <Link to={"/auctions?category=" + category.id} key={category.id}><div>{category.name}</div></Link>
    //   ));
    //   console.log(13, categories_arr)
    // }

    return (
        <div style={{ width: "max-content"}}
                    id="wrapper">
          <Navbar expand="sm" style={{alignItems: "baseline"
                    }} className="side-bar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
      
                {this.props.categories ? categories_arr.map(category => {
                  return (
                    <Nav.Link href={"/auctions?category=" + category.id} key={category.id}>{category.name}</Nav.Link>
                  )
                }
                )
              :
              ""}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
  }
}