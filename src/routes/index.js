import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import Cart from '../pages/Cart/index';
import Details from '../pages/ProductDetails/index';

export default [
  {
    name: 'login',
    component: Login,
    exact: true,
    path: '/login'
  },
  {
    name: 'dashboard',
    component: Dashboard,
    exact: true,
    path: '/dashboard'
  },
  {
    name: 'Products',
    component: Products,
    exact: true,
    path: '/Products'
  },
  {
    name: 'Cart',
    component: Cart,
    exact: true,
    path: '/Cart'
  },
  {
    name: 'Details',
    component: Details,
    exact: true,
    path: '/Details'
  },
  {
    name: 'Landing',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*'
  }
];
