/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Label, Card, Icon } from 'semantic-ui-react';
import foot from '../../../assets/images/foot.jpg';
import cart from '../../helpers/cartHelper';
import './cart.scss';
import { fetchproducts } from '../../actions/productActions/productActions';

class allProducts extends Component {
  componentWillMount() {
    const { fetchproducts } = this.props;
    fetchproducts();
  }

  handleAddToCart(id, price, category, name) {
    cart(id, price, category, name);
  }

  render() {
    const { product } = this.props.products;
    return (
      <Grid columns={3} divided className="productslist">
        <Label as="a" color="red" ribbon>
          Avaialable Products
        </Label>
        <Grid.Row className="product">
          {product
            ? product.map(Element => (
              <Card Key={Element.id}>
                <Image
                    src={foot}
                    size="large"
                    label={{ as: 'a', corner: 'right', color: 'red', icon: 'tags' }}
                  />
                <Card.Content>
                  <Card.Header>
                      Product Name:
                    <span className="date">{Element.name}</span>
                  </Card.Header>
                  <Card.Header>
                      Product Price:
                    <span className="date">{Element.price}</span>
                  </Card.Header>
                  <Card.Header>
                      Quantity in stock:
                    <span className="date">{Element.quantity}</span>
                  </Card.Header>
                  <Label
                      attached="bottom right"
                      onClick={() => this.handleAddToCart(
                        Element.id,
                        Element.price,
                        Element.category,
                        Element.name
                      )
                      }
                      horizontal
                    >
                    <Icon name="add to cart" size="big" />
                  </Label>
                </Card.Content>
              </Card>
            ))
            : null}
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsReducer.response
});

export { allProducts as Products };
export default connect(
  mapStateToProps,
  { fetchproducts }
)(allProducts);
