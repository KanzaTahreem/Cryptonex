import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import CryptoList from '../../Pages/CoinsList';

const coinData = [
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

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(coinData),
  });
  render(
    <Router>
      <Provider store={store}>
        <CryptoList />
      </Provider>
    </Router>,
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('CoinsList', () => {
  it('should display quote on Homepage', async () => {
    const quote = await screen.findByTestId('quote');
    expect(quote).toHaveTextContent('The future of Money is digital currency');
  });

  it('should have an input field', async () => {
    const inputEl = await screen.findByTestId('input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'text');
  });

  it('should render two coins', async () => {
    const ul = await screen.findByTestId('coins-list-container');
    waitFor(() => expect(ul.querySelectorAll('li').length).toBe(2));
  });
});
