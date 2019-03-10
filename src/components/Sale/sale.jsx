/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Table, Label, Button, Icon, Message, Header } from 'semantic-ui-react';
import './sale.scss';
import { toast } from 'react-toastify';
import { sellproducts } from '../../actions/SaleActions/saleActions';

class sale extends Component {
  FetchTotal() {
    let total = 0;
    const cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart.length; i += 1) {
      total += parseInt(cart[i].price, 10) * parseInt(cart[i].quantity, 10);
    }
    return `N ${total}`;
  }

  checkoutProducts() {
    this.props.checkout();
    const options = {
      onClose: () => location.replace('/cart'),
      autoClose: 6000
    };
    toast('Sale Successful', options);
    localStorage.removeItem('cart');
    this.renderTablebody();
  }

  renderTablebody(cart) {
    return (
      <Table.Body>
        {cart ? (
          cart.map(Element => (
            <Table.Row Key={Element.id}>
              <Table.Cell>{Element.name}</Table.Cell>
              <Table.Cell>{Element.quantity}</Table.Cell>
              <Table.Cell>{Element.price}</Table.Cell>
              <Table.Cell>{Element.price * Element.quantity}</Table.Cell>
            </Table.Row>
          ))
        ) : (
          <Table.Row fullWidth>
            {' '}
            <Message positive>
              <Message.Header>The Cart is currently Empty</Message.Header>
              <p>
                <b>Go to the Products page to add to Cart</b>
              </p>
              <p>
                <b>
                  <Link replace={false} to="/products">
                    <Header as="h2">
                      <Icon.Group size="large">
                        <Icon name="shopping bag" />
                        <Icon corner name="add" />
                      </Icon.Group>
                      Add to Cart
                    </Header>
                  </Link>
                </b>
              </p>
            </Message>
          </Table.Row>
        )}
      </Table.Body>
    );
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
          {this.renderTablebody(cart)}
          {cart ? (
            <Table.Footer fullWidth>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell colSpan="4">
                  <Button floated="right" icon labelPosition="left" primary size="big">
                    <Icon name="cart arrow down" onClick={() => this.checkoutProducts()} />
                    Checkout
                  </Button>
                  <Button as="a" floated="right" icon labelPosition="left" primary size="big">
                    {cart ? this.FetchTotal() : null}
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
          ) : null}
        </Table>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  checkout: () => dispatch(sellproducts())
});

const mapStateToProps = state => ({
  products: state.productsReducer.response
});

export { sale as Products };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sale);
