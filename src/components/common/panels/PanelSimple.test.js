import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';

import PanelSimple from './PanelSimple';

function setup(title, children, type){
  const props = {
    title: title,
    children: children,
    type: type
  };

  return shallow(<PanelSimple {...props}/>);
}

describe('<PanelSimple />', ()=>{
  it('rendering panel with empty title and without children and empty params', ()=>{
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('div').nodes[0].props.children[0].type).toBe('h2');
    expect(wrapper.find('div').nodes[0].props.children[0].props.children).toBe('');
    expect(wrapper.find('div').nodes[0].props.children[0].props.style.backgroundColor).toBe('#0092aa');
    expect(wrapper.find('div').nodes[0].props.children[1].type).toBe('div');
    expect(wrapper.find('div').nodes[0].props.children[1].props.children).toBe('');
  });
  it('rendering panel with title', ()=>{
    const wrapper = setup('title');
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('div').nodes[0].props.children[0].type).toBe('h2');
    expect(wrapper.find('div').nodes[0].props.children[0].props.children).toBe('title');
  });
  it('rendering panel with title and type blue', ()=>{
    const wrapper = setup('title blue', '', 'blue');
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('div').nodes[0].props.children[0].type).toBe('h2');
    expect(wrapper.find('div').nodes[0].props.children[0].props.children).toBe('title blue');
    expect(wrapper.find('div').nodes[0].props.children[0].props.style.backgroundColor).toBe('#0092aa');
  });
  it('rendering panel with title and type green', ()=>{
    const wrapper = setup('title green', '', 'green');
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('div').nodes[0].props.children[0].type).toBe('h2');
    expect(wrapper.find('div').nodes[0].props.children[0].props.children).toBe('title green');
    expect(wrapper.find('div').nodes[0].props.children[0].props.style.backgroundColor).toBe('#3f9d01');
  });
  it('rendering panel with children', ()=>{
    const wrapper = setup('title green', 'content', 'green');
    expect(wrapper.find('div').nodes[0].props.children[1].type).toBe('div');
    expect(wrapper.find('div').nodes[0].props.children[1].props.children).toBe('content');
  });
});
