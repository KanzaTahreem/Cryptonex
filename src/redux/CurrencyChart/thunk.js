import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchChart, FETCH_CHART } from './chart';

const fetchChartFromApi = createAsyncThunk(FETCH_CHART, async (coinId, thunkApi) => {
  const response = await fetch(`http://localhost:3005/v4/details/chart/${coinId}`, {
    method: 'GET',
  });

  const responseJSON = await response.json();
  thunkApi.dispatch(fetchChart(responseJSON));
  return responseJSON;
});

export default fetchChartFromApi;
