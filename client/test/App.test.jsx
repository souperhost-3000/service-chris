/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../src/App';
import Total from '../src/Total';
import Ratings from '../src/Ratings';
import Reviews from '../src/Reviews';

describe('<App> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('renders without crashing', () => {
    shallow(<App />);
    console.log(mount(<App />).debug());
    console.log(render(<App />))
  });

  it('renders <Total /> component', () => {
    expect(wrapper.find(Total).length).toEqual(1);
  });

  it('renders <Ratings /> component', () => {
    expect(wrapper.find(Ratings).length).toEqual(1);
  });

  it('renders <Reviews /> component', () => {
    expect(wrapper.find(Reviews).length).toEqual(1);
  });

  it('renders a button that pops up the modal"', () => {
    expect(wrapper.find('.modalButton')).toExist();
  })

  it('should find a modal class when the button is clicked', () => {
    wrapper.find('.modalButton').simulate('click');
    expect(wrapper.find('.modal')).toExist();
  })
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
