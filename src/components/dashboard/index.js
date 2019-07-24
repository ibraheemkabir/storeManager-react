import React, { Component } from 'react';
import Stats from './dashboardcomponents/salesStats';
import Recent from './dashboardcomponents/recentProducts';
import Products from './dashboardcomponents/allProducts';
import { getAllProducts } from '../../helpers/axiosCalls/products';

export default class index extends Component {
  render() {
    getAllProducts();

    return (
      <div>
        <Stats />
        <Recent />
        <Products />
      </div>
    );
  }
}
