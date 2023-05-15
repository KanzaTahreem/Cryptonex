import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Currencies from '../pages/Currencies';

const currenciesArray = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
  }];

describe('Testing Currencies', () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(currenciesArray),
  });
  let currencies;
  beforeAll(async () => {
    currencies = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Currencies />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should renders correctly', () => {
    expect(currencies).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(currencies).toMatchSnapshot();
  });

  it('renders the component', () => {
    waitFor(() => expect(screen.getByText('Top 100 Crypto Currencies Data')).toBeInTheDocument());
  });

  it('should have an input field', async () => {
    const inputEl = waitFor(() => screen.findByTestId('input'));
    waitFor(() => expect(inputEl).toBeInTheDocument());
    waitFor(() => expect(inputEl).toHaveAttribute('type', 'text'));
  });

  it('should render two currencies', async () => {
    const ul = waitFor(() => screen.findByTestId('coins-list-container'));
    waitFor(() => expect(ul.querySelectorAll('li').length).toBe(2));
  });
});
