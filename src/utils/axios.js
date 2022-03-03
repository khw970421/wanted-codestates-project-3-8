import axios from 'axios';
import { API_URL } from '../constants';

export const getData = async pageCount => {
  console.log(pageCount);
  const { data } = await axios.get(
    `${API_URL}&perPage=10&currentPage=${pageCount}`,
  );
  return data;
};
