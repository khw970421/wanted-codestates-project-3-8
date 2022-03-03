import React from 'react';
import styled from 'styled-components';
import AddListBtn from '../components/AddListBtn';
import DataList from '../components/DataList';
import SearchBar from '../components/Search/SearchBar';

const Main = () => {
  return (
    <Wrap>
      <SearchBar />
      <h2>저장된 목록</h2>
      <ul>
        {/* map */}
        <DataList
          title={'속리산 숲 체험 휴양 마을'}
          address={'충청북도 보은군 속리산면 속리산로 596'}
          tel={'043-540-3220'}
          massage={
            '더울 때 가야 더 좋은 곳 여름에 와야 한다. 가격도 저렴하고어쩌구저쩌구'
          }
        />
      </ul>
      <AddListBtn />
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 428px;
  margin: 20px auto;
  h2 {
    margin: 17px;
    font-weight: bold;
    font-size: 18px;
  }
`;

export default Main;
