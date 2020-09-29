/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../src/App';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  // it('Should contain div with Hello World!', () => {
  //   let wrapper = shallow(<App />);
  //   expect(wrapper.contains(<div className='review'>Hello World!</div>)).toBe(true);
  // })
  // it('Should render "Hello World!"', () => {
  //   let wrapper = shallow(<App />);
  //   expect(render(<App />).text()).toEqual('Hello World!');
  // });
  // it('Should expect App to have class name review', () => {
  //   let wrapper = shallow(<App />);
  //   expect(wrapper.find('.review')).toHaveClassName('review');
  // });
});
