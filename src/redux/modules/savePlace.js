import { initialState } from './initialState';
import { getItems, setItems } from '../../utils/LocalStorage';

export const SAVE_PLACE = 'SAVE_PLACE';

export const savePlaceItem = item => {
  const placeItems = getItems('placeItems') || [];
  setItems('placeItems', [...placeItems, item]);
  return {
    type: SAVE_PLACE,
    payload: {
      item,
    },
  };
};

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
