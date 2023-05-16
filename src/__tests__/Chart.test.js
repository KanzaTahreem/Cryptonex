import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CurrencyChart from '../components/CurrencyChart';

describe('Testing Chart', () => {
  let chart;
  beforeAll(async () => {
    chart = renderer
      .create(
        <Provider store={store}>
          <Router>
            <CurrencyChart />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(chart).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(chart).toMatchSnapshot();
  });
});
