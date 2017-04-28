import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import SelectOneMenu from './SelectOneMenu';
import SelectOneMenuOption from './SelectOneMenuOption';

function setup(value, selectOptions, handleChange, readOnly){
  const props = {
    value,
    selectOptions,
    handleChange,
    readOnly
  };

  return shallow(<SelectOneMenu {...props} />);
}

function setupOptions(value, label, itemKey){
  const props = {value, label, itemKey};

  return shallow(<SelectOneMenuOption {...props} />);
}

describe('<SelectOneMenu />', ()=>{
  it('renders <select> html tag', ()=>{
    const wrapper = setup();
    expect(wrapper.find('select').length).toBe(1);
  });
  it('without parameters should be added default values', ()=>{
    const wrapper = setup();
    const props = wrapper.find('select').props();
    expect(props.value).toBe('');
    expect(props.onChange).toBe(undefined);
    expect(props.disabled).toBe('');
  });
  it('renders with parameters', ()=>{
    const wrapper = setup('Value', [], undefined, true);
    const props = wrapper.find('select').props();
    expect(props.value).toBe('Value');
    expect(props.onChange).toBe(undefined);
    expect(props.disabled).toBe(true);
  });
  it('renders child <SelectOneMenuOption /> component', ()=>{
    const wrapper = setup('Value', [
      {label: 'label', value: 'value'},
      {label: 'label', value: 'value'}
    ]);
    const children = wrapper.find('select').props().children;
    expect(2).toBe(children.length);
    expect(SelectOneMenuOption).toEqual(children[0].type);
  });
  describe('<SelectOneMenuOption />', function(){
    it('renders <option> tags', ()=>{
      const wrapper = setupOptions();
      expect(1).toBe(wrapper.find('option').length);
    });
    it('without parameters should be added default values', ()=>{
      const wrapper = setupOptions();
      const props = wrapper.find('option').props();
      expect(undefined).toBe(props.value);
      expect(undefined).toBe(props.children);
    });
    it('renders with params', ()=>{
      const wrapper = setupOptions('value', 'label');
      const props = wrapper.find('option').props();
      expect('value').toBe(props.value);
      expect('label').toBe(props.children);
    });
  });

});
