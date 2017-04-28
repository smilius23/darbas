import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import LinkSimple from './LinkSimple';
import ArrowIcon from '../images/icons/ArrowIcon';
import EditIcon from '../images/icons/EditIcon';

function setup(label, href, arrow, iconEdit){
  const props = {
    label: label,
    href: href,
    arrow: arrow,
    iconEdit: iconEdit
  };

  return shallow(<LinkSimple {...props}/>);
}

describe('<LinkSimple />', ()=>{
  it('without any params render <a> tag with default label and href', ()=>{
    const wrapper = setup();
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('a').props().href).toBe('/#');
    expect(wrapper.find('a').props().children[0]).toBe(false);
    expect(wrapper.find('a').props().children[1]).toBe(false);
    expect(wrapper.find('a').props().children[2]).toBe('link');
  });
  it('with params render <a> tag with label and href, if arrow=false and iconEdit=false then icons hides', ()=>{
    const wrapperWithProps = setup('Name', 'http://somelink.com', false, false);
    expect(wrapperWithProps.find('a').length).toBe(1);
    expect(wrapperWithProps.find('a').props().href).toBe('http://somelink.com');
    expect(wrapperWithProps.find('a').props().children[0]).toBe(false);
    expect(wrapperWithProps.find('a').props().children[0]).toBe(false);
    expect(wrapperWithProps.find('a').props().children[2]).toBe('Name');
  });
  it('if param arrow=true then arrow icon should display', ()=>{
    const wrapperWithPropsTrue = setup('Name', 'http://somelink.com', true, false);
    expect(wrapperWithPropsTrue.find('a').props().children[0].type).toEqual(ArrowIcon);
    expect(wrapperWithPropsTrue.find('a').props().children[1]).toBe(false);
    expect(wrapperWithPropsTrue.find('a').props().children[2]).toBe('Name');
  });
  it('if param iconEdit=true then iconEdit icon should display', ()=>{
    const wrapperWithPropsTrue = setup('Name', 'http://somelink.com', false, true);
    expect(wrapperWithPropsTrue.find('a').props().children[0]).toBe(false);
    expect(wrapperWithPropsTrue.find('a').props().children[1].type).toEqual(EditIcon);
    expect(wrapperWithPropsTrue.find('a').props().children[2]).toBe('Name');
  });
});
