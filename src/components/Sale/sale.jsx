/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Table, Label, Button, Icon } from 'semantic-ui-react';
import './sale.scss';
import { fetchproducts } from '../../actions/productActions/productActions';

class sale extends Component {
  componentWillMount() {
    const { fetchproducts } = this.props;
    fetchproducts();
  }

  FetchCart() {
    let total = 0;
    const cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart.length; i += 1) {
      total += parseInt(cart[i].price, 10) * parseInt(cart[i].quantity, 10);
    }
    return `N ${total}`;
  }

  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return (
      <Grid columns={3} divided className="cart productslist">
        <Label as="a" color="red" ribbon>
          Sales Cart
        </Label>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product Name</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Price/Unit</Table.HeaderCell>
              <Table.HeaderCell>Cost</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {cart.map(Element => (
              <Table.Row Key={Element.id}>
                <Table.Cell>{Element.name}</Table.Cell>
                <Table.Cell>{Element.quantity}</Table.Cell>
                <Table.Cell>{Element.price}</Table.Cell>
                <Table.Cell>{Element.price * Element.quantity}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="4">
                <Button floated="right" icon labelPosition="left" primary size="big">
                  <Icon name="cart arrow down" />
                  Checkout
                </Button>
                <Button as="a" floated="right" icon labelPosition="left" primary size="big">
                  {this.FetchCart()}
                </Button>
                <Button
                  as="a"
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="big"
                  className="total"
                >
                  Total:
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsReducer.response
});

export { sale as Products };
export default connect(
  mapStateToProps,
  { fetchproducts }
)(sale);
