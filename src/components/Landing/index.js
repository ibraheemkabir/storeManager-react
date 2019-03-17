import './landing.scss';
import React, { Component } from 'react';
import { Button, Icon, Divider } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="logo">STORELY</div>
        <div className="maintext">
          <span>
            {' '}
            STORE MANAGEMENT WITH EASE AND CONVINIENCE.
            <p>
              <Button color="google plus">
                <Icon name="google plus" />
                {' '}
Sign in with Gmail
              </Button>
              <Divider horizontal>
                <Link to='/login'>Or Log In</Link>
              </Divider>
            </p>
          </span>
          <div className="hero">
            <img src="https://res.cloudinary.com/ah-krypton/image/upload/c_scale,w_800/v1552771277/shop.png" />
          </div>
        </div>
      </div>
    );
  }
}
