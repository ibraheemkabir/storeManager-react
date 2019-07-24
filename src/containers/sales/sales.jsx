import React, { Component } from 'react';
import Sales from '../../components/Sale/sale';

export default class sales extends Component {
  render() {
    const { Navbar } = this.props;
    return (
      <div>
        <Navbar />
        <Sales />
      </div>
    );
  }
}
