import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './body.scss';

const App = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <div className="body">
        <Switch>
          {routes.map(route => (
            <Route
              key={route.name}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
