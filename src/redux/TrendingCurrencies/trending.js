export const FETCH_TRENDING_DATA = 'cryptoCurrency/currency/FETCH_TRENDING_DATA';
export const SET_LOADING = 'cryptoCurrency/currency/SET_LOADING';

const initialState = {
  trendingArray: [],
  isLoading: false,
};

export const fetchData = (payload) => ({
  type: FETCH_TRENDING_DATA,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

const trendingCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDING_DATA:
      return {
        ...state, trendingArray: action.payload,
      };

    case SET_LOADING:
      return {
        ...state, isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default trendingCurrencyReducer;
