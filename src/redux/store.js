import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './AllCoins/coins';

const store = configureStore({
  reducer: {
    crypto: coinsReducer,
  },
});

export default store;
