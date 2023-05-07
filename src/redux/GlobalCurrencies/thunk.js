import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData, FETCH_GLOBAL_DATA } from './global';

const fetchGLobalDataFromApi = createAsyncThunk(FETCH_GLOBAL_DATA, async (_, thunkApi) => {
  const response = await fetch('https://api.coingecko.com/api/v3/global', {
    method: 'GET',
  });

  const responseJSON = await response.json();
  thunkApi.dispatch(fetchData(responseJSON));
  return responseJSON;
});

export default fetchGLobalDataFromApi;
