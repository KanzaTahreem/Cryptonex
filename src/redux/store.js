import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './AllCurrencies/currencies';
import chartReducer from './CurrencyChart/chart';
import globalCurrencyReducer from './GlobalCurrencies/global';
import trendingCurrencyReducer from './TrendingCurrencies/trending';

const store = configureStore({
  reducer: {
    crypto: currenciesReducer,
    chart: chartReducer,
    global: globalCurrencyReducer,
    trending: trendingCurrencyReducer,
  },
});

export default store;
