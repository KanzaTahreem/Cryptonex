import { configureStore } from '@reduxjs/toolkit';
import teamReducer from './teams/team';

const store = configureStore({
  reducer: {
    teams: teamReducer,
  },
});

export default store;
