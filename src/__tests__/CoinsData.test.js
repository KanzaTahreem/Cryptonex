import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import CoinsData from '../components/CoinsData';

it('renders correctly', () => {
  const rocket = renderer
    .create(<Provider store={store}><CoinsData /></Provider>)
    .toJSON();
  expect(rocket).toMatchSnapshot();
});
