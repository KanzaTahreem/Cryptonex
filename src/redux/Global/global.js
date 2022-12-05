export const FETCH_GLOBAL_DATA = 'cryptoCurrency/currency/FETCH_GLOBAL_DATA';

const initialState = {
  globalArray: [],
};

export const fetchData = (payload) => ({
  type: FETCH_GLOBAL_DATA,
  payload,
});

const globalDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GLOBAL_DATA:
      return {
        ...state, globalArray: action.payload,
      };
    default:
      return state;
  }
};

export default globalDataReducer;
