import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './AllCoins/coins';
import chartReducer from './CoinChart/chart';
import globalDataReducer from './Global/global';

const store = configureStore({
  reducer: {
    crypto: coinsReducer,
    chart: chartReducer,
    global: globalDataReducer,
  },
});

export default store;
