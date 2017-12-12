// @flow
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactGalleryBox from '../';

Enzyme.configure({ adapter: new Adapter() });

const images = [
  'url1',
  'url2',
  'url3'
];

test('should render component properly', () => {
  const component = shallow(<ReactGalleryBox images={images} />);
  expect(component).toMatchSnapshot();
});

test('should set state when mouse event triggered', () => {
  const component = shallow(<ReactGalleryBox images={images} />);
  component.simulate('mouseEnter');
  expect(component).toMatchSnapshot();
});
