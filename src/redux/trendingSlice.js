import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTrendingCurrencies = createAsyncThunk('currencies/fetchTrendingCurrencies', async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
  const data = await response.json();
  return data;
});

const initialState = {
  trendingArray: [],
  loading: false,
  error: '',
};

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingCurrencies.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
      .addCase(fetchTrendingCurrencies.fulfilled, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          trendingArray: action.payload,
          error: '',
        };
        return newState;
      })
      .addCase(fetchTrendingCurrencies.rejected, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          trendingArray: [],
          error: action.error.message,
        };
        return newState;
      });
  },
});

export default trendingSlice.reducer;
