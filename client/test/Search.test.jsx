import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../src/Search';

describe('<Search> Component', () => {
  it('should render search icon, search bar, and cancel icon', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('.searchIcon')).toExist();
    expect(wrapper.find('form').html()).toContain('input');
    expect(wrapper.find('.deleteIcon')).toExist();
  });

  it('should render changed value after input change', () => {
    const wrapper = mount(<Search />);
    wrapper.find('input').simulate('change', { target: { value: 'value' } });
    expect(wrapper.find('#search').prop('value')).toBe('value');
  });
  it('should invoke search when the delete icon button is clicked', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Search search={spy} />);
    wrapper.find('.deleteIcon').simulate('click', { preventDefault: () => {} });
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
