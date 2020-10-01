/* eslint-disable*/
import { shallow, mount, render } from 'enzyme';
import App from '../src/App';

describe('Modal Testing', () => {
  it('should render a modal when clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.find('.modalButton').simulate('click');
    expect(wrapper.find('.modal')).toExist();
  })
})
