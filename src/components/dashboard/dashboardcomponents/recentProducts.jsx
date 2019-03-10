/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, List, Label } from 'semantic-ui-react';
import foot from '../../../../assets/images/foot.jpg';
import './dashcomponents.scss';
import { fetchproducts } from '../../../actions/productActions/productActions';
import { dateFormatter } from '../../../helpers/articleInfoFormatter';
import { timingSafeEqual } from 'crypto';

class recentProducts extends Component {
  componentWillMount() {
    const { fetchproducts } = this.props;
    fetchproducts();
  }

  render() {
    const { result } = this.props.products;
    return (
      <Grid columns={3} divided className="productslist">
        <Label as="a" color="red" tag>
          Recent Sales
        </Label>
        <Grid.Row>
          {result
            ? result.map(Element => Element.sales.map(Elements => (
              <Grid.Column key={Elements.id}>
                <div className="products">
                  <Image src={foot} size="small" />
                  <span>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Product Name</List.Header>
                          <List.Description>{Elements.product}</List.Description>
                        </List.Content>
                        <List.Content>
                          <List.Header as="a">Quantity Sold</List.Header>
                          <List.Description>{Elements.quantity}</List.Description>
                        </List.Content>
                        <List.Content>
                          <List.Header as="a">Sale Attendant Id</List.Header>
                          <List.Description>{Elements.attendant}</List.Description>
                        </List.Content>
                        <List.Content>
                          <List.Header as="a">Date Sold</List.Header>
                          <List.Description>{dateFormatter(Elements.date)}</List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </span>
                </div>
              </Grid.Column>
            ))
            )
            : null}
          <Grid.Column>
            <div className="products">
              <Image src={foot} size="small" />
              <span>
                <List>
                  <List.Item>
                    <List.Content>
                      <List.Header as="a">Product Name</List.Header>
                      <List.Description>SHOE</List.Description>
                    </List.Content>
                    <List.Content>
                      <List.Header as="a">Quantity Sold</List.Header>
                      <List.Description>3</List.Description>
                    </List.Content>
                    <List.Content>
                      <List.Header as="a">Sale Attendant</List.Header>
                      <List.Description>Attendant</List.Description>
                    </List.Content>
                    <List.Content>
                      <List.Header as="a">Date Sold</List.Header>
                      <List.Description>Attendant</List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </span>
            </div>
          </Grid.Column>
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
