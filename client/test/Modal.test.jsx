import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';
import ModalReviews from '../src/ModalReviews';
import ModalReview from '../src/ModalReview';
import ModalRatings from '../src/ModalRatings';

describe('Modal Testing', () => {
  const reviews = {
    user_data: [
      {
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
      },
    ],
  };
  const ratings = {
    cleanliness: 0,
    communication: 0,
    checkin: 0,
    accuracy: 0,
    location: 0,
    value: 0,
    totalAvg: 0,
  };

  it('should render a modal when clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.find('.modalButton').simulate('click');
    expect(wrapper.find('.Modal')).toExist();
  });

  it('should close a modal when the close button is clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.find('.modalButton').simulate('click');
    expect(wrapper.find('.Modal')).toExist();
    wrapper.find('.close').simulate('click');
    expect(wrapper.find('.Modal.hide')).toExist();
  });

  it('should find search in ModalReviews component', () => {
    const wrapper = shallow(<ModalReviews reviews={reviews.user_data} />);
    expect(wrapper.find('.search')).toExist();
  });

  it('should render ModalReview component', () => {
    const wrapper = shallow(<ModalReview review={reviews.user_data[0]} />);
    expect(wrapper.find('.modalUserReview')).toExist();
  });

  it('should render ModalRatings component', () => {
    const wrapper = shallow(<ModalRatings ratings={ratings} />);
    expect(wrapper.find('.modalLeft')).toExist();
  });
});
