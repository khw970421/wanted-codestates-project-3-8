import { getItems, setItems } from '../../utils/LocalStorage';
import { getData } from '../../utils/axios';

export const SAVE_PLACE = 'SAVE_PLACE';
export const UPDATE_PLACE = 'SAVE_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const GET_DATA = 'GET_DATA';
export const NOTIFY = 'NOTIFY';
export const GET_PAGEDATA = 'GET_PAGEDATA';

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

export const getDataFromApi = async pageCount => {
  console.log(pageCount, '!!!');
  const data = await getData(pageCount);
  // eslint-disable-next-line no-debugger
  // debugger;
  if (data === 'undefined' && data.result === 'error') {
    alert('너무 많이 데이터를 요청했습니다.');
    return;
  }
  const filtered = data.body.map(item => {
    return {
      name: item.NM,
      address: item.ADRES,
      phoneNumber: item.TELNO,
    };
  });
  return {
    type: GET_DATA,
    payload: filtered,
  };
};

export const notify =
  (message, time = 1500) =>
  dispatch => {
    dispatch(showMessage(message));
    setTimeout(() => {
      dispatch(deleteMessage());
    }, time);
  };

export const showMessage = message => {
  return {
    type: SHOW_MESSAGE,
    payload: { message },
  };
};

export const deleteMessage = () => {
  return {
    type: DELETE_MESSAGE,
  };
};

export const getPageData = pageCount => {
  // console.log(pageCount);
  return {
    type: GET_PAGEDATA,
    payload: pageCount,
  };
};
