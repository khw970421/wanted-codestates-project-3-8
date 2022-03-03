import { getItems, setItems } from '../../utils/LocalStorage';
import { getData } from '../../utils/axios';

export const SAVE_PLACE = 'SAVE_PLACE';
export const UPDATE_PLACE = 'SAVE_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const GET_DATA = 'GET_DATA';
export const NOTIFY = 'NOTIFY';

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

export const getDataFromApi = async () => {
  const data = await getData();
  const filterd = data.body.map(item => {
    return {
      name: item.NM,
      address: item.ADRES,
      phoneNumber: item.TELNO,
    };
  });
  return {
    type: GET_DATA,
    payload: filterd,
  };
};
export const notify =
  (message, time = 500) =>
  dispatch => {
    dispatch(showMessage(message, time));
    setTimeout(() => {
      dispatch(deleteMessage());
    }, time);
  };

export const showMessage = (message, time) => {
  return {
    type: SHOW_MESSAGE,
    payload: { message, time },
  };
};

export const deleteMessage = () => {
  return {
    type: DELETE_MESSAGE,
  };
};
