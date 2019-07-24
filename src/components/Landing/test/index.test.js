import React from 'react'
import {shallow} from 'enzyme';
import Landing from '../index';
import { Item } from 'semantic-ui-react';

describe('test for landing page',()=>{
    it('should test for landing page component',()=>{
        const wrapper = shallow(<Landing/>)
        expect(wrapper).toMatchSnapshot();

    })
})