import { initialState } from './initialState';
import { UPDATE_PLACE } from '../action/index';

const updatePlaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLACE: {
      return {
        ...state,
        placeItems: action.payload._placeItems,
      };
    }
    default:
      return state;
  }
};

export default updatePlaceReducer;
