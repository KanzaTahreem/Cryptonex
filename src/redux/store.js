import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './AllCoins/coins';
import chartReducer from './CoinChart/chart';

const store = configureStore({
  reducer: {
    crypto: coinsReducer,
    chart: chartReducer,
  },
});

export default store;
