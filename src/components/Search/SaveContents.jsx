import React, { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getItems } from '../../utils/LocalStorage';
// const Dummy_Data = [
//   {
//     name: '속리산 숲 체험',
//     address: '충청북도...',
//     phone: '010-xxxx-xxxx',
//     memo: '추울 때 가야 더 좋은 곳',
//   },
//   {
//     name: '지리산 숲 체험',
//     address: '~북도',
//     phone: '010-xxxx-xxxx',
//     memo: '추울 때 가야 더 좋은 곳',
//   },
//   {
//     name: '에베레스트 숲 체험',
//     address: '~해외',
//     phone: '010-xxxx-xxxx',
//     memo: '추울 때 가야 더 좋은 곳',
//   },
//   {
//     name: '한라산 숲 체험',
//     address: '~제주도',
//     phone: '010-xxxx-xxxx',
//     memo: '추울 때 가야 더 좋은 곳',
//   },
//   {
//     name: '산맥 숲 체험',
//     address: '~산맥',
//     phone: '010-xxxx-xxxx',
//     memo: '추울 때 가야 더 좋은 곳',
//   },
// ];

/*
localStorage.setItem('forests',JSON.stringify([
  {
    name: '속리산 숲 체험',
    address: '충청북도...',
    phone: '010-xxxx-xxxx',
    memo: '추울 때 가야 더 좋은 곳',
  },
  {
    name: '지리산 숲 체험',
    address: '~북도',
    phone: '010-xxxx-xxxx',
    memo: '추울 때 가야 더 좋은 곳',
  },
  {
    name: '에베레스트 숲 체험',
    address: '~해외',
    phone: '010-xxxx-xxxx',
    memo: '추울 때 가야 더 좋은 곳',
  },
  {
    name: '한라산 숲 체험',
    address: '~제주도',
    phone: '010-xxxx-xxxx',
    memo: '추울 때 가야 더 좋은 곳',
  },
  {
    name: '산맥 숲 체험',
    address: '~산맥',
    phone: '010-xxxx-xxxx',
    memo: '추울 때 가야 더 좋은 곳',
  },
]))
*/

const SaveContents = ({ searchTheme, searchContent }) => {
  const [storageForests, setStorageForests] = useState(
    getItems('forests') ? getItems('forests') : [],
  );
  console.log(storageForests);
  useEffect(() => {
    if (searchContent.length !== 0) {
      setStorageForests(
        getItems('forests').filter(
          storageForest =>
            storageForest[searchTheme]?.indexOf(searchContent) > -1,
        ),
      );
    } else {
      setStorageForests(getItems('forests'));
    }
  }, [searchContent]);
  return storageForests.length !== 0 ? (
    <>
      {storageForests.map(({ name, address, phone }, idx) => (
        <div key={idx}>
          <div>{name}</div>
          <div>{address}</div>
          <div>{phone}</div>
        </div>
      ))}
    </>
  ) : (
    <div>저장된 목록이 없습니다.</div>
  );
};

SaveContents.propTypes = {
  searchTheme: PropTypes.string,
  searchContent: PropTypes.string,
};
export default SaveContents;
