import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchChart, FETCH_CHART } from './chart';

const fetchChartFromApi = createAsyncThunk(FETCH_CHART, async (coinId, thunkApi) => {
  const response = await fetch(`https://cryptfacts.up.railway.app/v4/details/chart/${coinId}`, {
    method: 'GET',
  });

  const responseJSON = await response.json();
  thunkApi.dispatch(fetchChart(responseJSON));
  return responseJSON;
});

export default fetchChartFromApi;
