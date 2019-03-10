/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Label, Card } from 'semantic-ui-react';
import foot from '../../../../assets/images/foot.jpg';
import './dashcomponents.scss';
import { fetchproducts } from '../../../actions/productActions/productActions';

class recentProducts extends Component {
  componentWillMount() {
    const { fetchproducts } = this.props;
    fetchproducts();
  }

  render() {
    const { product } = this.props.products;
    return (
      <Grid columns={3} divided className="productslist">
        <Label as="a" color="red" tag className="new">
          New Arrivals
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

export { recentProducts as Products };
export default connect(
  mapStateToProps,
  { fetchproducts }
)(recentProducts);
