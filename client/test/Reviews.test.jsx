/* eslint-disable */
import { shallow, mount, render } from 'enzyme';
import Review from '../src/Review';
import moment from 'moment';

describe ('<Review /> Component', () => {
  it('should render username, profile picture, and review', () => {
    const data = {
      username: 'Wanda',
      image: 'https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/pic24.jpg',
      review: 'Iusto ut quibusdam nihil.',
      cleanliness: 0,
      communication: 0,
      checkin: 0,
      accuracy: 0,
      location: 0,
      value: 0,
      createdAt: Date(),
    };
    const wrapper = shallow(<Review review={data}/>);
    expect(wrapper.find('.username').text()).toContain(data.username)
    expect(wrapper.find('.username').text()).toContain(moment(data.createdAt).format('MMMM YYYY'));
    expect(wrapper.find('.profile').html()).toContain('img')
    expect(wrapper.find('.userReviewBottom').text()).toEqual(data.review);

  });
});
