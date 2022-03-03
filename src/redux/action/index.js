import { getItems, setItems } from '../../utils/LocalStorage';

export const SAVE_PLACE = 'SAVE_PLACE';
export const UPDATE_PLACE = 'SAVE_PLACE';

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

export const updatePlaceItem = (memo, index) => {
  const placeItems = getItems('placeItems');
  const _placeItems = placeItems.map((placeItem, i) => {
    return i === index ? { ...placeItem, message: memo } : placeItem;
  });
  setItems('placeItems', [..._placeItems]);
  return {
    type: UPDATE_PLACE,
    payload: {
      _placeItems,
    },
  };
};
