import React, { Component } from 'react';
import { Button, Divider, Input, Segment, Header, Icon } from 'semantic-ui-react';
import Products from './allProducts';
import AddProducts from './addProducts';
import AddCategory from './addCategory';
import './edit.scss';

export default class EditProducts extends Component {
  componentWillMount() {}

  render() {
    const { Navbar } = this.props;
    return (
      <div>
        <Navbar />
        <Segment basic textAlign="center">
          <AddProducts
            Trigger={(
              <Button
                color="teal"
                content="Add a Product"
                icon="add"
                labelPosition="left"
                floated="left"
              />
)}
          />
          <AddCategory
            Trigger={(
              <Button
                color="teal"
                content="Categories"
                icon="add"
                labelPosition="left"
                floated="left"
              />
)}
          />
          <Input
            action={{ color: 'blue', content: 'Search' }}
            icon="search"
            iconPosition="left"
            placeholder="Filter Products"
            floated="right"
          />

          <Divider horizontal>
            <Header as="h4">
              <Icon name="tag" />
              Product Details
            </Header>
          </Divider>
        </Segment>
        <Products />
      </div>
    );
  }
}
