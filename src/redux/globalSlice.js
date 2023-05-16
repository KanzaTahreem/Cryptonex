import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGlobalCurrencies = createAsyncThunk('currencies/fetchGlobalCurrencies', async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/global');
  const data = await response.json();
  return data;
});

const initialState = {
  globalArray: [],
  loading: false,
  error: '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobalCurrencies.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
      .addCase(fetchGlobalCurrencies.fulfilled, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          globalArray: action.payload,
          error: '',
        };
        return newState;
      })
      .addCase(fetchGlobalCurrencies.rejected, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          globalArray: [],
          error: action.error.message,
        };
        return newState;
      });
  },
});

export default globalSlice.reducer;
