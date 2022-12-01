import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import CoinChart from '../components/CoinChart';

it('renders correctly', () => {
  const rocket = renderer
    .create(<Provider store={store}><CoinChart /></Provider>)
    .toJSON();
  expect(rocket).toMatchSnapshot();
});
