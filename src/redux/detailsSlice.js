import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDetails = createAsyncThunk('currency/fetchDetails', async (coinId) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  const data = await response.json();
  console.log(response);
  console.log(data);
  return data;
});

const initialState = {
  detailsArray: [],
  loading: false,
  error: '',
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          detailsArray: action.payload,
          error: '',
        };
        return newState;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          detailsArray: [],
          error: action.error.message,
        };
        return newState;
      });
  },
});

export default detailsSlice.reducer;
