import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: 'login',
    component: Login,
    exact: true,
    path: '/auth'
  },
  {
    name: 'dashboard',
    component: Dashboard,
    exact: true,
    path: '/dashboard'
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*'
  }
];
