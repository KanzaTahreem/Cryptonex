import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchChart = createAsyncThunk('currency/chart', async (coinId) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30&interval=daily`);
  const data = await response.json();
  return data;
});

const initialState = {
  chartArray: [],
  loading: false,
  error: '',
};

const chartSlice = createSlice({
  name: 'trending',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChart.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
      .addCase(fetchChart.fulfilled, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          chartArray: action.payload,
          error: '',
        };
        return newState;
      })
      .addCase(fetchChart.rejected, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          chartArray: [],
          error: action.error.message,
        };
        return newState;
      });
  },
});

export default chartSlice.reducer;
