import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData, FETCH_DATA, setLoading } from './coins';

const fetchDataFromApi = createAsyncThunk(FETCH_DATA, async (_, thunkApi) => {
  thunkApi.dispatch(setLoading(true));
  const response = await fetch('http://localhost:3002/v4/details', {
    method: 'GET',
  });

  const responseJSON = await response.json();
  thunkApi.dispatch(fetchData(responseJSON));
  thunkApi.dispatch(setLoading(false));
  return responseJSON;
});

export default fetchDataFromApi;
