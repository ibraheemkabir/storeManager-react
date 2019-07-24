import React, { Component } from 'react';
import Products from '../../components/Products/EditProducts';
import Navbar from '../../components/Navbar/index';

export default class index extends Component {
  render() {
    return (
      <div>
        <Products Navbar={Navbar} />
      </div>
    );
  }
}
