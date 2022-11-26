import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import CoinDetails from '../../Pages/CoinDetails';

const rocketData = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 16389,
    market_cap: 314452211835,
    market_cap_rank: 1,
    fully_diluted_valuation: 343660042495,
    high_24h: 16632.65,
    low_24h: 16088.05,
    price_change_24h: 215.46,
    price_change_percentage_24h: 1.33218,
    market_cap_change_24h: 3115009973,
    market_cap_change_percentage_24h: 1.00053,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -76.30091,
    atl: 67.81,
    atl_change_percentage: 24030.98888,
  }];

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(rocketData),
  });
  render(
    <Router>
      <Provider store={store}>
        <CoinDetails />
      </Provider>
    </Router>,
  );
});

describe('CoinsList', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render two coins', async () => {
    const ul = await screen.findByTestId('coin-stats');
    waitFor(() => expect(ul.querySelectorAll('li').length).toBe(1));
  });
});
