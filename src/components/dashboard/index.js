import React, { Component } from 'react';
import Stats from './dashboardcomponents/salesStats';
import Recent from './dashboardcomponents/recentProducts';

export default class index extends Component {
  render() {
    return (
      <div>
        <Stats />
        <Recent />
      </div>
    );
  }
}
