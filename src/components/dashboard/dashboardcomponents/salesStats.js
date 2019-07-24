/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Statistic, Label } from 'semantic-ui-react';
import './dashcomponents.scss';
import converter from 'number-to-words';

class salesStats extends Component {
  handleStats() {
    const { result } = this.props.stats;
    let total = 0;
    let quantity = 0;
    if (result) {
      result.forEach((element) => {
        total += element.total;
        element.sales.forEach((elements) => { quantity += elements.quantity; });
      });
    }
    return { total, quantity };
  }

  render() {
    const response = this.handleStats();

    return (
      <fragment className="stats">
        <Label as="a" color="red" ribbon>
          Sales Overview
        </Label>
        <Statistic.Group raised>

          <Statistic>
            <Statistic.Value>
              N
              {response.total }
            </Statistic.Value>
            <Statistic.Label>WORTH OF UNITS SOLD</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value text>
              {converter.toWords(response.quantity)}
            </Statistic.Value>
            <Statistic.Label>UNITS SOLD THIS MONTH</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="shopping bag" size="small" />
              5
            </Statistic.Value>
            <Statistic.Label>sales made today</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="users" size="small" />
            </Statistic.Value>
            <Statistic.Label>ATTENDANTS</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </fragment>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.salesReducer.response
});

export { salesStats as stats };
export default connect(
  mapStateToProps,
)(salesStats);
