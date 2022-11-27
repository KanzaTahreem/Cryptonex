import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import NumericData from '../components/NumericData';

it('renders correctly', () => {
  const rocket = renderer
    .create(
      <Router>
        <Provider store={store}>
          <NumericData />
        </Provider>
      </Router>,
    )
    .toJSON();
  expect(rocket).toMatchSnapshot();
});
