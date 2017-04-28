import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';

import Loader from './Loader';

function setup(){
  const props = {
  };
  return shallow(<Loader {...props} />);
}

describe('<Loader />', ()=>{
  it('renders <img> html tag', ()=>{
    const wrapper = setup();
    expect(wrapper.find('img').length).toBe(1);
  });
});
