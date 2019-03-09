import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './navbar.scss';

export default class MenuExampleSizeMini extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderDropdownMenu() {
    const { avatarUrl, userId } = this.props;
    return (
      <Menu.Item>
        <Dropdown
          pointing
          simple
          item
          className="link item"
          trigger={<Image src={avatarUrl || avatarPlaceholder} avatar className="avatarImg" />}
        >
          <Dropdown.Menu className="right">
            <Dropdown.Item as="a" href={`/profile/${userId || getUserIdFromLocalStorage()}`}>
              Settings
            </Dropdown.Item>
            <Dropdown.Item as="a" href={`/bookmarks/${userId || getUserIdFromLocalStorage()}`}>
              Attendants
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
    const { activeItem } = this.state;
    return (
      <Menu className="navbar" stackable size="large">
        <Menu.Item />

        <Menu.Item
          name="features"
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          signIn
        </Menu.Item>
        <Menu.Item
          name="testimonials"
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Categories
        </Menu.Item>
        <Menu.Item
          name="testimonials"
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Products
        </Menu.Item>
        <Menu.Item
          name="testimonials"
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Cart
        </Menu.Item>
      </Menu>
    );
  }
}
