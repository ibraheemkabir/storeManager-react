import React, { Component } from 'react';
import Cart from '../../containers/sales/sales';
import Navbar from '../../components/Navbar';

export default class index extends Component {
  render() {
    return (
      <div>
        <Cart Navbar={Navbar} />
      </div>
    );
  }
}
