import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Header from '../components/Header';

it('renders correctly', () => {
  const rocket = renderer
    .create(<Provider store={store}><Header /></Provider>)
    .toJSON();
  expect(rocket).toMatchSnapshot();
});
