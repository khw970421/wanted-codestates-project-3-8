import React, { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getItems, isExist } from '../../utils/LocalStorage';
import styled from 'styled-components';
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
  // isExist 함수로 local에 저장된 것이 없다면 빈배열 리턴
  const [storageForests, setStorageForests] = useState(
    isExist(getItems('forests')),
  );

  // searchContent가 바뀌면 storageForests도 filter하여 재렌더링
  useEffect(() => {
    if (searchContent.length !== 0) {
      setStorageForests(
        isExist(getItems('forests')).filter(
          storageForest =>
            storageForest[searchTheme]?.indexOf(searchContent) > -1,
        ),
      );
    } else {
      setStorageForests(isExist(getItems('forests')));
    }
  }, [searchContent]);

  // storageForests가 빈배열을 제외하고 전부 컨텐츠보이게 리렌더링
  return storageForests.length !== 0 ? (
    <>
      {storageForests.map(({ name, address, phone }, idx) => (
        <ContentsContainer key={idx}>
          <div>{name}</div>
          <div>{address}</div>
          <div>{phone}</div>
        </ContentsContainer>
      ))}
    </>
  ) : (
    <div>저장된 목록이 없습니다.</div>
  );
};

const ContentsContainer = styled.div`
  margin: 10px;
  background-color: #d3d3d3;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
`;

SaveContents.propTypes = {
  searchTheme: PropTypes.string,
  searchContent: PropTypes.string,
};
export default SaveContents;
