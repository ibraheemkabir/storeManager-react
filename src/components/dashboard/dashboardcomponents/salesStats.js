import React from 'react';
import { Icon, Statistic, Label } from 'semantic-ui-react';
import './dashcomponents.scss';

const StatisticExampleValue = () => (
  <fragment className="stats">
    <Label as="a" color="red" ribbon>
            Sales Overview
    </Label>
    <Statistic.Group raised>

      <Statistic>
        <Statistic.Value>N 22</Statistic.Value>
        <Statistic.Label>WORTH OF UNITS SOLD</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value text>
                    Three
          <br />
                    Thousand
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

export default StatisticExampleValue;
