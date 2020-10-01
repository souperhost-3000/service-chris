import { shallow, mount, render } from 'enzyme';
import Review from '../src/Review';

describe ('<Review /> Component', () => {
  it('should render', () => {
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
    console.log(wrapper.debug())
  });
});
