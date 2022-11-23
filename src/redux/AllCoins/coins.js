export const FETCH_DATA = 'cryptoData/crypto/FETCH_DATA';
export const SET_LOADING = 'footabll/team/SET_LOADING';

const initialState = {
  dataArray: [],
  isLoading: false,
};

export const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
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

export default coinsReducer;
