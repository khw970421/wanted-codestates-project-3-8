import { initialState } from './initialState';
import { SAVE_PLACE } from '../action/index';

const savePlaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PLACE: {
      const placeItems = [...state.placeItems, action.payload.item];
      return {
        ...state,
        placeItems,
      };
    }
    default:
      return state;
  }
};

export default savePlaceReducer;
