import React from 'react';
import styled from 'styled-components';
import AddListBtn from '../components/AddListBtn';
import DataList from '../components/DataList';
import SearchBar from '../components/Search/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { notify } from '../redux/action';
import NotificationMessage from '../components/NotificationMessage';

const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.notificationReducer.notification);
  console.log(state);
  // dispatch(notify('hello'));
  return (
    <Wrap>
      <SearchBar />
      <h2>저장된 목록</h2>
      <button onClick={() => dispatch(notify('저장되었습니다', 2000))}>
        테스트
      </button>

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
        <DataList
          title={'속리산 숲 체험 휴양 마을'}
          address={'충청북도 보은군 속리산면 속리산로 596'}
          tel={'043-540-3220'}
          massage={
            '더울 때 가야 더 좋은 곳 여름에 와야 한다. 가격도 저렴하고어쩌구저쩌구'
          }
        />
        <DataList
          title={'속리산 숲 체험 휴양 마을'}
          address={'충청북도 보은군 속리산면 속리산로 596'}
          tel={'043-540-3220'}
          massage={
            '더울 때 가야 더 좋은 곳 여름에 와야 한다. 가격도 저렴하고어쩌구저쩌구'
          }
        />
        <DataList
          title={'속리산 숲 체험 휴양 마을'}
          address={'충청북도 보은군 속리산면 속리산로 596'}
          tel={'043-540-3220'}
          massage={
            '더울 때 가야 더 좋은 곳 여름에 와야 한다. 가격도 저렴하고어쩌구저쩌구'
          }
        />
        <DataList
          title={'속리산 숲 체험 휴양 마을'}
          address={'충청북도 보은군 속리산면 속리산로 596'}
          tel={'043-540-3220'}
          massage={
            '더울 때 가야 더 좋은 곳 여름에 와야 한다. 가격도 저렴하고어쩌구저쩌구'
          }
        />
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
      <NotificationMessage state={state} />
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
