import React, { Component } from 'react';
import Cart from '../../components/Cart';


export default class index extends Component {
  render() {
    const { Navbar, Footer } = this.props;

    return (
      <div>
        <Navbar />
        <Cart />
      </div>
    );
  }
}
