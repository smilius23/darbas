import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';

import InputField from './InputField';

function setup(name, value, placeholder, onChange, onBlur){
  const props = {
    name,
    value,
    placeholder,
    onChange,
    onBlur
  };

  return shallow(<InputField {...props}/>);
}

describe('<InputField />', ()=>{
  it('renders <input> html tag', ()=>{
    const wrapper = setup();
    expect(wrapper.find('input').length).toBe(1);
  });
  it('should render without parameters', ()=>{
    const wrapper = setup();
    const props = wrapper.find('input').props();
    expect(props.type).toBe('text');
  });
  it('should renders with parameters', ()=>{
    const wrapper = setup('Name', 'Value', 'Placeholder');
    const props = wrapper.find('input').props();
    expect(props.name).toBe('Name');
    expect(props.value).toBe('Value');
    expect(props.placeholder).toBe('Placeholder');
  });
});
