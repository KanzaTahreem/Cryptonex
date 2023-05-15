import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrencies = createAsyncThunk('currencies/fetchCurrencies', async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en');
  const data = await response.json();
  return data;
});

const initialState = {
  dataArray: [],
  filteredSearchArray: [],
  loading: false,
  error: '',
};

const currenciesSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    userInput: (state, action) => {
      const filteredArray = state.dataArray
        .filter((item) => item.name.toLowerCase().includes(action.payload));
      return {
        ...state,
        filteredSearchArray: filteredArray,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          dataArray: action.payload,
          filteredSearchArray: action.payload,
          error: '',
        };
        return newState;
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        const newState = {
          loading: false,
          dataArray: [],
          filteredSearchArray: [],
          error: action.error.message,
        };
        return newState;
      });
  },
});

export const { userInput } = currenciesSlice.actions;
export default currenciesSlice.reducer;
