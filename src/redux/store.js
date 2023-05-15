import { configureStore } from '@reduxjs/toolkit';
import detailsSlice from './detailsSlice';
import currenciesSlice from './currenciesSlice';
import globalSlice from './globalSlice';
import trendingSlice from './trendingSlice';
import chartSlice from './chartSlice';

const store = configureStore({
  reducer: {
    currency: currenciesSlice,
    global: globalSlice,
    trending: trendingSlice,
    details: detailsSlice,
    chart: chartSlice,
  },
});

export default store;
