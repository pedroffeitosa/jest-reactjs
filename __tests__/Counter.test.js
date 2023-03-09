import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Counter from '../src/Counter';

describe('Testing Counter Component',()=>{
  it('should render correctly', ()=> {
    const wrapper = shallow(<Counter count={5}/>);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    wrapper.setProps({ count: 10 });
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  })
})