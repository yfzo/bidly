import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class SideBar extends Component {
  render() {
    const categories_arr = this.props.categories

    if (categories_arr) {
      var categories = categories_arr.map(category => (
        <Link to={"/auctions?category=" + category.id} key={category.id}><div>{category.name}</div></Link>
      ));
      console.log(categories_arr)
    }

    return (
      <div>{categories}</div>
    )
  }
}