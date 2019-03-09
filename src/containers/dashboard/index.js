/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Dashboard from '../../components/dashboard';

export default class index extends Component {
  render() {
    const { Navbar, Footer } = this.props;

    return (
      <fragment>
        <div>
          <Navbar />
          <Dashboard />

        </div>
      </fragment>

    );
  }
}
