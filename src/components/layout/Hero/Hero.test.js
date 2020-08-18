import React from 'react';
import {shallow} from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {
  it('should render without crashing', () => {
    const component = shallow(<Hero titleText='Lorem ipsum' />);
    expect(component).toBeTruthy();
  });
});