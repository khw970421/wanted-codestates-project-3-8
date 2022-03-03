import { getItems, setItems } from '../../utils/LocalStorage';

export const SAVE_PLACE = 'SAVE_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';

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

export const deletePlaceItem = removedIdx => {
  const placeItems = getItems('placeItems').filter(
    (_, idx) => idx !== removedIdx,
  );
  setItems('placeItems', placeItems);
  return {
    type: DELETE_PLACE,
    payload: {
      placeItems,
    },
  };
};
