import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../pages/Home';

describe('Testing Home', () => {
  let home;
  beforeAll(async () => {
    home = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(home).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(home).toMatchSnapshot();
  });

  it('renders the component', () => {
    waitFor(() => expect(screen.getByText('Hi, there')).toBeInTheDocument());
    waitFor(() => expect(screen.getByText('Are you excited to kickstart your day')).toBeInTheDocument());
    waitFor(() => expect(screen.getAllByTestId('global-data-card')).toHaveLength(6));
  });
});
