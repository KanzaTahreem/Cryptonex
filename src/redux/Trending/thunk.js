import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData, FETCH_TRENDING_DATA, setLoading } from './trending';

const fetchTrendingDataFromApi = createAsyncThunk(FETCH_TRENDING_DATA, async (_, thunkApi) => {
  thunkApi.dispatch(setLoading(true));
  const response = await fetch('https://api.coingecko.com/api/v3/search/trending', {
    method: 'GET',
  });

  const responseJSON = await response.json();
  thunkApi.dispatch(fetchData(responseJSON));
  thunkApi.dispatch(setLoading(false));
  return responseJSON;
});

export default fetchTrendingDataFromApi;
