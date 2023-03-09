import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Todos from '../src/Todos';

const mockStore = configureStore();

const initialState = {
    todos: [
      { id: 0, text: "Fazer Café"},
      { id: 1, text: "Acessar o slack"},
      { id: 2, text: "Ver RocketLive"}
  ]
}

const store = mockStore(initialState);

describe('Testing Todos Component',()=>{
  it('should render correctly', ()=> {
    const wrapper = shallow(   
      <Todos store={store}/>
      ).dive()
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  })
})