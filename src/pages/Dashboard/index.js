/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import DashContainer from '../../containers/dashboard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class index extends Component {
  render() {
    return (
      <div>
        <DashContainer Navbar={Navbar} Footer={Footer} />
      </div>
    );
  }
}
