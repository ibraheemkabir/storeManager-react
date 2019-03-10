import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './navbar.scss';

class Navbar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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
          Cart
        </Menu.Item>
        <Menu.Item
          name="testimonials"
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          {this.renderDropdownMenu()}
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  const { authReducer } = state;
  const { isAuthenticated } = authReducer;
  if (isAuthenticated) {
    return role;
  }
  return {
    userId: ''
  };
};

export default connect(mapStateToProps)(Navbar);
