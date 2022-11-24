export const FETCH_CHART = 'cryptoData/crypt/FETCH_CHART';
export const SET_LOADING = 'cryptoData/team/SET_LOADING';

const initialState = {
  dataArray: [],
  isLoading: false,
};

export const fetchChart = (payload) => ({
  type: FETCH_CHART,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHART:
      return {
        ...state, dataArray: action.payload,
      };

    case SET_LOADING:
      return {
        ...state, isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default chartReducer;
