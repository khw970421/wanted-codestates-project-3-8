import { GET_PAGEDATA } from '../action';
import { initialState } from './initialState';

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGEDATA: {
      const pageCount = action.payload + 1;
      return {
        ...state,
        pageCount: pageCount,
      };
    }
    default:
      return state;
  }
};

export default pageReducer;
