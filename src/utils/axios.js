import axios from 'axios';
import { API_URL } from '../constants';

export const getData = async () => {
  try {
    const { data } = await axios.get(API_URL);
    if ( typeof data === 'string' && data.includes('SERVICE ERROR')) {
      console.log('너무많은 데이터 요청');
      return {
        result: 'error',
      };
    } else {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

