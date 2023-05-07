export const FETCH_CHART = 'cryptoData/crypt/FETCH_CHART';

const initialState = {
  dataArray: [],
};

export const fetchChart = (payload) => ({
  type: FETCH_CHART,
  payload,
});

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHART:
      return {
        ...state, dataArray: action.payload,
      };
    default:
      return state;
  }
};

export default chartReducer;
