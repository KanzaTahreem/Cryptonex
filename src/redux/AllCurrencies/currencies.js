export const FETCH_DATA = 'cryptoData/crypto/FETCH_DATA';
export const SET_LOADING = 'footabll/team/SET_LOADING';
export const USER_INPUT = 'cryptoData/crypto/USER_INPUT';

const initialState = {
  dataArray: [],
  filteredSearchArray: [],
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

export const userInput = (input) => ({
  type: USER_INPUT,
  input,
});

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state, dataArray: action.payload, filteredSearchArray: action.payload,
      };

    case SET_LOADING:
      return {
        ...state, isLoading: action.payload,
      };

    case USER_INPUT: {
      const filteredArray = state.dataArray
        .filter((item) => item.name.toLowerCase().includes(action.input));
      return {
        ...state,
        filteredSearchArray: filteredArray,
      };
    }
    default:
      return state;
  }
};

export default currenciesReducer;
