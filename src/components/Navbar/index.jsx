import React, { Component, Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Menu, Dropdown, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { isUserAuthenticated } from '../../helpers/jwt';
import './navbar.scss';

class Navbar extends Component {
  state = {
    activeItem: 'home',
    cart: this.props.cart
  };

  componentWillMount() {
    const user = isUserAuthenticated();
    if (!user) {
      location.replace('./');
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  updateCart(cart) {
    this.setState({
      cart
    });
  }

  logout() {
    localStorage.removeItem('authentication');
    location.replace('./');
  }

  renderDropdownMenu() {
    const role = localStorage.getItem('role');
    return (
      <Menu.Item>
        <Dropdown pointing simple item className="link item" trigger={<div>hello</div>}>
          <Dropdown.Menu className="right">
            {role === '1' ? (
              <div>
                <Dropdown.Item as="a">ATTENDANTS</Dropdown.Item>
              </div>
            ) : null}
            <Dropdown.Item as="a">MY PROFILE</Dropdown.Item>
            <Dropdown.Item as="a" onClick={this.logout}>
              LOG OUT
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    );
  }

  render() {
    const role = localStorage.getItem('role');
    const { activeItem } = this.state;
    return (
      <Fragment className="menu">
        <ToastContainer autoClose={5000} />

        <Menu className="navbar" stackable size="mini">
          <Menu.Item
            name="testimonials"
            active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
            position="left"
            className="logo"
          >
            <Link replace={false} to="/dashboard">
              STORE-MANAGER
            </Link>
          </Menu.Item>
          <Menu.Item
            name="testimonials"
            active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
          >
            <Link replace={false} to="/dashboard">
              My Dashboard
            </Link>
          </Menu.Item>
          {role === '1' ? (
            <Menu.Item
              name="testimonials"
              active={activeItem === 'testimonials'}
              onClick={this.handleItemClick}
            >
              <Link replace={false} to="/details">
                Product Details
              </Link>
            </Menu.Item>
          ) : null}
          <Menu.Item
            name="testimonials"
            active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
          >
            <Link replace={false} to="/products">
              Products Available
            </Link>
          </Menu.Item>
          <Menu.Item
            name="testimonials"
            active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
          >
            <Link replace={false} to="/cart">
              <Label color="teal" floating>
                {this.state.cart}
              </Label>
              Cart
            </Link>
          </Menu.Item>

          <Menu.Item
            name="testimonials"
            active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
          >
            {this.renderDropdownMenu()}
          </Menu.Item>
        </Menu>
      </Fragment>
    );
  }
}

const mapStateToProps = () => {
  if (JSON.parse(localStorage.getItem('cart'))) {
    return { cart: JSON.parse(localStorage.getItem('cart')).length };
  }
  return { cart: 0 };
};

export default connect(mapStateToProps)(Navbar);
