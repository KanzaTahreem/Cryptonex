import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Navbar from '../components/Navbar';

describe('Testing Navbar', () => {
  let navbar;
  beforeAll(async () => {
    navbar = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Navbar />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(navbar).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(navbar).toMatchSnapshot();
  });

  it('should have 3 links', () => {
    const navBarLinks = waitFor(() => screen.getByTestId('navlinks'));
    waitFor(() => expect(navBarLinks.querySelectorAll('a').length).toBe(3));
  });
});
