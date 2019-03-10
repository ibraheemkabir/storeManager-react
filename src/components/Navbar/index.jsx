import React, { Component, Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Menu, Dropdown, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './navbar.scss';

class Navbar extends Component {
  state = {
    activeItem: 'home',
    cart: this.props.cart
  };

  componentDidUpdate(prevProps) {
    if (this.props.cart !== prevProps.cart) {
      console.log('hello');
      this.updateCart(JSON.parse(localStorage.getItem('cart')).length);
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  updateCart(cart) {
    console.log('helo');

    this.setState({
      cart
    });
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
                <Dropdown.Item as="a">SETTINGS</Dropdown.Item>
              </div>
            ) : null}
            <Dropdown.Item as="a" href={`${window.location.pathname}`} onClick={this.logout}>
              MY PROFILE
            </Dropdown.Item>
            <Dropdown.Item as="a" href={`${window.location.pathname}`} onClick={this.logout}>
              SALES RECORDS
            </Dropdown.Item>
            <Dropdown.Item as="a" href={`${window.location.pathname}`} onClick={this.logout}>
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
          {role === '1' ? (
            <Menu.Item
              name="testimonials"
              active={activeItem === 'testimonials'}
              onClick={this.handleItemClick}
            >
              Categories
            </Menu.Item>
          ) : null}
          <Menu.Item
            name="testimonials"
            active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
          >
            Products Available
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

const mapStateToProps = state => ({
  cart: JSON.parse(localStorage.getItem('cart')).length
});

export default connect(mapStateToProps)(Navbar);
