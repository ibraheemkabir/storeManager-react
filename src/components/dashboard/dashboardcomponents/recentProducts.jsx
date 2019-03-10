import React from 'react';
import { Grid, Image, List, Label } from 'semantic-ui-react';
import foot from '../../../../assets/images/foot.jpg';
import './dashcomponents.scss';

const GridExampleDividedNumber = () => (
  <Grid columns={3} divided className="productslist">
    <Label as="a" color="red" tag>
      Recent Sales
    </Label>
    <Grid.Row>
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
                  <List.Header as="a">Date sold</List.Header>
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

export default GridExampleDividedNumber;
