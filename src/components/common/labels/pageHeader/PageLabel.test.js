import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';

import PageLabel from './PageLabel';

function setup(){
  const props = {
  };

  return shallow(<PageLabel {...props} />);
}

describe('<PageLabel />', ()=>{
  it('renders <div> html tag', ()=>{
    const wrapper = setup();
    expect(wrapper.find('h1').length).toBe(1);
  });
});
